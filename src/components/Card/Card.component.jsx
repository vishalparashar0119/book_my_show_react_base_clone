import React from 'react'
import { RiFontSize } from 'react-icons/ri'

const Card = (props) => {
    // clamp(-, 20rem , ) clamp("5rem" ,"12 rem" , "12 rem"  )
  return (
    <>
    
       <div  className='flex flex-col   my-20 mx-2 gap-1'>
           <div  className=' lg:w-40  iphone:h-30 iphone:w-15 iphone:my-0'>
            <img src={props.img} alt="" srcset="" className='  h-full object-cover  object-center rounded-lg  ' />
           <h1 style={{fontSize:"clamp(1rem ,2.0vh , 2rem)"}}>{props.title}</h1>
           <p style={{fontSize:"clamp(0.9rem ,1vh , 2rem)"}}>{props.subTitle}</p>
           </div>
       </div>
    </>
  )
}

export default Card