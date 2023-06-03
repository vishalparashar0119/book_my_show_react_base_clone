import React, { createContext, useState } from 'react'
// context is nothing but a hoc with a store data so we can able  to access it from any where
// to retard propdrilling we have to use conntext api
export const movieContext = createContext();

const MovieProvider = ({children}) => {
  const [movie, setMovie] = useState([]);

  const [open , setOpen] = useState(false);
 const [price , setPrice] = useState(0);

 const rentMovies = () =>{
     setOpen(true);
     setPrice(149);
 }
 const buyMovies = () =>{
  setOpen(true);
  setPrice(599);
 }
  return (


    <movieContext.Provider value={{ movie, setMovie , open , setOpen,price , setPrice , rentMovies , buyMovies}}>

      {children}

    </movieContext.Provider>
  )
}

export default MovieProvider;