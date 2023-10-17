import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {Placeholder, Segment } from 'semantic-ui-react'
import WorkerApplicationDes from './WorkerApplicationDes'

const WorkerDashApplica = () => {
    const [modal, setModal] = useState(false)
    const showModal = ()=>{
        setModal(true)
    }
  
    const hideModal = ()=>{
        setModal(false)
    }


    const [fetchProject, setFetchProject] = useState([])

    let url = 'https://bildingapi.onrender.com/api/users/applications'
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

    const [selectedData, setSelectedData] = useState([])
    const handleMoreClick = (project) => {
        setSelectedData(project);
        showModal(true);
    };


  return (
    <div>
        <section className='dashProjectSectionGen'>
            <h2>My Applications</h2>

            <div className='dashProjectSectionDiv'>
                <ul className='dashProjectONE'>
                    <li>ALL</li>
                    <li>Active</li>
                    <li>Complete</li>
                    <li>drafts</li>
                    <li>1 - 3 of 3</li>
                </ul>


                {fetchProject.length > 0 ? 
                (
                    <>
                    {fetchProject.map((project)=>(
                    <ul className='dashProjectTWO'>
                        <>
                        <div>
                            <li>{project.project.title}</li>
                            {console.log(project)}
                            <span>Created: <b>{project.time}</b></span>
                        </div>
                        <button onClick={() => handleMoreClick(project)} className='view'>view</button>
                        {/* <Link to={`/dashboard/projects/description/${project.id}`}><button className='view'>View</button></Link> */}
                        </>
    
                    </ul>
    
                    ))}
                    </>
                ) : 
                (
                    <>

                    <Placeholder fluid>
                        <Placeholder.Header image>
                        <Placeholder.Line />
                        <Placeholder.Line />
                        </Placeholder.Header>
                        <Placeholder.Paragraph>
                        <Placeholder.Line />
                        <Placeholder.Line />
                        <Placeholder.Line />
                        </Placeholder.Paragraph>
                    </Placeholder>
    
                    <Placeholder fluid>
                        <Placeholder.Header image>
                        <Placeholder.Line />
                        <Placeholder.Line />
                        </Placeholder.Header>
                        <Placeholder.Paragraph>
                        <Placeholder.Line />
                        <Placeholder.Line />
                        <Placeholder.Line />
                        </Placeholder.Paragraph>
                    </Placeholder>
            
                    </>
                )}
            </div>
            <WorkerApplicationDes isOpen={modal} onClose={hideModal} selectedData = {selectedData}/>
        </section>
    </div>
  )
}

export default WorkerDashApplica