import React, {useState, useEffect} from 'react'
import './projectHire.css'

import ProjectHireModal2 from './ProjectHireModal2'
import proImage from './newvec.png'

import newvecImg from './newvec.png'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
const ProjectHireModal = ({isOpen, onClose, selectedApplication, onClick}) => {


  const [isLoading, setIsLoading] = useState(false)

    const navigate = useNavigate()
    //   console.log(selectedApplication)
    const token = localStorage.getItem('authToken');
    const [accepted, setAccepted] = useState (false);
    
    const {id} = useParams()
    
    const url2 = `https://bildingapi.onrender.com/api/projects/${id}`



    const [message, setMessage] = useState('')

    const updateInput =  async (e) => {
      setIsLoading(true)
      try{
    
        const response = await fetch(url2, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            "Authorization": `Bearer ${token}`,
          },
  
  
          body: JSON.stringify({ accepted: true })
        })
  
  
        if (response.ok) {
            setAccepted(true);
            console.log('Product Successfully Created!');
            setMessage("You have Successfully Hired a worker")
            navigate('/dashboard/hire/success')
        } else {
          console.error( response.statusText, 'Product Failed to Create');
          
        }
        
      }catch(e){
        console.log("THis is an error")
      }
    }


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
    if (!isOpen) return null;

    console.log(selectedApplication)
  return (
    
    <div className='projectHireSectionDiv'>
        <section className='projectHireSection'>
            <i class="uil uil-multiply myprojIcon" onClick={onClose}></i>

            {project.bids.map((item, index) => (
              <div key={index}>
            <>
            <div className='hireSecDiv'>
                <h2>₦{item.amount}</h2>
                {/* {console.log(selectedApplication.id)} */}
                <button onClick={updateInput}>{isLoading ? ". . ." : "Hire Now"}</button>
            </div>

            <div className='projectPro'>
                <img src={newvecImg} alt="" />
                <div className='projectProSub'>
                    <p>{item.applicant.firstname} {item.applicant.lastname}</p> 
                    <span>4.6 (9 reviews)</span>
                </div>
            </div>

            <div className='projectProAddress'>
                <p>{item.applicant.profession}</p>
                <span>{item.applicant.location}</span>
            </div>

            <div className='projectLetter'>
                <h1>Appplication letter</h1>
                <p>
                    {item.applicationletter}
                </p>
                

                <hr />
            </div>


            <div className='projectLetter'>
                <h1>About Me</h1>
                <p><b>Hires:</b> 20</p>
                <p>
                    {item.applicant.about}
                </p>

                <hr />
            </div>
            </>
              </div>
            ))}


            <div className='projectLetter'>
                <h1>Reviews</h1>
                <div className='projectLetterEach'>
                    <img src={proImage} alt="" />
                    <div>
                        <span>Chevron</span>
                        <h3>Electrician</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur. Nibh aenean sit nulla vitae 
                            cursus dignissim vel nisl tincidunt. 
                            Ipsum ipsum pellentesque tempor diam lobortis. Ut nisl feugiat...
                        </p>
                    </div>
                </div>
                <hr />
            </div>
        </section>
        {/* <ProjectHireModal2 /> */}
    </div>
  )
}

export default ProjectHireModal