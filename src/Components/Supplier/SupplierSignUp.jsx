import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const SupplierSignUp = () => {
    const [isLoading, setIsLoading] = useState(false);

  

  const handleColor = () => {
     setIsChecke(!isChecke);
     setBtnColor(isChecke ? 'pink' : '#C32F07')
   }

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
        password2: '',
        phone_number: '',
        country: '',
        about: '',
        profession: '',
        updates: false,
      });



    const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    };




    let navigate = useNavigate()

    const handleSubmit = async  (e) => {
      setIsLoading(true);
      e.preventDefault();
  
      try {
        // Use the Fetch API to send the user data to the server
        const response = await fetch('https://bildingapi.onrender.com/auth/supplier/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        const data = await response.json();
  
        if (response.ok || response.statusCode === 400) {
          console.log('User created successfully');
          console.log(data)
          navigate('/account/verify');
        } else {
          console.error(response.statusText);
          // console.log(data)
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


    const [showPassword2, setShowPassword2] = useState(false);

    const togglePasswordVisibility2 = () => {
      setShowPassword2(!showPassword2);
    };

  return (
    <div>
          
    <section className='builderSectionOne'>
      <h2>Sign up to set up your store.</h2>
      <p>
      Supply construction materials, for contractors and builders in need of high quality materials
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
    <div className=''>
    <input 
      type="number" 
      name="phone_number"
      placeholder='Phone number e.g (08094422807)' 
      value={formData.phone_number}
      onChange={handleChange}
      required
    />

    
    <input 
      type="email"  
      name='email'
      placeholder='Email  e.g (johndoe@example.com)' 
      value={formData.email}
      onChange={handleChange}
      required
    />
    

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


      <div className='eyeDiv'>
        <input 
          type={showPassword2 ? 'text' : 'password'} 
          name="password2"
          placeholder='Confirm Password e.g (Johndoe6421@)' 
          value={formData.password2}
          onChange={handleChange}
          required
        />



        <i
          className={`fa ${showPassword2 ? 'fa-eye-slash' : 'fa-eye'} password-toggle-icon`}
          onClick={togglePasswordVisibility2}
        ></i>
      </div>


    

      <div className='createOneDiv'>
          {/* <label>Country, e.g (Nigeria)</label> */}
          <select 
            placeholder='Title' 
            className='createSelect'
            name='country'
            value={formData.country}
            onChange={handleChange}
            required
            >
            <option value="">Country</option>
            <option value="Nigeria">Nigeria</option>
            <option value="Egypt">Egypt</option>
            <option value="South Africa">South Africa</option>
            <option value="Morocco">Morocco</option>
            <option value="Kenya">Kenya</option>
            <option value="Ethiopia">Ethiopia</option>
            <option value="Ghana">Ghana</option>
            <option value="Cameroon">Cameroon</option>
            <option value="Tanzania">Tanzania</option>
            <option value="Cote d'Ivoire">Cote d'Ivoire</option>
          </select> 
        </div>


    <input 
      type='text'
      name="profession"
      placeholder='Profession e.g (Electrical Engineer)' 
      value={formData.profession}
      onChange={handleChange}
      required
    />

    <textarea  
    placeholder='Brief Bio about yourself '
    name='about'
    value={formData.about}
    onChange={handleChange}
    required
    />
    </div>


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
      <span className='span2'>I accept  Bilding’s <span className='terms'>terms of use, privacy policy</span> </span>
    </div>


    {/* <Link to={'/builder/verify'}></Link> */}
    <button className='joinBtn' style={{backgroundColor : btnBg}}  type='submit' > {isLoading? 'Loading. . .' : 'SignUp'}</button>
    


    
    <span className='span3'>Already have an account ? <Link to={'/login'}> Log in</Link></span>
    <div className='hrDiv'>
      {/* <hr /> or <hr /> */}
    </div>
    {/* <button className='googleBtn'>Continue with Google</button> */}
  </form>
    </section>

    {/* <Verify isOpen={isModalOpen} onClose={closeModal}></Verify> */}
  </div>
  )
}

export default SupplierSignUp