import React, { useEffect } from 'react'
import "./detail.css"
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getProductDetails } from '../../redux/action/productActions';
import { Box, Typography, Grid, styled } from '@mui/material';
import LeftSide from './LeftSide';
import ProductDetail from './ProductDetail';

const DetailView = () => {
    
    const { loading, product } = useSelector(state => state.getProductDetails)
    const dispatch = useDispatch()
    const { id } = useParams()

    useEffect(() => {
        if (product && id !== product.id) {
            dispatch(getProductDetails(id))
        }
    }, [dispatch, id, product, loading])

    return (
        <>
            <Box className='headBox'>
                {
                    product && Object.keys(product).length &&
                    <Grid container className='mainGrid'>
                        <Grid item lg={4} md={4} sm={8} >
                            <LeftSide product={product} />
                        </Grid>
                        <Grid item lg={8} md={8} sm={8} style={{ marginTop: "50px", padding:"0px 20px 20px 20px" }}>
                            <ProductDetail product={product}/>
                        </Grid>
                    </Grid>
                }
            </Box>
        </>
    )
}

export default DetailView
