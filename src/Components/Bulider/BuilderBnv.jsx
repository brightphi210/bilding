import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import bvn from './Images/bvn.png'
import jwt_decode from "jwt-decode"
const BuilderBnv = ({userID}) => {

    const { id } = useParams();
    let token = localStorage.getItem('authToken');

    let newtoken = jwt_decode(token)

    const [formData, setFormData] = useState ({
        address: '',
        bvn: '',
        gov_id_image: null,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const  handleImageChange = (e) => {
      const file = e.target.files[0];
      setFormData({...formData, image: file,
      });
    }


      const fetchUserData = async () => {

        
        try {
          const response = await fetch(`https://bildingapi.onrender.com/auth/update/${newtoken.user_id}`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              "Authorization": `Bearer ${token}`

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
      }, [newtoken.user_id]);
    


      function handleSubmit(e) {
        e.preventDefault();
      
        // Send the updated user data to the backend
        fetch(`https://bildingapi.onrender.com/auth/update/${newtoken.user_id}`, {
          method: 'PUT', // or 'PATCH' depending on your API
          headers: {
            'Content-Type': 'application/json',
            "Authorization": `Bearer ${token}`
          },
          body: JSON.stringify(formData),
        })
          .then((response) => {
            if (response.ok) {
                console.log("Successfully updated")
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
              placeholder='Address' 
              value={formData.address}
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
                    onChange={handleImageChange} 
                />
                
            </div>
                <button type='submit'>Submit</button>
            </form>
        </section>

    </div>
  )
}

export default BuilderBnv


