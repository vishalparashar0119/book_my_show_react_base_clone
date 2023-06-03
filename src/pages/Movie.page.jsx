import React, { useEffect, useState,useContext }  from 'react'
import DefaultLayoutHoc from '../layout/Default.layout'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { movieContext } from '../context/Movie.context';
import { FaCcVisa , FaApplePay } from 'react-icons/fa';
import PostSliders from '../components/PostSliders/PostSliders.component'
import CastCrew from '../components/cast&crew/CastCrew.component';
import HeroSection from '../components/HeroSection/HeroSection.component';




const MoviePage = () => {

  

  const {movie , setMovie} = useContext(movieContext);
  const {id} = useParams();
  const [cast , setCast] = useState([]);
  const [crew , setCrew] = useState([]);
  const [similar , setSimilar] = useState([]);

  useEffect (()=>{
    const  requestCrew = async () => {
      const getCrew =  await axios.get(`/movie/${id}/credits`);
       setCrew(getCrew.data.crew) 
    }

    requestCrew();
  },[id]);
  
  useEffect (()=>{
    const  requestCast = async () => {
      const getCast =  await axios.get(`https://api.themoviedb.org/3/movie/${id}/credits`);
       setCast(getCast.data.cast) 
    }

    requestCast();
  },[id]);

  useEffect (()=>{
    const  requestSimilar = async () => {
      const getSimilar =  await axios.get(`/movie/${id}/similar`);
       setSimilar(getSimilar.data.results) 
    }
    requestSimilar();
  },[id]);

  useEffect (()=>{
    const  requestMovie = async () => {
      const getMovie =  await axios.get(`/movie/${id}`);
       setMovie(getMovie.data) 
       
    }
    requestMovie();
   
  },[id]);
  
  

  

  return (
    <>
      <HeroSection/>
      <div className=' container my-4 px-8'>
         <div className='flex flex-col  gap-8 my-2'>
          <h1 className='text-2xl font-bold'>About the movie</h1>
          <p className='text-sm'>
            {movie.overview}
          </p>
           <hr /> 
         </div>
         <div className='flex flex-col  gap-8 my-2'>
            <h1 className='text-2xl font-bold'>Top offer for you</h1>
            <div className='  border-2 h-20 bg-yellow-100 border-yellow-400 rounded-md border-dashed  px-7 items-center gap-3 flex '>
               <div className=' w-8 h-8'>
                
                  <FaCcVisa className = 'h-full w-full'/> 
               </div>
               <div>
                  <h3>
                    10% of on movie munchies!
                  </h3>
                  <p className='text-dark-100'>Tap to view details</p>

               </div>
            </div>

            <hr />
         </div>
      </div>

      <div className='continer my-8 px-8 flex flex-col'>

        <CastCrew
           castCrew = {cast}
           title = "Cast"
        />
        <hr />
      </div>

      <div className='continer my-8 px-8 flex flex-col '>

        <CastCrew
           castCrew = {crew}
           title = "Crew"
        />
        <hr />
      </div>

      <div className='container  my-8 px-8'>
      <PostSliders
                title = "Similar"
                subTitle = ""
                movies =  {similar}
                butt = ""
                isDark = {false}
            />
      </div>
    </>
  )
}

export default DefaultLayoutHoc(MoviePage)