import React from 'react'
import DashHeader from '../../Components/DashboardCom/Header/DashHeader'
import Home from '../../Components/DashboardCom/Home'
import Footer from '../../Components/Footer/Footer'
import WorkerDash from '../../Components/DashBoardWorker/WorkerDash'

import DashHeader2 from '../../Components/DashboardCom/Header/DashHeader2'

import jwt_decode from "jwt-decode"
import SupplierDashHome from '../../Components/SupplierComp/SupplierDashHome'
import DashHeader3 from '../../Components/DashboardCom/Header/DashHeader3'
const DashboardHome = () => {

  const token = localStorage.getItem('authToken');

  console.log(token)
  const decode = (jwt_decode(token))
  console.log(decode.role)
  return (

    
    <div>
        {/* <Home /> */}
        {decode.role === "ContractorRole" && (
          <div>
            <DashHeader />
            <Home />
          </div>
        ) }


        { decode.role === "WorkerRole" &&(
          <div>
            <DashHeader2 />
            <WorkerDash />
          </div>
        )}

        {decode.role === 'SupplierRole' && 
        (<>
            <DashHeader3 />
          <SupplierDashHome />
        </>)}
        <Footer />
    </div>
  )
}

export default DashboardHome