import React, {useEffect, useState} from 'react'
import './projectDescSec123.css'
import VectorImage from './newvec.png'
import ProjectHireModal from './ProjectHireModal'
// import ProjectHireModal2 from './ProjectHireModal2'
import sectTwoImage from './ggh.png'
import { useParams } from 'react-router-dom'

// import useParams

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

  const {id} = useParams()
  const [project, setProject] = useState([])
  const [dBids, setdBids] = useState([])
  
  const url = `https://bildingapi.onrender.com/api/projects/${id}`

  const fetccData = async () => {

    try{
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          "Authorization": `Bearer ${token}`
        },

      })


      const data = await response.json()
      setProject(data)

    }catch(er){
      console.log("Error fetching project data !!! ")
    }
  }


  useEffect(()=>{
    fetccData()
  }, [])


  
  console.log(project.bids)


  const handleMoreClick = (index) => {
    setSelectedApplication(index);
    showModal(true);
  };
 

  return (
    <div>
      <section className='projectSectionTwoDiv'>
        <section>
          {project.bids && (<>
              <>
                {project.bids.map((item, index) => (
                  <>
                    <div className='projectSectionTwo' key={index} >
                      <div className='proSeniorDiv'>
                          <img src={VectorImage} alt="" />
                      </div>
                      <div className=''>
                        <div>
                          <span className='name'>{item.applicant.firstname} {item.applicant.lastname}</span>
                          <span className='review'><i class="uil uil-favorite sectTwoIcons"></i> 4.6 (9 reviews)</span>
                        </div>
                          <div className='proSenior'>
                            <h2>{item.applicationletter}</h2>
                            <span><i class="uil uil-location-point sectTwoIcons"></i> {item.applicant.country}</span>
                          </div>
                        <p>
                          <b>Bio</b>: {item.applicant.about}
                        </p>
                        <p className='hireNum'> <b>Hires:</b> 0</p>
                      </div>
      
                      <div className='proSectHire'>
                        <h2>₦{item.amount}</h2>
                        <div className='projectSec2Btns'>
      
                          <button className ="secTwoView" onClick={() => handleMoreClick(index)}>Hire User</button>
                        </div>
                      </div>
                    </div>
                    <hr />  
                  </>
                
                ))}
              </>
              </>)}

              <>
              {!project.bids || project.bids.length === 0 && (
                <>
                <section className='projectSecThree'>
                  <img src={sectTwoImage} alt="" />
                  <h3>No Application yet.</h3>
                  <p>Please go to your applications section, and select <br /> a preferred candidate for your project</p>
                </section>
                </>
              )}
              </>
        </section>


        <ProjectHireModal isOpen={modal} onClose={hideModal} selectedApplication = {selectedApplication}/>
      </section>
    </div>
  )
}

export default ProjectDescSec2