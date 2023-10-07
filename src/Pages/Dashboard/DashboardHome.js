import React from 'react'
import DashHeader from '../../Components/DashboardCom/Header/DashHeader'
import Home from '../../Components/DashboardCom/Home'
import Footer from '../../Components/Footer/Footer'
import WorkerDash from '../../Components/DashBoardWorker/WorkerDash'

import jwt_decode from "jwt-decode"
const DashboardHome = () => {

  const token = localStorage.getItem('authToken');

  console.log(token)
  const decode = (jwt_decode(token))
  console.log(decode.role)
  return (

    
    <div>
        <DashHeader />
        {/* <Home /> */}
        {decode.role === "ContractorRole" ? (<Home />) : (<WorkerDash />)}
        <Footer />
    </div>
  )
}

export default DashboardHome