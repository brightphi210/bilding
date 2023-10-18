
import React from 'react'
import veryImage from './very.png'
import './verify.css'
import { Link } from 'react-router-dom'
const Verify = ({isOpen, onClose,}) => {
    
    if (!isOpen) return null;
  return (
    <div className='modal-overlay'>
        <section className='modal'>
            <i class="uil uil-multiply close-button" onClick={onClose}></i>
            <img src={veryImage} alt="" />
            <h2>Verify your email</h2>
            <p>
                A verification link has been sent to your email, click the link to verify your account.
            </p>
            <button>Resend Link</button>
            <Link to={'/'}><button>Continue</button></Link>
        </section>
    </div>
  )
}

export default Verify