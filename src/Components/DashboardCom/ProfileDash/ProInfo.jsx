import React, { useState, useEffect } from 'react'
import './profile.css'
import ProSide from './ProSide'

import { FiEdit } from 'react-icons/fi'
import {AiOutlineArrowRight} from 'react-icons/ai'

import { Link } from 'react-router-dom'

import jwt_decode from "jwt-decode"
import { useNavigate } from 'react-router-dom';
import { AiOutlineCloseCircle } from 'react-icons/ai'



const ProInfo = () => {

    const [showEdit, setShowEdit] = useState(true)

    const [showEditAdd, setShowEditAdd] = useState(true)

    const handleShowEdit = () =>{
        setShowEdit(!showEdit);
    }


    const handleShowEditAdd = () =>{
        setShowEditAdd(!showEditAdd);
    }

    const cancleShow1 = (e) =>{
        e.preventDefault();
        setShowEdit(!showEdit);
    }

    const cancleShow2 = (e) =>{
        e.preventDefault();
        setShowEditAdd(!showEditAdd);
    }


    let token = localStorage.getItem('authToken');
    let newtoken = jwt_decode(token)
    const navigate = useNavigate()

    let [success, setSuccess] = useState("")

    setTimeout(() => setSuccess(''), 10000);


    const [formData, setFormData] = useState ({
        firstname: '',
        lastname: '',
        email: '',
        phone_number: '',
        country: '',
        // profile : {address: '', state: '',}
    });


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };



    const fetchUserData = async (e) => {

        try {
          const response = await fetch('https://bildingapi.onrender.com/auth/edit', {
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



      function handleSubmit(e) {
        e.preventDefault();

        // setIsLoading(true);

        const newFormData = new FormData();
        newFormData.append('firstname', formData.firstname);
        newFormData.append('lastname', formData.lastname);
        newFormData.append('email', formData.email);
        newFormData.append('phone_number', formData.phone_number);
        newFormData.append('country', formData.country);
        // newFormData.append('profile.address', formData.profile.address);
        // newFormData.append('profile.state', formData.profile.state);

      
        fetch('https://bildingapi.onrender.com/auth/edit', {
          method: 'PUT',
          headers: {
            "Authorization": `Bearer ${token}`
          },
          body: newFormData,
        })
          .then((response) => {
            if (response.ok || response.status === 400) {
                console.log("Successfully updated")
                setSuccess('Successfuly Updated')
                
            } else {
              console.log("Failed to update")
            }
          })
          .catch((error) => {
            console.error('Error updating user profile:', error);
          });
      }


      const [proFormData, setProFormData] = useState ({
        address: '',
        bvn: '',
        state: '',
        // gov_id_image : null

    });


    const handleProChange = (e) => {
        const { name, value } = e.target;
        setProFormData({ ...proFormData, [name]: value });
    };


    const fetchUserProData = async (e) => {

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

          setProFormData(userData);
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      };


      console.log(proFormData)


      useEffect(() => {
        fetchUserProData();
      }, []);



      function handleProSubmit(e) {
        e.preventDefault();

        // setIsLoading(true);

        const newFormDataPro = new FormData();
        newFormDataPro.append('address', proFormData.address);
        newFormDataPro.append('bvn', proFormData.bvn);
        newFormDataPro.append('state', proFormData.state);
        // newFormDataPro.append('gov_id_image', proFormData.gov_id_image);

      
        fetch(`https://bildingapi.onrender.com/auth/update/`, {
          method: 'PUT',
          headers: {
            "Authorization": `Bearer ${token}`
          },
          body: newFormDataPro,
        })
          .then((response) => {
            if (response.ok) {
                console.log("Successfully updated")
                setSuccess('Successfuly Updated')
                // navigate('/dashboard/profile/info')
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
        <section className='profileInfoSection'>
            <h2 className='sett'>Settings</h2>

            {success &&
                <div className='successModal'>
                    <p className='successMessage'>{success} <AiOutlineCloseCircle /></p>
                </div>
            }
            <div className='prfileDivFlex'>
                <ProSide />
                <div className='profileGenDiv'>

                    <div className='OneDiv new'>
                        <div className='editDiv'>
                            <h2>Account info</h2>
                            <FiEdit  className='luIcons' onClick={handleShowEdit}/>
                        </div>
                        <hr />


                        {showEdit ? 
                        (<>
                            <div className='formDetails'>
                                <h3>Your name</h3>
                                <p>{formData.firstname} {formData.lastname}</p>
                            </div>


                            <div className='formDetails'>
                                <h3>Email address</h3>
                                <p>{formData.email}</p>
                            </div>


                            <div className='formDetails'>
                                <h3>Phone number</h3>
                                <p>{formData.phone_number}</p>
                            </div>

                            <div className='formDetails'>
                                {/* {console.log(formData)} */}
                                <h3>Country</h3>
                                <p>{formData.country}</p>
                            </div>
                                
                        </>) : 
                        (<>

                            <form action="" className='proFormDiv' onSubmit={handleSubmit}>
                                <div className='formDetails'>
                                    <h3>First Name</h3>
                                    <input type="text" 
                                    placeholder='First Name . . .' 
                                    onChange={handleChange}
                                    name='firstname'
                                    value={formData.firstname}
                                    />
                                </div>


                                <div className='formDetails'>
                                    <h3>Last Name</h3>
                                    <input type="text" 
                                    placeholder='Last Name . . .' 
                                    onChange={handleChange}
                                    name='lastname'
                                    value={formData.lastname}
                                    />
                                </div>


                                <div className='formDetails'>
                                    <h3>Phone number</h3>
                                    <input type="text" 
                                    placeholder='Phone Number . . .' 
                                    onChange={handleChange}
                                    name='phone_number'
                                    value={formData.phone_number}
                                    />
                                </div>

                                <div className='formDetails'>
                                    <h3>Country</h3>
                                    <input type="text" 
                                    placeholder='Count . .' 
                                    value={formData.country}
                                    name='country'
                                    onChange={handleChange}
                                    />
                                </div>
                                <button type='submit'>Save </button>
                                <button className='cancle' onClick={cancleShow1}>Cancle </button>
                            </form>
                        </>)}




                    </div>

                    <div className='OneDiv'>

                        <div className='editDiv'>
                            <h2>Location info</h2>
                            <FiEdit  className='luIcons' onClick={handleShowEditAdd}/>
                            <hr />
                        </div>


                        {showEditAdd ? 
                        (<>

                            <div className='formDetails'>
                                <h3>BVN</h3>
                                <p>{proFormData.bvn}</p>
                            </div>

                            <div className='formDetails'>
                                <h3>State</h3>
                                <p>{proFormData.state} ,State</p>
                            </div>


                            <div className='formDetails'>
                                <h3>Address</h3>
                                <p>{proFormData.address}</p>
                            </div>

                            {console.log(proFormData)}
                        </>) : 


                        (<>
                            <form action="" className='proFormDiv' onSubmit={handleProSubmit}>

                                <div className='formDetails'>
                                    <h3>State</h3>
                                    <input 
                                        type="text"
                                        name="state"
                                        value={proFormData.state}
                                        onChange={handleProChange}
                                    />
                                </div>


                                <div className='formDetails'>
                                    <h3>BVN</h3>
                                    <input 
                                        type="number"
                                        name="bvn"
                                        value={proFormData.bvn}
                                        onChange={handleProChange}
                                    />
                                </div>


                                <div className='formDetails'>
                                    <h3>Address</h3>
                                    <input 
                                        type="text"
                                        name="address"
                                        value={proFormData.address}
                                        onChange={handleProChange}
                                    />
                                </div>
                        
                                <button  type='submit'>Save</button>
                                <button className='cancle' onClick={cancleShow2}>Cancle</button>
                            </form>
                        </>)}

                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default ProInfo
