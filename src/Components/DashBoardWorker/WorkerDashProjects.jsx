
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const WorkerDashProjects = () => {

    const [fetchProject, setFetchProject] = useState([])

    let url = 'https://bildingapi.onrender.com/api/projects'
    // let url = 'https://bildingapi.onrender.com/api/projects'
    const token = localStorage.getItem('authToken');


    const fetchData = async () => {
        try{

            const response = await fetch (url, {
                method : 'GET',
                headers : {
                    // 'Content-Type': 'application/json',
                    "Authorization": `Bearer ${token}`,
                }
            })

            const data = await response.json()
            setFetchProject(data)

            console.log(data)
        }catch(e){
            console.log("There is an error fetching project Data")
        }
    }

    useEffect(() => {
        fetchData()
    }, [])


  return (
    <div>
        <section className='dashProjectSectionGen'>
            <h2>Projects</h2>

            <div className='dashProjectSectionDiv'>
                <ul className='dashProjectONE'>
                    <li>ALL</li>
                    <li>Active</li>
                    <li>Complete</li>
                    <li>drafts</li>
                    <li>1 - 3 of 3</li>
                </ul>
                {/* <hr /> */}


                {fetchProject.map((project)=>(
                <ul className='dashProjectTWO'>
                    <div>
                        <li>{project.title}</li>
                        <span>Created: <b>{project.time}</b></span>
                    </div>
                    

                    <div className='appBtn'>
                        <Link to={`/dashboard/projects/description/${project.id}`}><button className='view'>View</button></Link>
                        <Link to={`/dashboard/projects/description/${project.id}`}><button className='view'>Completed</button></Link>
                    </div>
                </ul>

                ))}
                {/* <hr /> */}
            </div>
        </section>
    </div>
  )
}

export default WorkerDashProjects