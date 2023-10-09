import React from 'react'
import WorkerDashApplica from '../../Components/DashBoardWorker/WorkerDashApplica'
import jwt_decode from "jwt-decode"

import DashHeader from '../../Components/DashboardCom/Header/DashHeader'
import DashHeader2 from '../../Components/DashboardCom/Header/DashHeader2'

import Footer from '../../Components/Footer/Footer'

// import
const WorkerDashboardAppPage = () => {

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

        < WorkerDashApplica/>
        <Footer />
    </div>

  )
}

export default WorkerDashboardAppPage