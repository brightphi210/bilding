import React, { Component, useState } from 'react'
import Header from '../../Components/LoginFloder/Header'

import './buildCreate.css'

import BuilderCreateONE from '../../Components/Bulider/BuilderCreateONE'
import BuilderCreateTWO from '../../Components/Bulider/BuilderCreateTWO'
import BuilderCreateTHREE from '../../Components/Bulider/BuilderCreateTHREE'

const BuilderCreate = () => {

  const [page, setPage] = useState(0)

  const FormTitle = ["Project details", "Project Scope", "Project Budget"]

  const PageDisplayed = () => {
    if(page === 0){
      return <BuilderCreateONE />
    }
    if(page === 1){
      return <BuilderCreateTWO />
    }
    if(page === 2){
      return <BuilderCreateTHREE />
    }
  }
  return (
    <div>
      <section>
        <Header />
        <div className="container">
          <div>
            <div className="row">
              <h2>{FormTitle[page]}</h2>
            </div>

            <div>
              <button 
                disabled = {page === 0}
                onClick={() => {
                  setPage((currPage) => currPage - 1)
                }}
              >
                Prev
              </button>

              
              <button 
                disabled = {page === FormTitle.length - 1}
                  onClick={() =>{
                  setPage((currPage) => currPage + 1)
                  }}>
                Next
              </button>
            </div>
          </div>
        </div>

        
      </section>
    </div>
  )
}

export default BuilderCreate