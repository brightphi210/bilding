import React from 'react'
import DashHeader from '../../Components/DashboardCom/Header/DashHeader'
import DashHeader2 from '../../Components/DashboardCom/Header/DashHeader2'
import DashHeader3 from '../../Components/DashboardCom/Header/DashHeader3'
import jwt_decode from "jwt-decode"
import SupplierRequestApply from '../../Components/SupplierComp/SupplierRequestDes/SupplierRequestApply'

const SupplierApplyPage = () => {
    const token = localStorage.getItem('authToken');

    console.log(token)
    const decode = (jwt_decode(token))
    console.log(decode.role)
  return (
    <div>
        <div>
        {/* <Home /> */}
        {decode.role === "ContractorRole" && (
          <div>
            <DashHeader />
          </div>
        ) }


        { decode.role === "WorkerRole" &&(
          <div>
            <DashHeader2 />
            {/* < WorkerProjectApply/> */}
          </div>
        )}

        {decode.role === 'SupplierRole' && 
        (<>
            <DashHeader3 />
        </>)}

            <SupplierRequestApply />
        </div>

    </div>
  )
}

export default SupplierApplyPage