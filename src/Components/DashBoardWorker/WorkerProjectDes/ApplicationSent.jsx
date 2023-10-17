import React from 'react'

import sent from './appl.png'

import { Link } from 'react-router-dom'

const ApplicationSent = () => {
  return (
    <div className='modal-overlay-view'>
        <section className='modal-view-sent'>
            <img src={sent} alt="" />
            <div>
                <h2>Application sent</h2>
                <p>
                    You’ve successfully sent an application to 
                    handle this  project keep an eye on your 
                    notifications for updates.
                </p>
                
                <Link to={'/dashboard'}><button>Back to Dashboard</button></Link>

            </div>
        </section>
    </div>
  )
}

export default ApplicationSent