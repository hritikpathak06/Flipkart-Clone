import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { bannerData } from '../../constants/data';

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

const Banner = () => {
  return (
   <>
   <Carousel 
   responsive={responsive}
   dotListClass="custom-dot-list-style"
   itemClass="carousel-item-padding-40-px"
   autoPlay={true}
   autoPlaySpeed={3000}
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
    bannerData.map((val,i) => {
        return(
            <img src={val.url} alt="banner"  style={{width:"100%", height:"300px"}}/>
        )
    })
  }
   </Carousel>
   </>
  )
}

export default Banner
