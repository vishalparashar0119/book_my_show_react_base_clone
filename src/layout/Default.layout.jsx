
import React from 'react'
import NavBar from '../components/NavBar/NavBar.component'
import Footer from '../components/footer/Footer.component'
// coponent c is always capital
const DefaultLayoutHoc = (Component)=> ({...props}) => {
  return (
    <div>
        <NavBar/>
        <Component {...props}/>
         <Footer/>
    </div>
  )
}

export default DefaultLayoutHoc