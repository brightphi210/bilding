import React from 'react'
import './login.css'
import loginImage from './Image/loginImage.png'
import { useContext, useState } from 'react'

import { Link, useNavigate } from 'react-router-dom'


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate()

  const logUrl = "https://bildingapi.onrender.com/api/token/"
  const refreshUrl = "https://bildingapi.onrender.com/api/token/refresh/"

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await fetch(logUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
                password,
            }),
        });

        if (response.ok) {
            const data = await response.json();
            localStorage.setItem('token', data.access);
            navigate('/')
        } else {
            console.log('Error logging')
        }
    } catch (error) {
        console.log('Error logging')
    }
  };  


  return (
    <div>
      <section className='loginDiv'>
        <div className='logImage'>
            <img src={loginImage} alt="" />
        </div>
        <div className='formDiv'>
            <h2>Login to Bilding</h2>
            
            <form action="" onSubmit={handleSubmit}  className='myForm' >


                <input 
                  type="email"  
                  placeholder='Email address or Phone Number'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)} 
                  required
                />


                <input 
                  type="text" 
                  placeholder='Password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />


                <button type='submit'>Login</button>
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
