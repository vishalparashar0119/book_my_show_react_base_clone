import React from 'react'
import Slider from 'react-slick'
import Poster from '../poster/Poster.component'

const PostSlider = (props) => {

  const settings ={
    infinite: false,
    dots: false, 
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 4,
    initialSlide:0,
    

    responsive: [
        {
          breakpoint: 1024,
          settings: {
            dots: false,
            slidesToShow: 3,
            slidesToScroll: 3,
            initialSlide:0,
            infinite: true,
            
          }
        },
        {
          breakpoint: 600,
          settings: {
            dots:false,
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 0,
            swipeToSlide: true,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 4,
            slidesToScroll:2, 
            initialSlide:0,
            swipeToSlide: true,
          }
        }
      ]
  };

   const {title , subTitle , movies , isDark , butt} = props
  return (
    <>
     <div className='continer  flex flex-col gap-2'>
      <div className={` w-full h-auto flex flex-row  justify-between text-2xl ${isDark ? "text-white" :"text-black"}`}>
           {title}
           <a href="" className='text-sm text-crimson-300'>{butt}</a>
      </div>
         
        <Slider {...settings}>
          {  
             movies.map((each , index)=>(
                

               <Poster {...each} isDark={isDark} key = {index}/>
                
             ))
          }
        </Slider>
        

     </div>
    </>
  )
}

export default PostSlider