import React from 'react'


import dashLogo from './1.png'
import proLogo from './2.png'
import qLogo from './4.png'

import proImg from './5.webp'
import noteLogo from './3.png'


import { useState} from 'react';
import { Link, useNavigate } from 'react-router-dom'

import './dashHeader.css'

const DashHeader2 = () => {
    const [isNavOpen, setIsNavOpen] = useState(false)
    const openMenu = () => {
      setIsNavOpen(true)
    };
  
  
    const closeMenu = () => {
      setIsNavOpen(false)
    };

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
        <section className='dashHeaderSection dashHeaderSectionTwo'>
            <div className='dashHeaderOne'>
                <Link to={'/'}><img src={dashLogo} alt="" /></Link>
            </div>

            <div className={`nav-ul nav-ul2 ${isNavOpen ? "open" :"close"} `}>
                <ul className='dashHeaderTow'>
                    <Link to={'/dashboard'}><li>Dashboard</li></Link>
                    <Link to={'/dashboard/projects'}><li>Projects</li></Link>
                   <Link to={'/dashboard/applications'}><li>Applications</li></Link>
                </ul>

                {/* <form action="" className='dashBoardForm'>
                    <input type="text" placeholder='Looking for' />
                    <div>Suppliers <i class="uil uil-angle-down"></i></div>
                    <button>Search</button>
                </form> */}

                <div className='notifyImageDiv'>
                    <div className='profile'>
                      <img src={noteLogo} alt="" />
                        <div className="dropdown">
                            <div className='dropMenu'>
                              <h4>Notifications </h4>
                              <p>
                                Lorem ipsum dolor sit amet consectetur. 
                                Nibh ellentesque tempor diam lobortis. Ut nisl at...
                              </p>
                              <hr />


                              <p>
                                Lorem ipsum dolor sit amet consectetur. 
                                Nibh ellentesque tempor diam lobortis. Ut nisl at...
                              </p>
                              <hr />


                              <p>
                                Lorem ipsum dolor sit amet consectetur. 
                                Nibh ellentesque tempor diam lobortis. Ut nisl at...
                              </p>
                              <hr />

                              <span>See all Notifications <i class="uil uil-arrow-right"></i></span>
                            </div>
                        </div>
                    </div>


                    


                    <div className='profile'>
                        <img src={qLogo} alt="" />
                        <div className='dropdown'>
                        <div className='dropMenu'>
                          <h4>Help & Support</h4>
                          <p>Frequently asked questions (FAQS)</p>
                          <p>Submit support ticket</p>
                        </div>
                        </div>
                    </div>



                    <div className='profile'>
                    <img src={proLogo} alt="" />
                        <ul className="dropdown">
                            <div className='proImgFlex'>
                              <img src={proImg} alt="" />
                              <ul>
                              <h3>Peter Obi & Sons</h3>
                              <p>Supplier</p>
                              </ul>
                            </div>
                            <div className='dropFlex'>
                              <li><i class="uil uil-setting"></i> Settings</li>
                              <li onClick={logoutUser}><i class="uil uil-sign-out-alt"></i> Logout</li>
                            </div>
                        </ul>
                    </div>
                    
                </div>
                <i class="uil uil-multiply dashIcons1" onClick={closeMenu}></i>
            </div>
            {/* <i class="uil uil-bars dashIcons" onClick={openMenu}></i> */}
            <i class="uil uil-bars dashIcons2" onClick={openMenu}></i>

        </section>
    </div>
  )
}

export default DashHeader2