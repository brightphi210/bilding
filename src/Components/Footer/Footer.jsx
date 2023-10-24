import React from 'react'
import './footer.css'

import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div>
        <footer className='footer'>
            <div className='footerDiv'>
                <div className='footerEach'>
                    <Link to={'/'}><h2 className='navLogo'>GetBilding</h2></Link>
                    <p>
                        Your Go-To Platform for Building <br /> 
                        Contractors, Suppliers, and Labor Force. 
                    </p>
                </div>

                <div className='footerEach'> 
                    <h2>Resources</h2>
                    <ul>
                        <li>About us</li>
                        <li>Terms & Privacy</li>
                        <li>Blog</li>
                        <li>Support</li>
                    </ul>
                </div>
                
                <div className='footerEach'>
                    <h2>Other Links  </h2>
                    <ul>
                        <Link to={'/register'}><li>Registration</li></Link>
                        <li>FAQ’s</li>
                        <Link to={'/login'}><li>Login</li></Link>
                    </ul>
                </div>

                <div className='footerEach'>
                    <h2>Connect with us:</h2>
                    <ul>
                        <i class="uil uil-facebook-f icons1"></i>
                        <i class="uil uil-twitter icons1"></i>
                        <i class="uil uil-linkedin icons1"></i>
                        <i class="uil uil-instagram icons1"></i>
                    </ul>
                </div>
            </div>
            <h3>Copyright © 2023 Getbilding</h3>
        </footer>
    </div>
  )
}

export default Footer
