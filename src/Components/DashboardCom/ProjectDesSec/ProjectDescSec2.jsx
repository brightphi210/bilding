import React, {useEffect, useState} from 'react'
import './projectDescSec123.css'
import VectorImage from './newvec.png'
import ProjectHireModal from './ProjectHireModal'
// import ProjectHireModal2 from './ProjectHireModal2'
import sectTwoImage from './ggh.png'

const ProjectDescSec2 = () => {

  const [modal, setModal] = useState(false)
  const [modal2, setModal2] = useState(false)

  const [application, setApplication] = useState([])
  const [selectedApplication, setSelectedApplication] = useState([])



  const [isLoading, setIsLoading] = useState(false);

  const token = localStorage.getItem('authToken');
  
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
  
  const url = 'https://bildingapi.onrender.com/api/bids/user/'


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


  const handleMoreClick = (myApplication) => {
    setSelectedApplication(myApplication);
    showModal(true);
  };
 

  console.log(application)


  return (
    <div>
      <section className='projectSectionTwoDiv'>
        <section>
        {application.length === 0 ? 
          (<section className='projectSecThree'>
            <img src={sectTwoImage} alt="" />
            <h3>No Application yet.</h3>
            <p>Please go to your applications section, and select <br /> a preferred candidate for your project</p>
          </section>): 
        (

          <>
          {application.map((myApplication)=>(
              <>
                  <div className='projectSectionTwo' key={myApplication.applicant.id}>
                    <div className='proSeniorDiv'>
                        <img src={VectorImage} alt="" />
                    </div>
                    <div className=''>
                      <div>
                        <span className='name'>{myApplication.applicant.firstname} {myApplication.applicant.lastname}</span>
                        <span className='review'><i class="uil uil-favorite sectTwoIcons"></i> 4.6 (9 reviews)</span>
                      </div>
                        <div className='proSenior'>
                          <h2>{myApplication.applicant.profession}</h2>
                          <span><i class="uil uil-location-point sectTwoIcons"></i> {myApplication.applicant.country}</span>
                        </div>
                      <p>
                        <b>Bio</b>: {myApplication.applicant.about}
                      </p>
                      <p className='hireNum'> <b>Hires:</b> 0</p>
                    </div>

                    <div className='proSectHire'>
                      <h2>₦{myApplication.amount}</h2>
                      <div className='projectSec2Btns'>

                        <button className ="secTwoView" onClick={() => handleMoreClick(myApplication)}>Hire User</button>
                      </div>
                    </div>
                      </div>
                      <hr />  
                  </>
          ))}
        </>
        )}
        </section>


        <ProjectHireModal isOpen={modal} onClose={hideModal} selectedApplication = {selectedApplication}/>
      </section>
    </div>
  )
}

export default ProjectDescSec2