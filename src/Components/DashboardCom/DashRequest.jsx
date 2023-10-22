import React from 'react'
import { useState, useEffect } from 'react'
import jwt_decode from "jwt-decode"
import { Link } from 'react-router-dom'

import {Placeholder, Segment } from 'semantic-ui-react'
const DashRequest = () => {

    const [request, setRequest] = useState([])
    // const [isLoading, setIsLoading] = useState(true)
    const url = 'https://bildingapi.onrender.com/api/requests/user'
    

    const token = localStorage.getItem('authToken');


    let newToken = jwt_decode(token)

    const fetchData = async () =>{
        try {
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                  "Authorization": `Bearer ${token}`
                },

            })
            const data = await response.json()
            setIsLoading(false)
            setRequest(data)
            console.log(data)
        } catch (error) {
            console.log(error)
            setIsLoading(false)
        }
    }


    // useEffect(() =>{
    //     fetchData()
    // }, [])



    const [searchQuery, setSearchQuery] = useState('')
    let searchUrl = `https://bildingapi.onrender.com/api/requests?search=${searchQuery}`

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
        setRequest(data)
        setIsLoading(false)


      }catch(e){
        console.log("There was an error fetching the data!!")
      }
    }

    useEffect(() => {
      if (searchQuery) {
        fetchDataSearch();
      }

      fetchData()
    }, []);

  return (
    <div>
        <section className='dashProjectSectionGen'>
            <h2 className='myProj'>My Request</h2>

            <form action="" className='workerDashForm' >
                <input type="text" 
                  placeholder='Search for projects . . .' 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />

                {/* <span onClick={fetchData}>Search</span> */}
                <button type='submit' onClick={fetchDataSearch}>{isLoading ? "..." : 'Search'} </button>
            </form>

            <div className='dashProjectSectionDiv'>
                <ul className='dashProjectONE'>
                    <li>ALL</li>
                    <li>Active</li>
                    <li>Complete</li>
                    <li>drafts</li>
                    <li>1 - 3 of 3</li>
                </ul>
                <hr />


                {request.length > 0 ? (
                    <>
                        {request.map((eachRequest)=>(
                            <>
                                <ul className='dashProjectTWO'>
                                    <div>
                                        <li>{eachRequest.title}</li>
                                        <span>Created {eachRequest.time}.</span>
                                    </div>

                                    <div className='appHire'>
                                        <p>Applications</p>
                                        <span>0</span>
                                    </div>

                                    <div className='appHire'>
                                        <p>Hired</p>
                                        <span>15</span>
                                    </div>
                                    <Link to={`/dashboard/requests/description/${eachRequest.id}`}><button className='view'>View </button></Link>
                                </ul>
                                <hr />
                            </>
                        ))}
                    </>
                ) : 
                (
                    <h4 className='noAvail'>No Request available yet !!!</h4>

                )}


                {isLoading === true && (
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
        </section>
    </div>
  )
}

export default DashRequest