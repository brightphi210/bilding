import React from 'react'
import DashHeader from '../../Components/DashboardCom/Header/DashHeader'
import Footer from '../../Components/Footer/Footer'

import WorkerDash from '../../Components/DashBoardWorker/WorkerDash'
const WorkerDashboardHome = () => {
  return (
    <div>
        <DashHeader />
        <WorkerDash />
        <Footer />
    </div>
  )
}

export default WorkerDashboardHome