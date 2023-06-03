import React from 'react'
import { Link } from 'react-router-dom'

const Poster = (props) => {
  
  return (
    <Link to={`/movie/${props.id}`}>
    <div className='flex flex-col mx-2'>
       <div>
        <img src={`https://image.tmdb.org/t/p/original/${props.poster_path}`} alt="poster" className='w-full h-full object-cover rounded-md'/>
       </div>
       <h3 className={`${props.isDark ? "text-white":"text-black"} font-bold`} style={{fontSize:"clamp(0.5rem, 2.5vw, 1rem)"}}>{props.original_title}</h3>
       <h5 className={`${props.isDark ? "text-white":"text-black"}` } style={{fontSize:"clamp(0.4rem, 2.5vw, 0.9rem)"}}>{props.original_language}</h5>
    </div>
    </Link >
  )
}

export default Poster