import React from 'react'
import { AiOutlineSearch, AiFillCaretDown, AiOutlineRight } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';
import { BsFillPersonFill } from "react-icons/bs";
import { Link } from 'react-router-dom';
import './NavBar.css';
// nav bar for bigger screen
function NavLg() {
  return (
    <div className='flex flex-col'>
      <div class="main__div1" >
        <div class="image__imput">


          <div>
            <img src="https://in.bmscdn.com/webin/common/icons/logo.svg" alt="book my show" />
          </div>

          <div class="input__section">
            <AiOutlineSearch />
            <input type="search" placeholder='search for movies ,event , plays and activities' />
          </div>

        </div>
        <div class="place__section">

          <div class="jaipur">
            <h3>jaipur</h3>
            <AiFillCaretDown />
          </div>
          <button>Sign in</button>
          <GiHamburgerMenu />

        </div>

      </div>
      <div class="main__div2">

        <div class="main__div2__section1">
          <a href="">Movies</a>
          <a href="">Stream <sup>New</sup></a>
          <a href="">Events</a>
          <Link to={'/plays'}>
          <a href="">Plays</a>
          </Link>
          <a href="">Sports</a>
          <a href="">Activites</a>
          <a href="">Buzz</a>
        </div>
        <div class="main__div2__section1 main__div2__section2" >
          <a href="">ListYourShow</a>
          <a href="">corporates </a>
          <a href="">Offers</a>
          <a href="">GiftCard</a>
        </div>
      </div>

    </div>
  )
}

function NavMd() {
  return (
    <>
    <nav className='flex ' class="navmd">
      <div class="md__place">
        <h1>It All Start Here!</h1>
        
        <div>
        <h4>jaipur </h4>
        <AiOutlineRight />
        </div>
      </div>
      <div class="md__search__button">
        <button>Use App</button>
        <AiOutlineSearch class="search__icon" />
      </div>
      
    </nav>
    
    </>
  )
}

// nav bar for medium screen
const NavBar = () => {
  return (
    <>
      <div className='hidden lg:block'>
        <NavLg />
      </div>

      <div className='lg:hidden md:block'>
        <NavMd />
      </div>
    </>
  )
}

export default NavBar