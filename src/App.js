import React from 'react';
import './App.css';
import axios from 'axios';
// do not needed tillted arrows
// react slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// Routing system 
import { Route, Routes } from 'react-router-dom';
// Pages
import HomePage from './pages/Home.page';
import MoviePage from './pages/Movie.page';
import PlaysPage from './pages/Plays.page';

axios.defaults.baseURL = "https://api.themoviedb.org/3"
axios.defaults.params = {};
axios.defaults.params["api_key"] = process.env.REACT_APP_API_KEY;


function App() {
  return (
    <Routes>

      < Route path='/' element ={<HomePage/>}/>
      < Route path='/movie/:id' element ={<MoviePage/>}/>
      < Route path='/plays' element ={<PlaysPage/>}/>

    </Routes>
  );
}

export default App;
