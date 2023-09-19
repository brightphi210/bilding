import React from 'react'


import dashLogo from './1.png'
import proLogo from './2.png'
import qLogo from './4.png'
import noteLogo from './3.png'


import { useState} from 'react';
import { Link, useNavigate } from 'react-router-dom'

import './dashHeader.css'

const DashHeader = () => {

    const navigate = useNavigate()

    let localstorage2 = localStorage.getItem('authToken')
    const [user, setUser] = useState(() => localstorage2)
   
    const logoutUser = async (e) => {
      e.preventDefault()
      setUser(null)
      localStorage.removeItem('authToken')
      navigate('/', { state: { successMessage: 'Successfully logged Out !!' }})
    }
  return (
    <div>
        <section className='dashHeaderSection'>
            <div className='dashHeaderOne'>
                <Link to={'/'}><img src={dashLogo} alt="" /></Link>
            </div>

            <ul className='dashHeaderTow'>
                <li>Dashboard</li>
                <li>Projects</li>
                <li>Requests</li>
                <li>Favorites <i class="uil uil-angle-down"></i></li>
            </ul>

            <form action="" className='dashBoardForm'>
                <input type="text" placeholder='Looking for' />
                <div >Suppliers <i class="uil uil-angle-down"></i></div>
                <button>Search</button>
            </form>

            <div className='notifyImageDiv'>
                <div className='profile'>
                    <img src={proLogo} alt="" />
                    <ul className="dropdown">
                        <li><i class="uil uil-edit-alt"></i> Edit Profile</li>
                        <li><i class="uil uil-setting"></i> Settings</li>
                        <li onClick={logoutUser}><i class="uil uil-sign-out-alt"></i> Logout</li>
                    </ul>
                </div>
                <img src={qLogo} alt="" />
                <img src={noteLogo} alt="" />
            </div>
        </section>
    </div>
  )
}

export default DashHeader