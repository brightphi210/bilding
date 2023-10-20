import React from 'react'
import DashHeader from '../../Components/DashboardCom/Header/DashHeader'
import DashHeader2 from '../../Components/DashboardCom/Header/DashHeader2'
import Footer from '../../Components/Footer/Footer'

import jwt_decode from "jwt-decode"
import ProSett from '../../Components/DashboardCom/ProfileDash/ProSett'
import ProfileModal from '../../Components/DashboardCom/ProfileDash/ProfileModal'

// import 

const ProfileDashboardSett = () => {
    const token = localStorage.getItem('authToken');

    console.log(token)
    const decode = (jwt_decode(token))
    console.log(decode.role)
  return (
    <div>
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
            <ProSett />
        <Footer />
        {/* <ProfileModal /> */}
    </div>
  )
}

export default ProfileDashboardSett