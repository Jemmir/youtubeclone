import { Box, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Sidebar from '../components/Sidebar'
import Videos from '../components/Videos'
import { fetchFromAPI } from '../utils/fetchFROMAPI'
const Feed = () => {
    const [selected, setSelected] = useState("New")
    const [videos, setVideos] = useState([])
    useEffect(() => {
        setVideos(null)
        fetchFromAPI(`search?part=snippet&q=${selected}`)
        .then((data) => {
            setVideos(data.items)
        })
    },[selected])

  return (
    <Stack sx={{flexDirection:{sx: "column", md:"row"}}}>
        <Box sx={{height: {sx: "auto", md:"92vh"}, borderRight: "1px solid #3d3d3d", px:{sx:0, md:2}}}>
            <Sidebar selected={selected} setSelected={setSelected} />
            <Typography className="copyright" variant="body2" sx={{mt:1.5, color:"#fff"}}>
                Copyright 2022 YoutubeClone
            </Typography>
        </Box>
        <Box p={2} sx={{overflowY: "auto", height: "90vh", flex:2}}>
            <Typography variant="h4" fontWeight="bold" mb={2} sx={{color:"white"}}>
                {selected}<span style={{color: "#F31503"}}> videos</span>
            </Typography>
            <Videos videos={videos}/>
            
        </Box>
    </Stack>
  )
}

export default Feed