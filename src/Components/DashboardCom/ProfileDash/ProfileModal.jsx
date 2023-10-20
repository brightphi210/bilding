import React from 'react'
import { Link } from 'react-router-dom'
import { BsFillCheckCircleFill } from 'react-icons/bs'
import './profile.css'

const ProfileModal = () => {
    // if (!isOpen) return null;
  return (
    <div className='prof-modal-overlay'>
        <section className='profile-modal'>
          <div className='checkDiv'> 
              <BsFillCheckCircleFill  className='check'/>
              <h2>Hurray!</h2>
              <p>You’ve successfully updated a settings</p>
              <Link to={'/dashboard'}><button>Back to Dashboard</button></Link>
              <Link to={'/dashboard/profile/info'}><button className='viewBtns'>Close</button></Link>
          </div>
        </section>
    </div>
  )
}

export default ProfileModal