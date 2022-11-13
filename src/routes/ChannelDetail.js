import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ChannelCard from '../components/ChannelCard'
import Videos from '../components/Videos'
import { fetchFromAPI } from '../utils/fetchFROMAPI'

const ChannelDetail = () => {
  const { id } = useParams()
  const [channelDetail, setChannelDetail] = useState(null)
  const [videos, setVideos] = useState([])
 
  

  useEffect(() => {
    fetchFromAPI(`channels?part="snippet&id=${id}`)
    .then(data => setChannelDetail(data?.items[0]))

    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
    .then(data => setVideos(data?.items))

  },[id])
  return (
    <Box minHeight="95vh">
      <Box>
        <div style={{background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)", zIndex:10, height:"300px"}} />
        <ChannelCard channelDetail={channelDetail} marginTop="-93px" />
        
      </Box>
      <Box display="flex" p="2">
        <Box sx={{mr: {sm:"100px"}}} />
          <Videos videos={videos} width="300px"/>
        

      </Box>
    </Box>
    
  )
}

export default ChannelDetail