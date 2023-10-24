import React from 'react'

import dashLogo from './1.png'
import proLogo from './2.png'
import qLogo from './4.png'

import proImg from './newvec.png'
import noteLogo from './3.png'


import { useState, useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom'

const DashHeader3 = () => {
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


    const [data, setData] = useState([])
    let token = localStorage.getItem('authToken');
    const fetchUserData = async (e) => {

      try {
        const response = await fetch('https://bildingapi.onrender.com/auth/edit', {
          method: 'GET',
          headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json"
          },
        });
        const userData = await response.json();
        console.log("This is the user data: " + JSON.stringify(userData));

        setData(userData);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };


    useEffect(() => {
      fetchUserData();
    }, []);
  return (
    <div>
    <section className='dashHeaderSection dashHeaderSectionTwo'>
        <div className='dashHeaderOne'>
            <Link to={'/'}><img src={dashLogo} alt="" /></Link>
        </div>

        <div className={`nav-ul nav-ul2 ${isNavOpen ? "open" :"close"} `}>
            <ul className='dashHeaderTow'>
                <Link to={'/dashboard'}><li>Dashboard</li></Link>
                <Link to={''}><li>Supplies</li></Link>
               <Link to={'/dashboard/supplier/applications'}><li>Applications</li></Link>
               {/* <Link to={'/dashboard/supplier/messages'}><li>Messages</li></Link> */}
            </ul>

            {/* <form action="" className='dashBoardForm'>
                <input type="text" placeholder='Looking for' />
                <div>Suppliers <i class="uil uil-angle-down"></i></div>
                <button>Search</button>
            </form> */}

            <div className='notifyImageDiv'>
                <div className='profile'>
                  <img src={noteLogo} alt="" />
                    <div className="dropdown dn1">
                        <div className='dropMenu'>
                          <h4>Notifications </h4>
                          <p>
                            Lorem ipsum dolor sit amet consectetur. 
                            Nibh ellentesque tempor diam lobortis. Ut nisl at...
                          </p>
                          <hr />

                          <Link to={'/dashboard/notifications'}><span>See all Notifications <i class="uil uil-arrow-right"></i></span></Link>
                          
                        </div>
                    </div>
                </div>


                <div className='profile'>
                    <img src={qLogo} alt="" />
                    <div className='dropdown dn2'>
                      <div className='dropMenu '>
                        <h4>Help & Support</h4>
                        <p>Frequently asked questions (FAQS)</p>
                        <p>Submit support ticket</p>
                      </div>
                    </div>
                </div>



                <div className='profile'>
                <img src={proLogo} alt="" />
                    <ul className="dropdown dn3">
                        <div className='proImgFlex'>
                        {console.log(data.profile_pics)}
                          {data.profile_pics === null || data.profile_pics === "" ? 
                          (<><img src={proImg} alt="" /></>): 
                          (<><img src={data.profile_pics} alt="" /></>)}
                          <ul>
                            <h3>{data.firstname} {data.lastname}</h3>
                            <p>{data.profession}</p>
                          </ul>
                        </div>
                        <div className='dropFlex'>
                          <Link to={'/dashboard/profile/info'}><li><i class="uil uil-setting"></i> Settings</li></Link>
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

export default DashHeader3



