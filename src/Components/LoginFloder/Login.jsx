import React from 'react'
import './login.css'
import loginImage from './Image/loginImage.png'
import { useState } from 'react'

import { Link, useNavigate } from 'react-router-dom'
import myVideo from './animation_lnkaatit.mp4'


import 'font-awesome/css/font-awesome.min.css';


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
            navigate('/dashboard', { myMessage: 'Successfully logged in!' });
            
        } else {
            console.log('This Error occured while logging in');
        }
    } catch (error) {
        console.log('Error logging')
    }

    finally {
    setIsLoading(false); 
    }
  };  


  const [myPassword, setMyPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };


  return (
    <div>

      {/* <Home successMessage={successMessage} /> */}
      <section className='loginDiv'>
        <div className='logImage'>
            <img src={loginImage} alt="" />
        </div>
        <div className='formDiv'>
            <h2>Login to your Bilding account</h2>
            
            <form action="" onSubmit={handleSubmit}  className='myForm' >


                <input 
                  type="email"  
                  placeholder='Email address or Phone Number'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)} 
                  required
                />


                <div className='eyeDiv'>
                <input 
                  type={showPassword ? 'text' : 'password'}
                  placeholder='Password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />

                <i
                  className={`fa ${showPassword ? 'fa-eye-slash' : 'fa-eye'} password-toggle-icon`}
                  onClick={togglePasswordVisibility}
                ></i>
                </div>


                <button type='submit' style={{backgroundColor : myLoadingColor} }>{
                  isLoading? 'Login' : 'Login'
                }
                </button>
            </form>


            <form className='googleForm'>
                <p>or</p>
                <button className='googleLog'>Login with Google</button>
                <div className='dont'><p>Don’t have an account ?</p> 
                <Link to={'/register'}><span>Sign up to Bilding</span></Link></div>
            </form>
        </div>
      </section>

      {isLoading === true && (
        <div className='creatingLoadingDiv'>
          <div className='creatingLoading'>
            <video controls={false} autoPlay loop className='video'> 
              <source src={myVideo} type="video/mp4" />
            </video>
          </div>
        </div>
      )}
    </div>
  )
}

export default Login
