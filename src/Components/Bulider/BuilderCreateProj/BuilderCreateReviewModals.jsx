import React from 'react'
import createdImg from './k.png'
import './builderCreateReviewModals.css'

import { Link } from 'react-router-dom'


const BuilderCreateReviewModals = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className='builderCreateReviewSections'>
        <section className='builderCreateReviewDivs'>
            <i class="uil uil-multiply reviewCloseIcon" onClick={onClose}></i>
            <img src={createdImg} alt="" />
            <h2>Project created successfully!</h2>
            <p>
                You project has been created and sent out, 
                keep your eyes on the notifications panel 
                <br />for offers from professionals.
            </p>
            <Link to={'/dashboard'}><button>Visit Dashboard</button></Link>
        </section>

        
    </div>
  )
}

export default BuilderCreateReviewModals
