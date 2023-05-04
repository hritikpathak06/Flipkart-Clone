import React from 'react'
import { useSelector } from 'react-redux'
import "./cart.css"
import { Box, Grid, Typography } from '@mui/material';
import CartItem from './CartItem';

const ShoppingCart = () => {
    const {cartItems} = useSelector(state => state.cart);
  return (
    <>
    {
        cartItems ?
        <Grid container>
          <Grid item lg={9} md={9} sm={12}>
              <Box>
                <Typography>My Cart{`(${cartItems.length})`}</Typography>
              </Box>
              {
                cartItems.map(item => {
                    <CartItem/>
                })
              }
          </Grid>
          <Grid item lg={3} md={3} sm={12}>

          </Grid>
        </Grid>
        : <div>empty</div>
    }
    </>
  )
}

export default ShoppingCart
