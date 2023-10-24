import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {Placeholder, Segment } from 'semantic-ui-react'



const SupplierDashApplica = () => {
    const [modal, setModal] = useState(false)
    const showModal = ()=>{
        setModal(true)
    }
  
    const hideModal = ()=>{
        setModal(false)
    }



    const [selectedData, setSelectedData] = useState([])
    const handleMoreClick = (project) => {
        setSelectedData(project);
        showModal(true);
    };



    const [searchQuery, setSearchQuery] = useState('')
    let searchUrl2 = `https://bildingapi.onrender.com/api/projects?search=${searchQuery}`

    const [isLoading, setIsLoading] = useState(false)


    const fetchDataQueries =  async (e) =>{
      e.preventDefault();
      setIsLoading(true)
      try{
        const response = await fetch(searchUrl2,{
          method: 'GET',
          headers: {
            // 'Content-Type': 'application/json',
            "Authorization": `Bearer ${token}`
          },
  
        })
        const data = await response.json();
        setFetchProject(data)
        setIsLoading(false)
  
  
      }catch(e){
        console.log("There was an error fetching the data!!")
      }
    }
  
    useEffect(() => {
      if (searchQuery) {
          fetchDataQueries();
      }

      fetchData()
    }, []);




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


  return (
    <section className='dashProjectSectionGen'>
    <h2 className='myProj'>My Applications</h2>

    <form action="" className='workerDashForm' >
        <input type="text" 
          placeholder='Search for projects . . .' 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        {/* <span onClick={fetchData}>Search</span> */}
        <button type='submit' >{isLoading ? ". . ." : 'Search'} </button>
    </form>

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
                    <p>{project.project.categories} *</p>
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
    {/* <WorkerApplicationDes isOpen={modal} onClose={hideModal} selectedData = {selectedData}/> */}
</section>
  )
}

export default SupplierDashApplica