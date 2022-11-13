import { Box, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import Videos from '../components/Videos'
import { fetchFromAPI } from '../utils/fetchFROMAPI'
const SearchFeed = () => {
    const {searchTerm} = useParams()
    const [videos, setVideos] = useState([])
    useEffect(() => {
        setVideos(null)
        fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
        .then((data) => {
            setVideos(data.items)
        })
    },[searchTerm])

  return (
    <Box p={2} sx={{overflowY: "auto", height: "90vh", flex:2}}>
            <Typography variant="h4" fontWeight="bold" mb={2} sx={{color:"white"}}>
                Search results : <span style={{color: "#F31503"}}>{searchTerm}</span>
            </Typography>
            <Videos videos={videos}/>
            
    </Box>
  )
}

export default SearchFeed