import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import bvn from './Images/bvn.png'

const BuilderBnv = () => {

    const { id } = useParams();


    const [formData, setFormData] = useState ({
        address: '',
        bvn: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...setFormData, [name]: value });
    };


      const fetchUserData = async () => {

        const token = localStorage.getItem('authToken');
        try {
          const response = await fetch(`https://bildingapi.onrender.com/auth/update/${id}`, {
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
      }, []);
    


  return (
    <div>
        <section className='builderSectionOne'>
            <h2>Welcome to Bilding</h2>
            <p>Tell us a bit more about yourself.</p>

            <form action="" className='buiderForm'>  
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
                    name="image" 
                    accept="image/*"
                    onChange={handleChange} 
                />
                
            </div>
                
            </form>
        </section>

    </div>
  )
}

export default BuilderBnv


