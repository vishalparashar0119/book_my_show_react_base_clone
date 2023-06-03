import React ,{useState} from 'react'
import HeroSlider from "react-slick"
import { NextArrow } from './Arrow.component';
import { PreArrow } from './Arrow.component';


const HeroCrausal = () => {

 const [images , setImages] =  useState([{
   id:1,
   title:"Free movie ticket",
   linkImg:"https://assets-in.bmscdn.com/promotions/cms/creatives/1682617779318_webbannernpa.jpg"
  },
  {
    id:2,
    title:"claim gifts",
    linkImg:"https://assets-in.bmscdn.com/promotions/cms/creatives/1683474110231_freeweb.jpg"
  },
  {
    id:3,
    title:"Free movies to stream",
    linkImg:"https://assets-in.bmscdn.com/promotions/cms/creatives/1681996142717_webbanner.jpg"
  },]);
  
  
  const settings = {
      dots: true,
      arrows:true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      autoplay: true,
      swipeToSlide:true,
      slidesToScroll: 1,
      nextArrow:<NextArrow/>,
      prevArrow:<PreArrow/>
    };
    const settingsSm = {
      dots: true,
      arrows:true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      nextArrow:<NextArrow/>,
      prevArrow:<PreArrow/>
    };
  return (
    <>
    <div className='lg:hidden'>
      <HeroSlider {...settings}>
        {
           images.map((images, index)=>(
            <div key={index} className=' w-full h-60 md:h-80 py-3 '>
               <img src={images.linkImg} alt={images.title} className='w-full h-full  rounded-md object-cover' />
            </div>
           ))
           

        }
      </HeroSlider>

    </div>
    <div className='hidden lg:block'>
    <HeroSlider {...settingsSm}>
        {
           images.map((images, index)=>(
            <div key={index} className=' container w-full h-60 md:h-80 py-3'>
               <img src={images.linkImg} alt={images.title} className='w-full h-full rounded-md object-cover object-center' />
            </div>
           ))
        }
      </HeroSlider>
    </div>
    </>
  )
}

export default HeroCrausal