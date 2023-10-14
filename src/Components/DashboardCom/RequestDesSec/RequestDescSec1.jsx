import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'


const RequestDescSec1 = () => {

    const { id } = useParams();
    const [request, setRequest] = useState([])
    const [projectTitle, setProjectTitle] = useState([])
  
    const [myImage, setMyImage] = useState([])
    let url = `https://bildingapi.onrender.com/api/requests/${id}`
    
  
    const token = localStorage.getItem('authToken');
    
    const fetchData = async () => {
  
      try{
        const response = await fetch(url, {
          method: 'GET',
          headers: {
            "Authorization": `Bearer ${token}`
          },
  
        })
  
  
        const data = await response.json()
        setRequest(data)
  
      }catch(er){
        console.log("Error fetching project data !!! ")
      }
    }
  
    useEffect(()=>{
      fetchData()
    }, [])
  return (
    <div>

      {request ? 

        <section className='proDesOneDiv'>
          <div>
            <div className='proDesOneFlex'> 
              <div className='proDesOneFlexOne'>
                <div className='proDesOneFlexTwo'>
                  <h4>{request.title}</h4>
                  <h4>₦{request.budget}</h4>
                </div>

                <div className='proSubGrid'>
                  <div className='proSubGrid1'>
                    <p><b>Location:</b> {request.location}</p>
                    <p><b>Category:</b> {request.categories}.</p>
                    <p><b>Items:</b> 5</p>
                  </div>

                  <div className='proSubGrid2'>
                    <p><b>Scope:</b> Large</p>
                    <p><b>Duration: </b> {request.duration} months</p>
                    <p><b>Experience: </b> {request.experience}</p>
                  </div>
                </div>
              </div>
            </div>

            <hr />
          </div>

          <div className='proDesOneFlexThree'>
            <h3>Request description:</h3>
            <p>
              {request.description}
            </p>
            <hr />
          </div>

          <div className='proDescFive'>
          <h3>Request images:</h3>
            <div className='proDevImage'>
              <img src={request.image1} alt="" />
              <img src={request.image2} alt="" />
            </div>
          </div>

        </section>

      : null }

      

    </div>
  )
}

export default RequestDescSec1