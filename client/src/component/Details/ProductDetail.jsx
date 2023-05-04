import React from 'react'
import "./detail.css"
import { Typography, Box, Table, TableBody, TableRow, TableCell } from '@mui/material'
import LabelImportantIcon from '@mui/icons-material/LabelImportant';

const ProductDetail = ({ product }) => {
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png'
    const date = new Date(new Date().getTime()+(5 * 24 * 60 * 60 * 1000))
    return (
        <>
            <Typography style={{fontWeight:"bolder", color:"#2874f0", fontSize:"20px"}}>{product.title.longTitle}</Typography>
            <Typography style={{ marginTop: 5, color: "#878787", fontSize: '14px' }}> 8 ratings and 1 review
                <Box component="span"><img src={fassured} alt="" style={{ width: 77, marginLeft: 20 }} /></Box>
            </Typography>
            <Typography>
                <Box component='span' style={{ fontSize: 28 }}>${product.price.cost}</Box>&nbsp;&nbsp;&nbsp;
                <Box component='span' style={{ color: '#878787' }}><strike>${product.price.mrp}</strike></Box>&nbsp;&nbsp;&nbsp;
                <Box component='span' style={{ color: "#388e3c" }}>{product.price.discount}off</Box>
            </Typography>
            {/* <Typography>{product.description}</Typography> */}
            <Typography>Available Offers</Typography>
            <Box className="offerBox">
                <Typography><LabelImportantIcon style={{marginTop:"0px",color:"green",fontSize:"20px"}}/>Flat ₹100 Instant Cashback on Paytm Wallet. Min Order Value ₹1000. Valid once per Paytm account</Typography>
                <Typography><LabelImportantIcon 
                style={{marginTop:"3px", color:"green", fontSize:"20px"}}/>Extra ₹2000 Instant Discount on UPI transaction</Typography>
                <Typography><LabelImportantIcon style={{marginTop:"0px",color:"green",fontSize:"20px"}}/>Extra ₹2000 Instant Discount on prepaid transactions</Typography>
                <Typography><LabelImportantIcon style={{marginTop:"0px",color:"green",fontSize:"20px"}}/>Sign up for Flipkart Pay Later and get Flipkart Gift Card worth up to ₹1,000*</Typography>
            </Box>
            <Table>
                <TableBody>
                    <TableRow>
                        <TableCell style={{color:"#878787"}}>Delivery</TableCell>
                        <TableCell style={{fontWeight:"bolder"}}>Delivery By {date.toDateString()} || $40</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{color:"#878787"}}>Warranty</TableCell>
                        <TableCell style={{fontWeight:"bolder"}}>No Warranty</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{color:"#878787"}}>Seller</TableCell>
                        <TableCell style={{fontWeight:"bolder"}}>
                            <Box component="span" style={{color:"#2874f0"}}>SuperComNet</Box>
                            <Typography>Gst voice enable</Typography>
                            <Typography>14 Days return gurantee policy</Typography>
                        </TableCell>
                    </TableRow>
                      <Box>
                        <img src="https://i.ytimg.com/vi/wX9lEPW40j4/maxresdefault.jpg" alt="" style={{height:"100px", width:"100%"}} />
                      </Box>
                    <TableRow>
                        <TableCell style={{color:"#878787"}}>Description</TableCell> 
                          <TableCell style={{fontWeight:"bolder"}}>{product.discount}</TableCell> 
                    </TableRow>
                </TableBody>
            </Table>
        </>
    )
}

export default ProductDetail
