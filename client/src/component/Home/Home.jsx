import React, { useEffect } from 'react'
import Navbar from './Navbar'
import Banner from './Banner'
import { Box} from '@mui/material'
import { getProducts } from '../../redux/action/productActions'
import { useDispatch, useSelector } from 'react-redux';
import Slide from './Slide'
import MidSection from './MidSection'

const Home = () => {

  const { products } = useSelector(state => state.getProducts)
  // console.log(products)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch])

  return (
    <div>
      <Navbar />
      <Box p={1} bgcolor={'#f2f2f2'}>
        <Banner />
        <Slide products={products} title='Deal of the Day' timer={true}/>
        <MidSection/>
        <Slide products={products} title='Discount For You' timer={false}/>
        <Slide products={products} title="Suggested Items" timer={false}/>
        <MidSection/>
        <Slide products={products} title="Top Selection" timer={false}/>
        <Slide products={products} title="Recommended Items" timer={false}/>
        <MidSection/>
        <Slide products={products} title="Trending Offers" timer={false}/>
        <Slide products={products} title="Season's Top Picks" timer={false}/>
        <Slide products={products} title="Top Deals On Accessories" timer={false}/>
        <MidSection/>
      </Box>
    </div>
  )
}

export default Home
