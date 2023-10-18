
import React from 'react'

import { useState, useMemo } from 'react'

import { useNavigate } from 'react-router-dom'
import Verify from '../Verify/Verify'
import './builder.css'

import { Link } from 'react-router-dom'

import myVideo from './animation_lnkaatit.mp4'
const Builder = () => {

  const [isLoading, setIsLoading] = useState(false);

  const [isChecke, setIsChecke] = useState(false);
  
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [btnBg, setBtnColor] = useState('pink');


  const handleRadioChange = () => {
    setIsChecke(!isChecke);
    setIsButtonDisabled(isChecke);
    setBtnColor(isChecke ? 'pink' : '#C32F07')
  }


  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };



  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    phone_number: '',
    location: '',
    updates: false,
  });


  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({ ...setFormData, [name]: value });
  // };


  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    const newValue = type === 'checkbox' ? checked : value;

    setFormData({ ...formData, [name]: newValue });
  };

  const handleColor = (  ) => {
    setIsChecke(!isChecke);
    setBtnColor(isChecke ? 'pink' : '#C32F07')
  }


  let navigate = useNavigate()

  const handleSubmit = async  (e) => {
    
    e.preventDefault();

    setIsLoading(true);
    try {
      // Use the Fetch API to send the user data to the server
      const response = await fetch('https://bildingapi.onrender.com/auth/contractor/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok || response.status === 400) {
        console.log('User created successfully');
        navigate('/login');
      } else {
        console.error(response.statusText);
      }
    } catch (error) {
      console.error('Error creating user:', error);
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
      
      <section className='builderSectionOne'>
        <h2>Sign up to start your project.</h2>
        <p>
          Find the right skilled labour, suppliers, 
          and everyone needed to get your project to life.
        </p>

        <form action="" className='buiderForm' onSubmit={handleSubmit}>
          <div className='namesDiv'>
            <input 
              type="text" 
              name="firstname"
              placeholder='First name ' 
              value={formData.firstname}
              onChange={handleChange}
              required
            />
            <input 
              type="text" 
              name="lastname"
              placeholder='Last name' 
              value={formData.lastname}
              onChange={handleChange}
              required
          />
          </div>
          <input 
            type="number" 
            name="phone_number"
            placeholder='Phone number e.g (08094422807)' 
            value={formData.phone_number}
            onChange={handleChange}
            required
          />

          <div className='createOneDiv'>
          <input 
            type="email"  
            name='email'
            placeholder='Email  e.g (johndoe@example.com)' 
            value={formData.email}
            onChange={handleChange}
            required
          />
          </div>


          <div className='eyeDiv'>
          <input 
            type={showPassword ? 'text' : 'password'} 
            name="password"
            placeholder='Password e.g (Johndoe6421@)' 
            value={formData.password}
            onChange={handleChange}
            required
          />



          <i
            className={`fa ${showPassword ? 'fa-eye-slash' : 'fa-eye'} password-toggle-icon`}
            onClick={togglePasswordVisibility}
          ></i>
          </div>


          <input 
            type='text'
            name="location"
            placeholder='Location e.g (Nigeria)' 
            value={formData.location}
            onChange={handleChange}
            required
          />
          {/* <Select options={options} value={value} onChange={changeHandler} className='select'/> */}
          
          <div className='checkDiv1'>
            <input type="checkbox"  
                name='updates'
                checked={formData.updates}
                onChange={handleChange}
                onClick={handleColor}
                required
            />
            <span className='span1'>Latest insights and updates from Bilding.</span>
          </div>

          <div className='checkDiv1'>
            <input type="checkbox"  
              // checked={isChecke} 
              // onChange={handleRadioChange} 
            />
            <span className='span2'>I accept  Bilding’s <span className='terms'>terms, privacy policy</span></span>
          </div>


          {/* <Link to={'/builder/verify'}></Link> */}
          <button className='joinBtn' style={{backgroundColor : btnBg}}  type='submit' > {isLoading? 'Loading. . .' : 'SignUp'}</button>
          


          
          <span className='span3'>Already have an account ? <Link to={'/login'}>Log in</Link></span>
          <div className='hrDiv'>
            {/* <hr /> or <hr /> */}
          </div>
          {/* <button className='googleBtn'>Continue with Google</button> */}
        </form>
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

      <Verify isOpen={isModalOpen} onClose={closeModal}></Verify>
    </div>
  )
}

export default Builder
