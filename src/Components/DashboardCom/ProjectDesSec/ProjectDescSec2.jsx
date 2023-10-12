import React, {useEffect, useState} from 'react'
import './projectDescSec123.css'
import VectorImage from './newvec.png'
import ProjectHireModal from './ProjectHireModal'
import ProjectHireModal2 from './ProjectHireModal2'

const ProjectDescSec2 = () => {

  const [modal, setModal] = useState(false)
  const [modal2, setModal2] = useState(false)

  const showModal = ()=>{
      setModal(true)
  }

  const hideModal = ()=>{
      setModal(false)
  }


  const showModal2 = ()=>{
    setModal2(true)
  }

  const hideModal2 = ()=>{
    setModal2(false)
  }



  const [application, setApplication] = useState([])
  const [isLoading, setIsLoading] = useState(false);
  const token = localStorage.getItem('authToken');

  const url = 'https://bildingapi.onrender.com/api/bids/'

  const fetchData = async () => {
    try {
      const res = await fetch(url, {
        method: 'GET',
        headers: {
          "Authorization": `Bearer ${token}`,
        }

      })
      const data = await res.json()
      setApplication(data)

    } catch (error) {
      console.error(error)
    }
  }

  useEffect(()=>{
    fetchData()
  }, [])


  console.log(application)

  
  return (
    <div>
      <section className='projectSectionTwoDiv'>
        <section>

          {application.map((myApplication)=>(
            <div className='projectSectionTwo'>

              <div className='proSeniorDiv'>
                  <img src={VectorImage} alt="" />
              </div>
              <div className=''>
                <div>
                  <span><b>{myApplication.applicant.firstname} {myApplication.applicant.lastname}</b></span>
                  <span className='review'><i class="uil uil-favorite sectTwoIcons"></i> 4.6 (9 reviews)</span>
                </div>
                  <div className='proSenior'>
                    <h2>Senior Electrical Engineer</h2>
                    <span><i class="uil uil-location-point sectTwoIcons"></i> {myApplication.applicant.location}</span>
                  </div>
                <p>
                  {myApplication.applicant.about}
                </p>
                <p className='hireNum'> <b>Hires:</b> 0</p>
              </div>

              <div className='proSectHire'>
                <h2>₦{myApplication.amount}</h2>
                <div className='projectSec2Btns'>
                  <button className='secTwoView' onClick={showModal}>View</button>
                  <button className='secTwoHire' onClick={showModal2}>Hire</button>
                </div>
              </div>
            </div>
          ))}
            <hr />
        </section>

        <ProjectHireModal isOpen={modal} onClose={hideModal}/>
        <ProjectHireModal2 isOpen2={modal2} onClose2={hideModal2}/>
      </section>
    </div>
  )
}

export default ProjectDescSec2