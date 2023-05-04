import React from 'react'
import "./header.css"
import Search from './Search';
import CustomButton from './CustomButton';
import { AppBar, Toolbar, Box, styled, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';


const Header = () => {
    const logoUrl = 'https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png'

    return (
        <AppBar style={{ background: "#2874f0", height:"54px" }}>
            <Toolbar>
                <Box className="headerBox">
                    <NavLink to={'/'}>
                    <img src={logoUrl} alt="" className='logoUrl' />
                    </NavLink>
                    <Box className='subHeader'>
                        <Typography style={{ fontSize: "10px", fontStyle: "italic" }}>Explore Plus</Typography>
                        <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/plus_aef861.png" alt="" className='smallImg' />
                    </Box>
                </Box>
                <Search />
                <CustomButton/>
            </Toolbar>
        </AppBar>
    )
}

export default Header
