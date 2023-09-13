import React from 'react'
import { useState, useEffect, useContext } from 'react';

import { Link } from 'react-router-dom';

import './nav.css'
import logo from './1.png'

const Nav = () => {
  const [isNavOpen, setIsNavOpen] = useState(false)


  const openMenu = () => {
    setIsNavOpen(true)
  };


  const closeMenu = () => {
    setIsNavOpen(false)
  };
  return (
    <div>
        <header className='header'>
          <div>
            <Link to={'/'}><img src={logo} alt="" /></Link>
          </div>
          
          <div className={`ulDiv ${isNavOpen ? "open" :"close"} `}>
            <ul className='nav-ul'>
              <Link to={'/'}><li>Home</li></Link>
              <li>About us</li>
              <li>FAQ’s</li>
              <li>Support</li>
              <li>Testimonials</li>
            </ul>

            <div className='navBtn'>
              <Link to={'/login'}><button>Login</button></Link>
              <Link to={'/register'}><button className='signup'>Sign Up</button></Link>
            </div>
            <i class="uil uil-multiply closebtn" onClick={closeMenu}></i>
          </div>
          {/* <i class="uil uil-apps openbtn" ></i> */}
          <i class="uil uil-bars openbtn" onClick={openMenu}></i>
          
        </header>
    </div>
  )
}

export default Nav