import { Stack } from '@mui/material'
import React, { useState } from 'react'
import { categories } from '../utils/constants'

const Sidebar = ({ selected, setSelected }) => {

    
  return (
    <Stack
    direction="row"
    sx={{
        overflowY: "auto",
        height:{sx: "auto", md:"95%"},
        flexDirection: {md: "column"}
    }}>
        {
            categories.map((item) => (
                <button key={item.name} onClick={() => setSelected(item.name)} className="category-btn" style={{background: item.name === selected && "#FC1503", color:"white"}}>
                    <span style={{color: item.name === selected ? "white" : "red", marginRight:15}}>{item.icon}</span>
                    <span style={{opacity: item.name === selected ? "1" : "0.7"}}>{item.name}</span>
                </button>
            ))
        }
    </Stack>
  )
}

export default Sidebar