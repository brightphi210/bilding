
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import WorkerProjectModal from './WorkerProjectDes/WorkerProjectModal'
import {Placeholder, Segment } from 'semantic-ui-react'
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

    const [modal, setModal] = useState(false)
    const [modal2, setModal2] = useState(false)
    const [selectedData, setSelectedData] = useState([])
  
    const showModal = ()=>{
        setModal(true)
    }
  
    const hideModal = ()=>{
        setModal(false)
    }


    const handleMoreClick = (project) => {
        setSelectedData(project);
        showModal(true);
    };



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

                {fetchProject.length > 0 ? (
                    <>
                    {fetchProject.map((project)=>(
                        <div>
                            {fetchProject.length > 0 ? (
                            <ul className='dashProjectTWO'>
                                <div>
                                    <li>{project.title}</li>
                                    <span>Created: <b>{project.time}</b></span>
                                </div>
                                
            
                                <div className='appBtn'>
                                
                                    <button className='view' onClick={() => handleMoreClick(project)}>View</button>
                                    <button className='view1'>Completed</button>
                                </div>
                            </ul>
                            ) : 
                            
                            fetchProject.length === 0 && (<h1 className='workNoShow'>There is no Project Available</h1>)}
                        </div>
                    ))}
                    </>
                ) : (
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

            <WorkerProjectModal isOpen={modal} onClose={hideModal} selectedData = {selectedData}/>
        </section>
    </div>
  )
}

export default WorkerDashProjects