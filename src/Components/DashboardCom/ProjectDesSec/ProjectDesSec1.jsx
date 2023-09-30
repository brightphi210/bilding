import React from 'react'
import './projectDescSec123.css'
import { useState, useEffect } from 'react'


const ProjectDesSec1 = () => {
  const [projects, setProjects] = useState([])
  let url = 'https://bildingapi.onrender.com/api/projects'
  const token = localStorage.getItem('authToken');
  
  const fetccData = async () => {
    // e.preventDefault();
    console.log(token)


    try{
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          // 'Content-Type': 'application/json',
          "Authorization": `Bearer ${token}`
        },

      })


      const data = await response.json()
      setProjects(data)

      console.log(data)


    }catch(er){
      console.log("Error fetching project data !!! ")
    }
  }


  useEffect(()=>{
    fetccData()
  }, [])
  return (
    <div>

      {projects.map((project) =>(

      
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
          <h3>Request description:</h3>
          <p>
            {project.description}
          </p>
          <hr />
        </div>

        <div className='proDescFive'>
          <h3>Request images:</h3>
          <img src={project.image} alt="" />
          <p>new_site_full.jpg</p>
          <p>new_site_side_shot.jpg</p>
          <p>neighbors_house_design_inspiration.jpg</p>
        </div>

      </section>
      ))}
    </div>
  )
}

export default ProjectDesSec1