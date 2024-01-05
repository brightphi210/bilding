import React from 'react'
import './login.css'
import loginImage from './Image/loginImage.png'
import { useState } from 'react'

import { Link, useNavigate } from 'react-router-dom'
import myVideo from './animation_lnkaatit.mp4'


import 'font-awesome/css/font-awesome.min.css';

import { BiError } from 'react-icons/bi'


const Login2 = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [ password2, setPassword2] = useState('');
  const [error, setError] =useState('');
  const [emailError, setEmailError] =useState('');
  const [passError, setPassError] =useState('');
  const [confirmPasswordErrr, setConfirmPasswordErrr] =useState('');
  

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

    if(email === ''){
      setEmailError("Email field must not be empty")
    }

    else if(password === ''){
      setPassError("Password Field must not be empty")
    }

    else if(password !== password2){
      // setConfirmPasswordErrr("Password do not match")
    }


    // else if()

    setTimeout(() => setEmailError(''), 3000);
    setTimeout(() => setPassError(''), 3000);
    setTimeout(() => setConfirmPasswordErrr(''), 3000);


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
                password2,
            }),
        });

        if (response.ok ) {
            const data = await response.json();
            localStorage.setItem('authToken', data.access);
            navigate('/builder/bvn', { myMessage: 'Successfully logged in!' });
            
        }else {
            console.log('This Error occured while logging in');
            setIsLoading(false);
            setTimeout(() => setError(''), 3000);
            setError('Invalid details, try again');
        }


        
    } catch (error) {
        console.log('Error logging')
        setIsLoading(false); 

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



  const [myPassword2, setMyPassword2] = useState('');
  const [showPassword2, setShowPassword2] = useState(false);

  const togglePasswordVisibility2 = () => {
    setShowPassword2(!showPassword2);
  };


  return (
    <div>

      {/* <Home successMessage={successMessage} /> */}
      <section className='loginDiv'>
        <div className='logImage'>
            <img src={loginImage} alt="" />
        </div>
        <div className='formDiv'>
            <p>Please Verify account before loggin in</p>
            <h2>Login to your Bilding account</h2>

            
            <form action="" onSubmit={handleSubmit}  className='myForm' >

                {/* <div className='errorLog'> */}
                  {error && <p className='errorLog'> <BiError /> {error} </p>}
                  {emailError && <p className='errorLog'> <BiError /> {emailError} </p>}
                  {passError && <p className='errorLog'> <BiError /> {passError} </p>}
                  {confirmPasswordErrr && <p className='errorLog'> <BiError /> {confirmPasswordErrr} </p>}
                  
                {/* </div> */}
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
                    className={`fa ${showPassword ? 'fa-eye-slash' : 'fa-eye'} password-toggle-icons`}
                    onClick={togglePasswordVisibility}
                  ></i>
                </div>


                <div className='eyeDiv'>
                  <input 
                    type={showPassword2 ? 'text' : 'password'}
                    placeholder='Confrim Password'
                    value={password2}
                    onChange={(e) => setPassword2(e.target.value)}
                    required
                  />

                  <i
                    className={`fa ${showPassword2 ? 'fa-eye-slash' : 'fa-eye'} password-toggle-icons`}
                    onClick={togglePasswordVisibility2}
                  ></i>
                </div>


                <button type='submit' style={{backgroundColor : myLoadingColor} }>{isLoading ? 'Loading . . .': "Login"}</button>
            </form>


            <form className='googleForm'>
                {/* <p>or</p> */}
                {/* <button className='googleLog'>Login with Google</button> */}
                <div className='dont'><p>Don’t have an account ? <Link to={'/register'}><span>Join to Bilding</span></Link></p> 
                
                </div>
            </form>
        </div>
      </section>

      {/* {isLoading === true && (
        <div className='creatingLoadingDiv'>
          <div className='creatingLoading'>
            <video controls={false} autoPlay loop className='video'> 
              <source src={myVideo} type="video/mp4" />
            </video>
          </div>
        </div>
      )} */}
    </div>
  )
}

export default Login2
