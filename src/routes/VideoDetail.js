import { CheckCircle } from '@mui/icons-material'
import { Box, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'
import { Link, useParams } from 'react-router-dom'
import Videos from '../components/Videos'
import { fetchFromAPI, } from '../utils/fetchFROMAPI'
import indice from "../assets/indice.png"

const VideoDetail = () => {
  const [video, setVideo] = useState(null)
  const [relatedVideos, setRelatedVideos] = useState(null)
  const [comments, setComments] = useState([])
  const {id} = useParams()


  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
    .then(data => setVideo(data.items[0]))
    
    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video&maxResults=20`)
    .then(data => setRelatedVideos(data.items))

    fetchFromAPI(`commentThreads?part=snippet&videoId=${id}`)
    .then(data => {
      console.log(data.items)
      setComments(data.items)}
      )
    
  },[id])

  if(video === null || comments.length === 0) return "Loading...."

  const {snippet:{title, channelId, channelTitle}, statistics:{viewCount, likeCount}} = video
  

  return (
    <Box minHeight="95vh">
      <Stack direction={{xs:"column", md:"row"}}>
        <Box flex={3} >
          <Box sx={{width:"100%", top:"86px"}}>
            <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className="react-player" controls/>
          </Box>
          <Typography color="#fff" variant="h5" fontWeight="bold" p={2}>
            {title}
          </Typography>
          <Stack direction="row" justifyContent="space-between" sx={{color:"#fff"}} py={1} px={2}>
            <Link to={`channel/${channelId}`}>
              <Typography variant={{sm:"subtitle1", md:"h6"}} color="#fff">
                {channelTitle}
                <CheckCircle sx={{fontSize:"12px", color:"gray", ml:"5px"}}/>
              </Typography>
            </Link>
            <Stack direction="row" gap={2}>
              <Typography variant="body1" sx={{opacity:0.7}}>
                {parseInt(viewCount).toLocaleString()} views
              </Typography>
              <Typography variant="body1" sx={{opacity:0.7}}>
                {parseInt(likeCount).toLocaleString()} likes
              </Typography>
            </Stack>
          </Stack>
          <Stack sx={{borderRadius:5, height:"auto", marginTop:10}}>
            <Stack sx={{borderTop:"1px solid gray", width:"100%", marginBottom:3}} ><Typography sx={{color:"white", fontSize:"20px", fontWeight:"bold", textAlign:"center"}}>Comments section</Typography></Stack>
              {comments?.map((item) => (
                <Stack direction="row" gap={2}>
                  <div style={{width:45, marginTop:20}}>
                  <img src={item.snippet?.topLevelComment?.snippet?.authorProfileImageUrl || indice} alt="logo" height={45} width={45} />
                  </div>
                  <Typography sx={{color:"white" ,width:"100%", borderBottom:"1px solid gray", borderRight:"1px solid gray", borderRadius:2, paddingBottom:2, marginBottom:2}} mt={2}>
                    
                    {item.snippet.topLevelComment.snippet.authorDisplayName}
                    <Typography mt={1} sx={{opacity:0.8}}>
                    {item.snippet.topLevelComment.snippet.textDisplay}
                    </Typography>
                    
                  </Typography>
                 
                </Stack>
                ))}
          
          </Stack>
        </Box>
        <Box flex={1} px={2} py={{ md: 1, xs: 5 }}  >
          <Videos videos={relatedVideos}/>
        </Box>
      </Stack>
    </Box>
  )
}

export default VideoDetail