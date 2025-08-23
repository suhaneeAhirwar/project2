import React from 'react'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import list from './data/list.json';
import Cards from './Cards';

function Freebook() {
      const  filterData=list.filter((data)=>data.category === "Free");
     var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
      
  return (
   <>
<div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
    <div>
    <h1  className="font-semibold text-xl pb-2"> free offered courses</h1>
    <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi, ullam? Quis tempora amet, soluta quae fugiat assumenda odit dolor quas exercitationem hic dolores sequi saepe animi, omnis laudantium! Sed, voluptas.</p>
    </div>

   

   <div className="slider-container">
      <Slider {...settings}>
      {filterData.map((item)=>(
       <Cards item={item} key={item.id}/>
      ))}
      </Slider>
   </div>
   </div>
   </>
  )
}
/* <div className="navbar bg-base-80 shadow-sm  "> */




export default Freebook;
