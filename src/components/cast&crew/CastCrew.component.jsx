import React from 'react'
import Slider from 'react-slick';


const CastCrew = (props) => {
   
    const {title , castCrew} = props;
    const settings ={
        infinite: false,
            
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 4,
        initialSlide:0,
        
    
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                initialSlide:0,
                
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 0
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 2,
                initialSlide:0,
              }
            }
          ]
      };

  return (
    <>
       <div className='container  flex flex-col  '> 
            <h1 className='text-2xl font-bold'>{title}</h1>
             
                <Slider {...settings} >
                     {
                        castCrew.map((each,index)=>(
                            <div key={index} >
                              
                                 <div  className=' flex mx-auto justify-center w-40 h-40 iphone:w-20  iphone:h-20' >
                                    <img src={`https://image.tmdb.org/t/p/original/${each.profile_path}`}  className='rounded-full w-full h-full  object-cover object-center' alt="" />
                                 </div>
                                 <div className='  flex flex-col gap-2 items-center  py-3  '>
                                       <h3 className='fon-bold' style={{fontSize:"clamp(0.9rem, 1.5vw, 1.5rem)"}}>{each.original_name}</h3>
                                       <h3 style={{fontSize:"clamp(0.7rem, 1vw, 1.5rem)"}}>{each.known_for_department}</h3>

                                 </div>
                            </div>
                        ))
                     }
                </Slider>
             
       </div>
    </>
  )
}

export default CastCrew