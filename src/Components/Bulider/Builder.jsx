
import React from 'react'

import { useState, useMemo } from 'react'

import Select from 'react-select'
import countryList from 'react-select-country-list'


import { Link } from 'react-router-dom'
import Verify from '../Verify/Verify'
import './builder.css'
const Builder = () => {

  const [isChecke, setIsChecke] = useState(false);
  const [btnBg, setBtnColor] = useState('pink');


  const handleRadioChange = () => {
    setIsChecke(!isChecke);
    setBtnColor(isChecke ? 'pink' : '#C32F07')
  }

  const [value, setValue] = useState("")
  const options = useMemo(() => countryList().getData(), [])


  const changeHandler = value => {
    setValue(value)
  }

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      
      <section className='builderSectionOne'>
        <h2>Sign up to start your project.</h2>
        <p>
          Find the right skilled labour, suppliers, 
          and everyone needed to get your project to life.
        </p>

        <form action="" className='buiderForm'>
          <div className='namesDiv'>
            <input type="text" placeholder='First name' required/>
            <input type="text" placeholder='Last name' required/>
          </div>
          <input type="text" placeholder='Phone number' required/>
          <input type="text"  placeholder='Email address' required/>
          <input type="password"  placeholder='Password' required/>
          <Select options={options} value={value} onChange={changeHandler} className='select'/>
          
          <div className='checkDiv1'>
            <input type="checkbox"  required/>
            <span className='span1'>Send me the latest insights and updates from Bilding.</span>
          </div>

          <div className='checkDiv1'>
            <input type="checkbox" onClick={openModal} checked={isChecke} onChange={handleRadioChange} required/>
            <span className='span2'>I accept  Bilding’s <span className='terms'>terms of use, privacy policy</span> and <span className='terms'>user agreement.</span></span>
          </div>


          <Link to={'/builder/verify'}><button className='joinBtn' style={{backgroundColor : btnBg}}>Join Bilding</button></Link>
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
