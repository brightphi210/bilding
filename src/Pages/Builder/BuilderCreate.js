import React, { Component, useState } from 'react'
import Header from '../../Components/LoginFloder/Header'
import myVideo from './animation_lnkaatit.mp4'
import './buildCreate.css'
import { useNavigate } from 'react-router-dom'

import BuilderCreateONE from '../../Components/Bulider/BuilderCreateProj/BuilderCreateONE'
import BuilderCreateTWO from '../../Components/Bulider/BuilderCreateProj/BuilderCreateTWO'
import BuilderCreateTHREE from '../../Components/Bulider/BuilderCreateProj/BuilderCreateTHREE'


import BuilderCreateReview from '../../Components/Bulider/BuilderCreateProj/BuilderCreateReview'
import { Player, Controls } from '@lottiefiles/react-lottie-player';
const BuilderCreate = () => {


  const [isModalOpen, setIsModalOpen] = useState(false);
  

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };


  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    url: "",
    image1: null,
    image2: null,
    title: "",
    categories: "",
    skills: "",
    scope: "",
    experience: "",
    duration: "",
    location: "",
    budget: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    const newValue = type === "file" ? e.target.files[0] : value;
    setFormData({ ...formData, [name]: newValue });
  }



  let url = 'https://bildingapi.onrender.com/api/projects'
  
  const [isLoading, setIsLoading] = useState(false);
  const token = localStorage.getItem('authToken');

  const handleSubmit  = async () => {
    setIsLoading(true);
    try{

      const formDataNew = new FormData();
 
      formDataNew.append('url', formData.url);
      formDataNew.append('title', formData.title);
      formDataNew.append('categories', formData.categories);
      formDataNew.append('skills', formData.skills);
      formDataNew.append('scope', formData.scope);
      formDataNew.append('experience', formData.experience);
      formDataNew.append('duration', formData.duration);
      formDataNew.append('budget', formData.budget);
      formDataNew.append('description', formData.description);
      formDataNew.append('location', formData.location);
      formDataNew.append('image1', formData.image1);
      formDataNew.append('image2', formData.image2);

      console.log(formDataNew)

      const response = await fetch(url, {
        method: 'POST',
        headers : {
          "Authorization": `Bearer ${token}`,
        },
        body: formDataNew,

      })

      
      if (response.ok) {
        const data = await response.json()
        console.log('Product Successfully Created!', data);
        navigate('/dashboard')
      } else {
        console.error( response.statusText, 'Product Failed to Create');
        
      }
    }

    catch(err){
      console.log("There was Error while creating project !!", err);
    }
  }


  const [page, setPage] = useState(0)

  const FormTitle = ["1", "2", "3", ]

  const PageDisplayed = () => {
    if(page === 0){
      return <BuilderCreateONE 
      formData={formData} 
      setFormData={setFormData} 
      onSubmit={handleSubmit} 
      onChange={handleChange}/>
    }
    if(page === 1){
      return <BuilderCreateTWO 
      formData={formData} 
      setFormData={setFormData} 
      onSubmit={handleSubmit} 
      onChange={handleChange}
      />
    }


    if(page === 2){
      return <BuilderCreateTHREE 
      formData={formData} 
      setFormData={setFormData} 
      onSubmit={handleSubmit} 
      onChange={handleChange}
      />
    }


  }

  let myClassName1 = ''
  let myClassName2 = ''
  let myClassName3 = ''


  let myCarolBtn1 = ''
  let myCarolBtn2 = ''
  let myCarolBtn3 = ''

  if(page === 0){
    myClassName1 = 'levelBorder1'
    myClassName2 = ''
    myClassName3 = ''

    myCarolBtn1 = 'carolBtn1'
    myCarolBtn2 = ''
    myCarolBtn3 = ''
  }
  
  else if(page === 1){
    myClassName2 = 'levelBorder2'
    myClassName1 = ''
    myClassName3 = ''


    myCarolBtn1 = ''
    myCarolBtn2 = 'carolBtn2'
    myCarolBtn3 = ''
  }
  
  else if (page === 2) {
    myClassName3 = 'levelBorder3'
    myClassName1 = ''
    myClassName2 = ''


    myCarolBtn1 = ''
    myCarolBtn2 = ''
    myCarolBtn3 = 'carolBtn3'
  };

  let myMainBtn1 = '' 

  if(page !== 0){
    myMainBtn1 ='mainBtn1'
  }

  return (
    <div>
      <section>
        <Header />
        <div className="container">
          <h2>Create your project.</h2>
          <p>Get all the help you need for  your <br /> construction project.</p>


          <div className='createLevel'>
            <p className={myClassName1} onClick={()=>{
              setPage(0)
            }}>Project details</p>
            <p className={myClassName2} onClick={(()=>{
              setPage(1)
            })}>Project Scope</p> 
            <p className={myClassName3} onClick={()=>{
              setPage(2)
            }}>Project Budget</p> 
          </div>


          <div className='createBtnDIv'>

            <div>
              {PageDisplayed()}
            </div>


            <div className='createCarolDiv'>
              <div className={myCarolBtn1}
                onClick={() => {
                setPage(0);
                }}>
              </div>

              <div 
                className={myCarolBtn2}
                onClick={() => {
                setPage(1);
                }}>
              </div>

              <div 
                className={myCarolBtn3}
                onClick={() => {
                setPage(2);
                }}>
              </div>
            </div>

            <div className='mainBtnDiv'>
              <h4 
                className={myMainBtn1}
                onClick={() => {
                  setPage(page - 1);
                }}
              >
                {page === 0 ? null : "Back"}
              </h4>
              
              <button 
                  className='mainBtn2'
                  type='submit'
                  onClick={() =>{
                    if (page === FormTitle.length - 1) {
                      // openModal()
                      handleSubmit()

                    } else {
                      setPage((currPage) => currPage + 1);
                    }
                  }}
                  
                  >
                  {page === 0 ? "Proceed" : page === 1 ? "Next" : "Submit"}
              </button>
              
            </div>

            {isLoading === true && (
              <div className='creatingLoadingDiv'>
                <div className='creatingLoading'>
                  <video controls={false} autoPlay loop className='video'> 
                    <source src={myVideo} type="video/mp4" />
                  </video>
                </div>
              </div>
            )}

          </div>
        </div>        
      </section>
        <BuilderCreateReview isOpen={isModalOpen} onClose={closeModal}></BuilderCreateReview>
    </div>
  )
}

export default BuilderCreate