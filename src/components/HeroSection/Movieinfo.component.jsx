import React, { useContext } from 'react'
import Payment from './Payment.component';
import { movieContext } from '../../context/Movie.context';
const Movieinfo = ({movie}) => {

  const {open , setOpen,price , setPrice , rentMovies , buyMovies} = useContext(movieContext);
 const gener = movie.genres?.map(({name}) => name).join(",");
 const lang = movie.spoken_languages?.map(({name})=> name).join(",");
 
  return (
    <>
    <Payment isOpen = {open} setIsOpen = {setOpen} isPrice = {price} className="z-60"/>
    <div className=' text-white py-10  h-full mx-10 flex items-start flex-col gap-10 '>
         <h1 className='text-4xl text-white'>{movie.original_title}</h1>

         <div className='flex flex-col gap-4'>
            <p>4k rating</p>
            <p>{lang}</p>
            <div className='flex gap-2'>
             {movie.runtime} min |
            <p>{gener}</p>
            </div>
         </div>
         <div className='flex gap-2 justify-between w-full my-3 px-4'>
        <button className='   bg-crimson-300 text-white  rounded-lg w-full' style={{height:40}} onClick={rentMovies}>rent ₹149 </button>
        <button className='   bg-crimson-500  text-white rounded-lg w-full' style={{height:40}} onClick={buyMovies}>buy ₹599</button>
    </div>
    </div>
    </>
  )
}

export default Movieinfo