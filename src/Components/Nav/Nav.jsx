import React from 'react'
import { useState} from 'react';
import { Link, useNavigate } from 'react-router-dom'

import './nav.css'
import logo from './1.png'

import jwt_decode from "jwt-decode"

const Nav = () => {
  
  const token = localStorage.getItem('authToken');

  const [isNavOpen, setIsNavOpen] = useState(false)
  const navigate = useNavigate()
  const [user, setUser] = useState(() => token)
 
  const logoutUser = async (e) => {
    e.preventDefault()
    setUser(null)
    localStorage.removeItem('authToken')
    navigate('/', { state: { successMessage: 'Successfully logged Out !!' }})
  }

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
            <ul className='nav-ul1'>
              <Link to={'/'}><li className='li'>Home</li></Link>
              <li className='li'>About us</li>
              <li className='li'>FAQ’s</li>
              <li className='li'>Support</li>
              <li className='li'>Testimonials</li>
            </ul>

            {user ? (
              <>
                <div className='navBtn'>
                  <Link to={'/login'} onClick={logoutUser}><button>Logout</button></Link>


                  <Link to={'/dashboard'}><button className='signup'>Dashboard</button></Link>                  
                </div>
              </>
            ):(
              <>
                <div className='navBtn'>
                  <Link to={'/login'}><button>Login</button></Link>
                  <Link to={'/register'}><button className='signup'>Sign Up</button></Link>
                </div>
              </>
            )}

            <i class="uil uil-multiply closebtn" onClick={closeMenu}></i>
          </div>
          <i class="uil uil-bars openbtn" onClick={openMenu}></i>
          
        </header>
    </div>
  )
}

export default Nav