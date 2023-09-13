import React from 'react'
import { useState, useEffect, useContext } from 'react';

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
            <img src={logo} alt="" />
          </div>
          
          <div className={`ulDiv ${isNavOpen ? "open" :"close"} `}>
            <ul className='nav-ul'>
              <li>Home</li>
              <li>About us</li>
              <li>FAQ’s</li>
              <li>Support</li>
              <li>Testimonials</li>
            </ul>

            <div className='navBtn'>
              <button>Login</button>
              <button className='signup'>Sign Up</button>
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