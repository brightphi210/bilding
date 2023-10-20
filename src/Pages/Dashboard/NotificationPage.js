import React from 'react'
import jwt_decode from "jwt-decode"
import DashHeader from '../../Components/DashboardCom/Header/DashHeader'
import DashHeader2 from '../../Components/DashboardCom/Header/DashHeader2'
import Footer from '../../Components/Footer/Footer'
import NotificationDash from '../../Components/DashboardCom/Notification/NotificationDash'

const NotificationPage = () => {
    const token = localStorage.getItem('authToken');

    console.log(token)
    const decode = (jwt_decode(token))
    console.log(decode.role)
  return (
    <div>
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
        <NotificationDash />
        <Footer />
    </div>
    </div>
  )
}

export default NotificationPage