import React from 'react'
import { Link } from 'react-router-dom'

const ProSide = () => {
  return (
    <div>
        <section className='sideSection'>
            <Link to={'/dashboard/profile/info'}><h2>Contact Information</h2></Link>
            <hr />
            <Link to={'/dashboard/profile/setting'}><h2>Profile Settings</h2></Link>
            <hr />
            <Link to={'/dashboard/profile/setting'}><h2>Change Password</h2></Link>
        </section>
    </div>
  )
}

export default ProSide