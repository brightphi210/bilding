import React from 'react'
import { useState, useEffect } from 'react'
import jwt_decode from "jwt-decode"
import { Link } from 'react-router-dom'

import {Placeholder, Segment } from 'semantic-ui-react'
const DashRequest = () => {

    const [request, setRequest] = useState([])
    const [isLoading, setIsLoading] = useState(true)
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


    useEffect(() =>{
        fetchData()
    }, [])

  return (
    <div>
        <section className='dashProjectSectionGen'>
            <h2 className='myProj'>My Request</h2>

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