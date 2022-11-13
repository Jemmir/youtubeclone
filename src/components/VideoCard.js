import { CheckCircle } from '@mui/icons-material'
import { Card, CardContent, Typography, CardMedia } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { demoThumbnailUrl, demoVideoTitle,demoChannelTitle, demoChannelUrl, demoVideoUrl } from '../utils/constants'

const VideoCard = ({width, video: {id:{videoId}, snippet}}) => {

  return (
    <Card sx={{width:{md: width || "320px", xs:"100%"}, boxShadow: "none", borderRadius: "none"}}>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
            <CardMedia 
                image={snippet?.thumbnails?.high?.url}
                alt={snippet?.title}
                sx={{width:"100%", height: 180}}
                
                />
            
        </Link>
        <CardContent sx={{backgroundColor: "#1e1e1e", height:106}}>
            <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
                <Typography variant="subtitle1" fontWeight="bold" color="#FFF">
                    {snippet?.title.slice(0,60) || demoVideoTitle.slice(0,60)}
                </Typography>
            </Link>
            <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
                <Typography variant="subtitle2" fontWeight="bold" color="#FFF">
                    {snippet?.channelTitle || demoChannelTitle}
                    <CheckCircle sx={{fontSize: 12, color:"gray", ml: "5px"}} />
                </Typography>
            </Link>
        </CardContent>
    </Card>
  )
}

export default VideoCard