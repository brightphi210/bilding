import React from 'react'
import './notification.css'
import {AiOutlineClose} from 'react-icons/ai'

const NotificationDash = () => {
  return (
    <div>
        <section className='notifiSection'>
            <h3>Notification</h3>
            <div className='notifiDiv'>
                <div>
                    <div className='notifiFlex'>
                        <h2>Hurray! Project Created Succefully</h2>
                        <AiOutlineClose  className='notiClose'/>
                    </div>
                    <p>Created 2 days ago.</p>
                    <hr />
                </div>

                <div>
                    <div className='notifiFlex'>
                        <h2>5 Workers Needed for Company Site </h2>
                        <AiOutlineClose  className='notiClose'/>
                    </div>
                    <p>Created 2 days ago.</p>
                    <hr />
                </div>

                <div>
                    <div className='notifiFlex'>
                        <h2>Welcome to bilding </h2>
                        <AiOutlineClose  className='notiClose'/>
                    </div>
                    <p>Created 2 days ago.</p>
                    <hr />
                </div>
            </div>

        </section>
    </div>
  )
}

export default NotificationDash