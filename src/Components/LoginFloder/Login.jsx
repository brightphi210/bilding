import React from 'react'
import './login.css'
import loginImage from './Image/loginImage.png'

import { Link } from 'react-router-dom'
const Login = () => {
  return (
    <div>
      <section className='loginDiv'>
        <div className='logImage'>
            <img src={loginImage} alt="" />
        </div>
        <div className='formDiv'>
            <h2>Login to Bilding</h2>
            <form action="" className='myForm'>
                <input type="text"  placeholder='Email address or Phone Number'/>
                <input type="text" placeholder='Password'/>
                <button>Login</button>
            </form>
            <form className='googleForm'>
                <p>or</p>
                <button className='googleLog'>Login with Google</button>
                <p>Don’t have an account ?</p>
                <Link to={'/register'}><button className='signupBtn'>Sign up to Bilding</button></Link>
            </form>
        </div>
      </section>
    </div>
  )
}

export default Login
