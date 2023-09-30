import React from 'react'
import './builderModal.css'

import dashModalImg1 from './Images/das1.png'
import dashModalImg2 from './Images/dash2.png'
const BuilerModal = ({isOpen, onClose,}) => {

    if (!isOpen) return null;


  return (
    <div className='dash-modal-overlay'>
        <section className='dash-modal'>
            <i class="uil uil-multiply dashClose" onClick={onClose}></i>
            <h2>Create a new project <br /> or request</h2>
            <div className='dashmodalDiv'>
                <div className='dashmodalEach'>
                    <img src={dashModalImg1} alt="" />
                    <p>Find  the best skilled labor to bring your dream to life</p>
                    <button>Create Project</button>
                </div>

                <div className='dashmodalEach'>
                    <img src={dashModalImg2} alt="" />
                    <p>Find the best suppliers and  goods, for your construction project.</p>
                    <button>Create Request</button>
                </div>
            </div>
        </section>

        
    </div>
  )
}

export default BuilerModal