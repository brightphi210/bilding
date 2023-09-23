
import React from 'react'

import { useState, useMemo } from 'react'

// import Select from 'react-select'
// import countryList from 'react-select-country-list'


// import { Link } from 'react-router-dom'
import Verify from '../Verify/Verify'
import './builder.css'
const Builder = () => {


  // const [value, setValue] = useState("")
  // const options = useMemo(() => countryList().getData(), [])


  // const changeHandler = value => {
  //   setValue(value)
  // }


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
    location: ''
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };


  const handleSubmit = (e) => {
    
    e.preventDefault();

    fetch('https://bildingapi.onrender.com/auth/contractor/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        console.log("data submiited")
        setFormData({
          firstname: '',
          lastname: '',
          email: '',
          password: '',
          phone_number: '',
          location: ''
        })
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div>
      
      <section className='builderSectionOne'>
        <h2>Sign up to start your project.</h2>
        <p>
          Find the right skilled labour, suppliers, 
          and everyone needed to get your project to life.
        </p>

        <form action="" className='buiderForm' onClick={handleSubmit}>
          <div className='namesDiv'>
            <input 
              type="text" 
              name="firstname"
              placeholder='First name ' 
              value={formData.firstname}
              onChange={handleChange}
          />
            <input 
              type="text" 
              name="lastname"
              placeholder='Last name' 
              value={formData.lastname}
              onChange={handleChange}
          />
          </div>
          <input 
            type="text" 
            name="phone_number"
            placeholder='Phone number e.g (08094422807)' 
            value={formData.phone_number}
            onChange={handleChange}
          />
          <input 
            type="email"  
            name='email'
            placeholder='Email  e.g (johndoe@example.com)' 
            value={formData.email}
            onChange={handleChange}
          />
          <input 
            type="password"  
            name="password"
            placeholder='Password e.g (Johndoe6421@)' 
            value={formData.password}
            onChange={handleChange}
          />

          <input 
            type="text"  
            name="location"
            placeholder='Location e.g (Nigeria)' 
            value={formData.location}
            onChange={handleChange}
          />
          {/* <Select options={options} value={value} onChange={changeHandler} className='select'/> */}
          
          <div className='checkDiv1'>
            <input type="checkbox"  />
            <span className='span1'>Send me the latest insights and updates from Bilding.</span>
          </div>

          <div className='checkDiv1'>
            <input type="checkbox"  checked={isChecke} onChange={handleRadioChange} />
            <span className='span2'>I accept  Bilding’s <span className='terms'>terms of use, privacy policy</span> and <span className='terms'>user agreement.</span></span>
          </div>


          {/* <Link to={'/builder/verify'}></Link> */}
          <h3 className='joinBtn' style={{backgroundColor : btnBg}}  type='submit' disabled={isButtonDisabled} >{isChecke ? 'Agreed' : 'Not Agreed'}</h3>
          
          <span className='span3'>Already have an account ? Log in</span>
          <div className='hrDiv'>
            <hr /> or <hr />
          </div>
          <button className='googleBtn'>Continue with Google</button>
        </form>
      </section>

      <Verify isOpen={isModalOpen} onClose={closeModal}></Verify>
    </div>
  )
}

export default Builder
