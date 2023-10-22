import React, { useState, useEffect } from 'react'
import './dashProject.css'
import {Placeholder, Segment } from 'semantic-ui-react'

import { Link } from 'react-router-dom'
const DashProject = () => {

    const [fetchProject, setFetchProject] = useState([])

    let url = 'https://bildingapi.onrender.com/api/projects/user'
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
            setIsLoading(false)

            console.log(data)
        }catch(e){
            console.log("There is an error fetching project Data")
            setIsLoading(false)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])


    const [searchQuery, setSearchQuery] = useState('')
    let searchUrl = `https://bildingapi.onrender.com/api/projects?search=${searchQuery}`

    const [isLoading, setIsLoading] = useState(false)


    const fetchDataSearch =  async (e) =>{
      e.preventDefault();
      setIsLoading(true)
      try{
        const response = await fetch(searchUrl,{
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
      // if (searchQuery) {
      //   fetchDataSearch();
      // }

      fetchData()
    }, [searchQuery]);


  return (
    <div>
        <section className='dashProjectSectionGen'>
            <h2 className='myProj'>My Projects</h2>
            <form action="" className='workerDashForm' >
                <input type="text" 
                  placeholder='Search for projects . . .' 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />

                {/* <span onClick={fetchData}>Search</span> */}
                <button type='submit' onClick={fetchDataSearch}>{isLoading ? "Searching . . " : 'Search'} </button>
            </form>

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
                        <hr />
                    </ul>

                ))}
                </>) 
                : (

                    <h4 className='noAvail'>No Project available !!!</h4>
                )}


                {isLoading === true && 
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
                }
            </div>



        </section>
    </div>
  )
}

export default DashProject