import React from 'react'
import './login.css'
import loginImage from './Image/loginImage.png'
import { useContext, useState } from 'react'

import { Link, useNavigate } from 'react-router-dom'

// import jwt_decode from 'jsonwebtoken';
import jwt_decode from "jwt-decode"



const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate()

  const logUrl = "https://bildingapi.onrender.com/api/token/"
  const refreshUrl = "https://bildingapi.onrender.com/api/token/refresh/"

  const [isLoading, setIsLoading] = useState(false);

  let myLoadingColor = ""

  if(isLoading === true) {
    myLoadingColor = "loadingColor"
  }

  const handleSubmit = async (e) => {
    setIsLoading(true);
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
            localStorage.setItem('authToken', data.access);
            navigate('/dashboard');
        } else {
            console.log('This Error occured while logging in');
        }
    } catch (error) {
        console.log('Error logging')
    }

    finally {
    setIsLoading(false); // Set isLoading to false when login request is complete
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


                <button type='submit' style={{backgroundColor : myLoadingColor} }>{
                  isLoading? 'Loading. . .' : 'Login'
                }
                </button>
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
