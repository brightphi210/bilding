import React from 'react'

import BuilderReqCreateONE from '../../Components/Bulider/BuilderCreateReq/BuilderReqCreateONE'
import BuilderReqCreateTwo from '../../Components/Bulider/BuilderCreateReq/BuilderReqCreateTwo'
import BuilderReqCreateThree from '../../Components/Bulider/BuilderCreateReq/BuilderReqCreateThree'
import Header from '../../Components/LoginFloder/Header'

import { useState } from 'react'


const BuilderProReq = () => {
    const [page, setPage] = useState(0)

  const FormTitle = ["1", "2", "3", ]

  const PageDisplayed = () => {
    if(page === 0){
      return <BuilderReqCreateONE />
    }
    if(page === 1){
      return <BuilderReqCreateTwo />
    }
    if(page === 2){
      return <BuilderReqCreateThree />
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
          <h2>Create your Request.</h2>
          <p>Get all the help you need for  your <br /> construction project.</p>


          <div className='createLevel'>
            <p className={myClassName1} onClick={()=>{
                setPage(0)
            }}>Request details</p>
            <p className={myClassName2} onClick={()=>{
                setPage(1)
            }}>Items</p> 
            <p className={myClassName3} onClick={()=>{
                setPage(2)
            }}>Request Budget</p> 
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
                    } else {
                      setPage((currPage) => currPage + 1);
                    }
                  }}
                  
                  >
                  {page === 0 ? "Create Request" : page === 1 ? "Next" : "Submit"}
              </button>
            </div>


          </div>
        </div>        
      </section>
    </div>
  )
}

export default BuilderProReq