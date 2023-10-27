import React from 'react'
import { useState, useEffect } from 'react';
import bvn from './Images/bvn.png'
import jwt_decode from "jwt-decode"
import { useNavigate } from 'react-router-dom';
const BuilderBnv = () => {

    let token = localStorage.getItem('authToken');
    const [isLoading, setIsLoading] = useState(false);

    let newtoken = jwt_decode(token)

    const navigate = useNavigate()

    const [formData, setFormData] = useState ({
        address: '',
        state: '',
        bvn: '',
    });


    const [gov_id_image, setGov_id_image] = useState(null)

    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };


    const handleImageChange = (e) => {
      setGov_id_image(e.target.files[0]);
    };


      const fetchUserData = async (e) => {

        try {
          const response = await fetch(`https://bildingapi.onrender.com/auth/update/`, {
            method: 'GET',
            headers: {
              "Authorization": `Bearer ${token}`,
              "Content-Type": "application/json"
            },
          });
          const userData = await response.json();
          console.log("This is the user data: " + JSON.stringify(userData));

          setFormData(userData);
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      };


      useEffect(() => {
        fetchUserData();
      }, []);


      console.log(formData.id)
    


      function handleSubmit(e) {
        e.preventDefault();

        setIsLoading(true);

        const newFormData = new FormData();
        newFormData.append('address', formData.address);
        newFormData.append('state', formData.state);
        newFormData.append('bvn', formData.bvn);
        newFormData.append('gov_id_image', gov_id_image);

      
        fetch(`https://bildingapi.onrender.com/auth/update/${newtoken.user_id}`, {
          method: 'PUT',
          headers: {
            "Authorization": `Bearer ${token}`
          },
          body: newFormData,
        })
          .then((response) => {
            if (response.ok) {
                console.log("Successfully updated")
                // navigate('/dashboard')
            } else {
              console.log("Failed to update")
            }
          })
          .catch((error) => {
            console.error('Error updating user profile:', error);
          });
      }
      


  return (
    <div>
        <section className='builderSectionOne'>
            <h2>Welcome to Bilding</h2>
            <p>Tell us a bit more about yourself.</p>

            <form action="" className='buiderForm' onSubmit={handleSubmit}>  
            <input 
              type="text" 
              name="address"
              placeholder='Address e.g 35 D/Line, Port Harcourt' 
              value={formData.address}
              onChange={handleChange}
              required
            />


            <input 
              type="text" 
              name="state"
              placeholder='State e.g Rivers' 
              value={formData.state}
              onChange={handleChange}
              required
            />


            <input 
              type="text" 
              name="bvn"
              placeholder='Bvn' 
              value={formData.bvn}
              onChange={handleChange}
              required
            />


            <div className='createOneDivs'>
                <label>Upload government approved ID</label>

                <img src={bvn} alt="" />
                <input 
                    type="file" 
                    id='image' 
                    name="gov_id_image" 
                    accept="image/*"
                    onChange ={handleImageChange} 
                />
                
            </div>
                <button type='submit'>{isLoading ? "Loading. . .": "Submit"}</button>
            </form>
        </section>

    </div>
  )
}

export default BuilderBnv


