import { Box, Button, Typography } from '@mui/material'
import React, { useContext, useState } from 'react'
import "./customButton.css"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LoginDialogue from '../Login/LoginDialogue';
import { DataContext } from '../../context/DataProvider';

const CustomButton = () => {
  const[open, setOpen] = useState(false);
  // const[account,setAccount] = useContext(DataContext)
  const[accountInfo,setAccountInfo] = useState("")

  const openDialog = () => {
    setOpen(true)
    console.log("hello world")
  }

  return (
 <>
 <Box className="mainBox">
    <Button variant='contained'
    onClick={openDialog}
     style={{width:"30%",color:"black",background:"white"}}
     >Login</Button>
    <Typography style={{marginLeft:"40px", width:"60%"}}>Become a Seller</Typography>
    <Typography style={{marginLeft:"20px"}}>More</Typography>
    <Box className="shoppingButton">
        <ShoppingCartIcon/>
        <Typography>Cart</Typography>
    </Box>
    <LoginDialogue open={open} setOpen={setOpen} setAccountInfo={setAccountInfo}/>
 </Box>
 </>
  )
}

export default CustomButton
