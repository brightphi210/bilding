import React from 'react'
import './projectDescSec123.css'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'


const ProjectDesSec1 = () => {


  const { id } = useParams();
  const [project, setProject] = useState([])
  const [projectTitle, setProjectTitle] = useState([])

  const [myImage, setMyImage] = useState([])
  let url = `https://bildingapi.onrender.com/api/projects/${id}`

  const token = localStorage.getItem('authToken');
  
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
  return (
    <div>

      {project ? 

        <section className='proDesOneDiv'>
          <div>
            <div className='proDesOneFlex'> 
              <div className='proDesOneFlexOne'>
                <div className='proDesOneFlexTwo'>
                  <h4>{project.title}</h4>
                  <h4>₦{project.budget}</h4>
                </div>

                <div className='proSubGrid'>
                  <div className='proSubGrid1'>
                    <p><b>Location:</b> {project.location}</p>
                    <p><b>Category:</b> {project.categories}.</p>
                    <p><b>Items:</b> 5</p>
                  </div>

                  <div className='proSubGrid2'>
                    <p><b>Scope:</b> Large</p>
                    <p><b>Duration: </b> {project.duration} months</p>
                    <p><b>Experience: </b> {project.experience}</p>
                  </div>
                </div>
              </div>
            </div>

            <hr />
          </div>

          <div className='proDesOneFlexThree'>
            <h3>Project description:</h3>
            <p>
              {project.description}
            </p>
            <hr />
          </div>

          <div className='proDescFive'>
          <h3>Project images:</h3>
            <div className='proDevImage'>
              <img src={project.image1} alt="" />
              <img src={project.image2} alt="" />
            </div>
          </div>

        </section>

      : null }

      

    </div>
  )
}

export default ProjectDesSec1