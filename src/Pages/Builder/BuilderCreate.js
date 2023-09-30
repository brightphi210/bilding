import React, { Component, useState } from 'react'
import Header from '../../Components/LoginFloder/Header'

import './buildCreate.css'
import { useNavigate } from 'react-router-dom'

import BuilderCreateONE from '../../Components/Bulider/BuilderCreateProj/BuilderCreateONE'
import BuilderCreateTWO from '../../Components/Bulider/BuilderCreateProj/BuilderCreateTWO'
import BuilderCreateTHREE from '../../Components/Bulider/BuilderCreateProj/BuilderCreateTHREE'


const BuilderCreate = () => {

  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    // url: "",
    // image: "",
    title: "",
    categories: "",
    skills: "",
    // scope: "",
    // experience: "",
    // duration: "",
    // location: "",
    // budget: "",
    // description: "",
  });


  let url = 'https://bildingapi.onrender.com/api/projects'
  const token = localStorage.getItem('authToken');

  const handleSubmit  = async (e) => {
    e.preventDefault();
    console.log(`Latest Token ${token}`)


    try{
      const respose = await fetch(url, {
        method: 'POST',
        headers : {
          "Authorization": `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },

        body: JSON.stringify(formData),
        
      })

      const data = await respose.json()

      if (data.success) {
        console.log('Product Successfully Created!');
        navigate('/dashboard')
      } else {
        console.error('Product Failed to Create');
      }
    }

    catch(err){
      console.log("There was Error while creating project !!")
    }
  }


  const [page, setPage] = useState(0)

  const FormTitle = ["1", "2", "3", ]

  const PageDisplayed = () => {
    if(page === 0){
      return <BuilderCreateONE formData={formData} setFormData={setFormData} onSubmit={handleSubmit}/>
    }
    if(page === 1){
      return <BuilderCreateTWO />
    }
    if(page === 2){
      return <BuilderCreateTHREE />
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
                  onClick={() =>{
                    if (page === FormTitle.length - 1) {
                      alert("FORM SUBMITTED");
                      // console.log(formData);
                      navigate('/builder/project/review');

                    } else {
                      setPage((currPage) => currPage + 1);
                    }
                  }}
                  
                  >
                  {page === 0 ? "Create Request" : page === 1 ? "Next" : "Review"}
              </button>
              {/* <button type='submit'>fetchData</button> */}
              
            </div>


          </div>
        </div>        
      </section>
    </div>
  )
}

export default BuilderCreate