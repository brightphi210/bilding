import React from 'react'

import DashHeader from '../../Components/DashboardCom/Header/DashHeader'
import DashProject from '../../Components/DashboardCom/DashProject'

import WorkerDashProjects from '../../Components/DashBoardWorker/WorkerDashProjects'
import DashHeader2 from '../../Components/DashboardCom/Header/DashHeader2'
import Footer from '../../Components/Footer/Footer'
import jwt_decode from "jwt-decode"


const DashProjectPage = () => {

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
          <DashProject />
        </div>
      ) : 
      (
        <div>
          <DashHeader2 />
          <WorkerDashProjects />
        </div>
      )}
      <Footer />
    </div>
  )
}

export default DashProjectPage
