import React, { useState, useEffect } from 'react'
import './dashProject.css'

import { Link } from 'react-router-dom'
const DashProject = () => {

    const [fetchProject, setFetchProject] = useState([])

    let url = 'https://bildingapi.onrender.com/api/projects'
    const token = localStorage.getItem('authToken');


    const fetchData = async () => {
        try{

            const response = await fetch (url, {
                method : 'GET',
                headers : {
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
            <h2>My Projects</h2>

            <div className='dashProjectSectionDiv'>
                <ul className='dashProjectONE'>
                    <li>ALL</li>
                    <li>Active</li>
                    <li>Complete</li>
                    <li>drafts</li>
                    <li>1 - 3 of 3</li>
                </ul>
                <hr />


                {fetchProject.map((project)=>(
                <ul className='dashProjectTWO'>
                        <div>
                            <li>{project.title}</li>
                            <span>Created: <b>{project.time}</b></span>
                        </div>
                    


                    <div className='appHire'>
                        <p>Applications : </p>
                        <span>0</span>
                    </div>

                    <div className='appHire'>
                        <p>Hired : </p>
                        <span>15</span>
                    </div>
                    <Link to={`/dashboard/projects/description/${project.id}`}><button className='view'>View </button></Link>
                </ul>

                ))}
                <hr />
            </div>
        </section>
    </div>
  )
}

export default DashProject