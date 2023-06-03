import React, { useState } from 'react'
import { useContext } from 'react'
import { movieContext } from '../../context/Movie.context'
import Movieinfo from './Movieinfo.component'
const HeroSection = () => {
    
    const {movie , open , setOpen,price , setPrice , rentMovies , buyMovies} = useContext(movieContext);
    
    
  return (

    <>
    <div className=' lg:hidden  w:full' >
        <div>

        <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt="" className='rounded-lg w-full ' style={{width:"calc(100%-4rem)" }}/>
    </div>
    <div className='flex gap-2 justify-between my-3 px-4'>
        <button className='border bg-crimson-300 text-white  rounded-lg' style={{height:40, width:"50%"}} onClick={rentMovies}>rent ₹149</button>
        <button className='border bg-crimson-500  text-white rounded-lg' style={{height:40, width:"50%"}} onClick={buyMovies}>buy ₹599</button>
    </div>
    </div>
    <div className='hidden relative w-full lg:block' style={{height:"30rem"}}>
          <div className=' absolute w-full h-full z-10' style={{ background: "linear-gradient(90deg, rgb(34, 34, 34) 24.95%, rgba(34, 34, 34, 0.85) 38.3%,rgba(34, 34, 34, 0.6) 75%, rgba(34, 34, 34, 0.07) 100%)" }}/>
        <div className=' absolute z-30 top-10 left-24  flex gap-5' >
        <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} style={{width:"250px", height:"350px"}} alt="" className='rounded-lg w-full h-full ' />
         <Movieinfo movie={movie}/>
        </div>
        
       <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} className='w-full h-full object-cover' alt="" />
    </div>
    </>
  )
}

export default HeroSection