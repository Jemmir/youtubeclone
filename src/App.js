
import { Box } from '@mui/material'
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import ChannelDetail from './routes/ChannelDetail'
import Feed from './routes/Feed'
import SearchFeed from './routes/SearchFeed'
import VideoDetail from './routes/VideoDetail'

const App = () => {
  return (
    <BrowserRouter>
        <Box sx={{backgroundColor: "#000"}}>
            <Navbar />
            <Routes>
                <Route path="/" exact element ={<Feed />} />
                <Route path="/video/:id" exact element ={<VideoDetail />} />
                <Route path="/channel/:id" exact element ={<ChannelDetail />} />
                <Route path="/search/:searchTerm" exact element ={<SearchFeed />} />
            </Routes>
        </Box>
    </BrowserRouter>
   
  )
}

export default App