import React, { useEffect, useState } from 'react'
import DefaultLayoutHoc from '../layout/Default.layout'
import './home.css';


// impoting component form there folders
import EntartaimentCard from '../components/Entertainment/EntertainmentCard.component'
import HeroCrousal from '../components/HeroCrausal/HeroCrausal.component'
import PostSliders from '../components/PostSliders/PostSliders.component'
import axios from 'axios';



const HomePage = () => {
  // use state for storing movies , primiers , online-stream-show
  const [recomendedMovies, setRecomandedMovies] = useState([]);
  const [premierMovies, setPremierMovies] = useState([]);
  const [onlineStreamShow, setOnlineStreamShow] = useState([]);

  useEffect(()=>{
    const requestTopRatedMovies = async ()=>{

      const getTopRatedMovies = await axios.get('/movie/popular');
       setRecomandedMovies(getTopRatedMovies.data.results);
    } 

    requestTopRatedMovies();
  },[]);

  useEffect(()=>{
    const requestPreimierMovies = async ()=>{

      const getPreimierMovies = await axios.get('/movie/top_rated');
       setPremierMovies(getPreimierMovies.data.results);
    } 
    requestPreimierMovies();
    
  },[]);

  

  return (

    <>
      <HeroCrousal />
      
      <div className='container mx-auto px-4 md:px-12 my-8'>
        <h1>The best of Entairtainment</h1>

        <EntartaimentCard />
        
        <div className='container mx-4 my-8'>
          <PostSliders 
              title = "Recomanded"
              subTitle = ""
              movies = {recomendedMovies}
              butt="see all"
              isDark = {false}
          />

        </div>
        

      </div>
      <div className= ' container  mx-auto flex flex-col px-4 md:px-12 py-12' class="premier">
            <div className='mx-8 my-4'>
              <img src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120:q-80/premiere-banner-web-collection-202208191200.png" alt="premier image" />
              </div>   

              <div className=' mx-4 my-8 '>
          <PostSliders 
              title = "Premiere"
              subTitle = ""
              movies = {premierMovies}
              butt="see all"
              isDark = {true}
          />

        </div>    

      </div>
      


    </>
  )
}

export default DefaultLayoutHoc(HomePage)