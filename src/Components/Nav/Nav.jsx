import React from 'react'
import './nav.css'
import logo from './1.png'

const Nav = () => {
  return (
    <div>
        <header className='header'>
          <div>
            <img src={logo} alt="" />
          </div>

          <div className='ulDiv'>
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
          </div>
        </header>
    </div>
  )
}

export default Nav