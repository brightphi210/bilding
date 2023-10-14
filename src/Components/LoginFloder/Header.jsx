import React from 'react'
import logo from './Image/1.png'
import './header.css'

import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div>
      <section className='headers'>
        <Link to={'/'}><img src={logo} alt="" /></Link>
      </section>
    </div>
  )
}

export default Header
