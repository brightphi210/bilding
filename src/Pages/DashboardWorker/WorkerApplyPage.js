import React from 'react'
import DashHeader from '../../Components/DashboardCom/Header/DashHeader'
import DashHeader2 from '../../Components/DashboardCom/Header/DashHeader2'
import Footer from '../../Components/Footer/Footer'
import jwt_decode from "jwt-decode"
import WorkerProjectApply from '../../Components/DashBoardWorker/WorkerProjectDes/WorkerProjectApply'

const WorkerApplyPage = () => {

    const token = localStorage.getItem('authToken');

    console.log(token)
    const decode = (jwt_decode(token))
    console.log(decode.role)
  return (
    <div>
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

            < WorkerProjectApply/>
            {/* <Footer /> */}
        </div>

    </div>
  )
}

export default WorkerApplyPage