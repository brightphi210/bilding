import React from 'react'
import { useState, useEffect } from 'react'
import jwt_decode from "jwt-decode"
import { Link } from 'react-router-dom'
const DashRequest = () => {

    const [request, setRequest] = useState([])
    const url = 'https://bildingapi.onrender.com/api/requests'

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
            setRequest(data)
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }


    useEffect(() =>{
        fetchData()
    }, [])

  return (
    <div>
        <section className='dashProjectSectionGen'>
            <h2>My Request</h2>

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
                                    {/* /dashboard/requests/description/:id */}
                                    <Link to={`/dashboard/requests/description/${eachRequest.id}`}><button className='view'>View </button></Link>
                                    {/* <button className='view'>View</button> */}
                                </ul>
                                <hr />
                            </>
                        ))}
                    </>
                ) : (
                    <>
                        <p>No Request Yet !!!!</p>
                    </>
                )}

                

            </div>
        </section>
    </div>
  )
}

export default DashRequest