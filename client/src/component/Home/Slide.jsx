import React from 'react'
import "./slide.css"
import Carousel from 'react-multi-carousel'
import { Box, Button, Divider, Typography } from '@mui/material';
import Countdown from 'react-countdown';
import { NavLink } from 'react-router-dom';

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

const Slide = ({ products, title, timer }) => {
    const timerURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg';
    const renderer = ({ hours, minutes, seconds, completed }) => {
        if (completed) {
            return <Box>{hours}:{minutes}: {seconds}</Box>
        } else {
            // Render a countdown
            return <span style={{ marginLeft: "10px" }}>{hours} : {minutes} : {seconds} Left</span>;
        }
    };
    return (
        <>
            <Box className="mainSlide">
                <Box className='firstBox'>
                    <Typography style={{ fontSize: '20px', fontWeight: 'bolder' }}>{title}</Typography>
                    {
                        timer && 
                        <Box className='timerBox'>
                        <img src={timerURL} alt="timer" style={{ width: '30px' }} />
                        <Countdown date={Date.now() + 5.04e+7} renderer={renderer} />
                    </Box>
                    }
                    <Button variant='contained' style={{ marginLeft: "auto", fontSize: '13px' }}>View All</Button>
                </Box>
                <Divider />
                <Carousel
                    responsive={responsive}
                    dotListClass="custom-dot-list-style"
                    itemClass="carousel-item-padding-40-px"
                    autoPlay={true}
                    autoPlaySpeed={5000}
                    keyBoardControl={true}
                    centerMode={true}
                    slidesToSlide={1}
                    containerClass="carousel-container"
                    customTransition="all .5"
                    transitionDuration={500}
                    swipeable={false}
                    draggable={false}
                    showDots={false}
                    ssr={true} // means to render carousel on server-side.
                    infinite={true}
                >
                    {
                        products.map((product) => {
                            return (
                                <>
                                <NavLink to={`product/${product.id}`} style={{textDecoration:"none", color:'inherit'}}>
                                    <Box textAlign={'center'} style={{ padding: '25px 15px' }}>
                                        <img src={product.url} alt="product" className='productImg' />
                                        <Typography style={{ fontSize: "14px", marginTop: "5px", fontWeight: 'bolder' }}>{product.title.shortTitle}</Typography>
                                        <Typography style={{ fontSize: "14px", marginTop: "5px", color: 'green' }}>{product.discount}</Typography>
                                        <Typography style={{ fontSize: "14px", marginTop: "5px", fontWeight: '500', opacity:'.6' }}>{product.tagline}</Typography>
                                    </Box>
                                </NavLink>
                                </>
                            )
                        })
                    }
                </Carousel>
            </Box>
        </>
    )
}

export default Slide
