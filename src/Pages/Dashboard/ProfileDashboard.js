import React from 'react'
import DashHeader from '../../Components/DashboardCom/Header/DashHeader'
import DashHeader2 from '../../Components/DashboardCom/Header/DashHeader2'
import Footer from '../../Components/Footer/Footer'

import jwt_decode from "jwt-decode"
import ProInfo from '../../Components/DashboardCom/ProfileDash/ProInfo'
const ProfileDashboard = () => {

    const token = localStorage.getItem('authToken');

    console.log(token)
    const decode = (jwt_decode(token))
    console.log(decode.role)


  return (
    <div>
        {/* <Home /> */}
        {decode.role === "ContractorRole" ? (
          <div>
            <DashHeader />
          </div>
        ) : 
        (
          <div>
            <DashHeader2 />
          </div>
        )}
            <ProInfo />
        <Footer />
    </div>
  )
}

export default ProfileDashboard