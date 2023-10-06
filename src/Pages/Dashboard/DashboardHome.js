import React from 'react'
import DashHeader from '../../Components/DashboardCom/Header/DashHeader'
import Home from '../../Components/DashboardCom/Home'
import Footer from '../../Components/Footer/Footer'
import WorkerDashboardHome from '../DashboardWorker/WorkerDashboardHome'

import jwt_decode from "jwt-decode"
const DashboardHome = () => {

  const token = localStorage.getItem('authToken');
  const decode = (jwt_decode(token))
  console.log(decode.role)
  return (

    
    <div>
        <DashHeader />

        {decode.role === "Constructor" ? 
        (<Home />): (
          <WorkerDashboardHome />
        )}

        <Footer />
    </div>
  )
}

export default DashboardHome