import React, { useState, useEffect } from 'react'
import ProSide from './ProSide'
import proImage from './prof.png'
import { FiEdit } from 'react-icons/fi'
import {AiOutlineArrowRight} from 'react-icons/ai'
import { Link } from 'react-router-dom'

import jwt_decode from "jwt-decode"
import { useNavigate } from 'react-router-dom';
const ProSett = () => {


    const [proSettEdit, setProSettEdit] = useState(true)
    const [proSettEditTwo, setProSettEditTwo] = useState(true)

    const handleProSettEdit = () => {
        setProSettEdit(!proSettEdit)
    }

    const handleProSettEditnew = (e) => {
        setProSettEditTwo(!proSettEditTwo)
    }

    const handleProSettEditnewa = (e) => {
        setProSettEditTwo(!proSettEditTwo)
    }


    const handleProSettEdita = (e) => {
        e.preventDefault()
        setProSettEdit(!proSettEdit)
    }



    let token = localStorage.getItem('authToken');
    let newtoken = jwt_decode(token)
    const navigate = useNavigate()

    let [success, setSuccess] = useState("")

    setTimeout(() => setSuccess(''), 10000);



    const [formData, setFormData] = useState ({
        profile_pics: null,
        position: '',
        about: '',
    });


    // const handleChange = (e) => {
    //     const { name, value } = e.target;
    //     setFormData({ ...formData, [name]: value });
    // };


    const handleChange = (e) => {
        const { name, value, type } = e.target;
        const newValue = type === "file" ? e.target.files[0] : value;
        setFormData({ ...formData, [name]: newValue });
      }



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
        newFormData.append('profile_pics', formData.profile_pics);
        newFormData.append('position', formData.position);
        newFormData.append('about', formData.about);

      
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



  return (
    <div>
        <section className='profileInfoSection'>
            <h2 className='sett'>Settings</h2>
            <div className='prfileDivFlex'>
                <ProSide />
                <div className='OneDivSett'>
   

                    {proSettEditTwo ? 
                    (<>
                        {formData.profile_pics === '' || formData.profile_pics === null ? 
                        (<><img src={proImage} alt="" /></>): 
                        (<><img src={formData.profile_pics} alt="" /></>)}
                        <div className='chaPicDiv'>
                            <h2>Change Profile Picture</h2>
                            <FiEdit  className='luIconss' onClick={handleProSettEditnew}/>
                        </div>
                        <p>{formData.position}</p>
                        
                    </>): 
                    (<>              
                        <form action="" className='proSettCat' onSubmit={handleSubmit}>
                        <div className='profilePicsSett'>
                            <input type="file" accept="image/*"  />
                        </div>

                        
                        <div className='createOneDiv newCreate'>
                            <input type="text" placeholder='Position e.g(Electrician)'/>
                        </div>

                        <button type='submit'>Update <AiOutlineArrowRight /></button>
                        <button onClick={handleProSettEditnewa} className='viewSett'>Cancle</button>


                        </form>
                    </>)}
                    
                    <div className='twoDivSett'>
                        <div className='editDivSett'>
                            <h2>About</h2>
                            <FiEdit  className='luIcons' onClick={handleProSettEdit}/>
                        </div>

                        {proSettEdit ? 
                        (<>
                            <hr />
                            <p>
                                pLorem ipsum dolor sit amet consectetur. Nibh aenean sit nulla 
                                vitae cursus dignissim vel nisl tincidunt. Ipsum ipsum pellentesque 
                                tempor diam lobortis. Ut nisl feugiat Lorem ipsum dolor sit amet consectetur. 
                            </p>
                        </>):
                        (<>
                            <form action="" className='proSettDes'>
                                <textarea name="" placeholder='Description'/>
                                <Link to={'/dashboard/profile/modal'}><button className='cancle'>Update <AiOutlineArrowRight /></button></Link>
                                <button onClick={handleProSettEdita}>Cancle</button>
                            </form>
                        </>)
                        }
                    </div>
                </div>
            </div>
        </section>
        
    </div>
  )
}

export default ProSett