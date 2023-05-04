import { Box, Typography } from '@mui/material'
import React from 'react'
import "./navbar.css"
import { navData } from '../../constants/data'

const Navbar = () => {
    return (
        <>
            <Box className="mainBox" marginTop={10}>
                {
                  navData.map((data,i) => {
                    return(
                        <Box className="navData">
                        <img src={data.url} alt='nav' style={{width:"64px"}} />
                        <Typography style={{fontSize:"14px", fontWeight:"bolder"}}>{data.text}</Typography>
                    </Box>
                    )
                  })
                }
            </Box>
        </>
    )
}

export default Navbar
