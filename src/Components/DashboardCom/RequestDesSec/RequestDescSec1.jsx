import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'


const RequestDescSec1 = () => {

    const { id } = useParams();
    const [request, setRequest] = useState([])
    const [projectTitle, setProjectTitle] = useState([])
  

    console.log(request)
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



    const [item, setItem] = useState([])
    const totalAmount = item.reduce((acc, currentItem) => acc + currentItem.amount, 0);
    let urlItems = `https://bildingapi.onrender.com/api/items/${id}`
    const fetchItem = async () => {

      try{
        const response = await fetch(urlItems, {
          method: 'GET',
          headers: {
            "Authorization": `Bearer ${token}`
          },
  
        })
  
  
        const data = await response.json()
        setItem(data)
  
        console.log(data)
  
      }catch(er){
        console.log("Error fetching project data !!! ")
      }
    }
  
  
    useEffect(()=>{
      fetchItem()
    }, [])


    const formatAmount = (value) => {
      if (value === null || value === undefined) return 0; 
      return value.toLocaleString('en-US', {
        style: 'currency',
        currency: 'NGN',
        minimumFractionDigits: 2,
      });
    };



  return (
    <div>

      {request ? 

        <section className='proDesOneDiv'>
          <div>
            <div className='proDesOneFlex'> 
              <div className='proDesOneFlexOne'>
                <div className='proDesOneFlexTwo'>
                  <h4>{request.title}</h4>
                  
                  <h4>{formatAmount(totalAmount)}</h4>
                </div>

                <div className='proSubGrid'>
                  <div className='proSubGrid1'>
                    <p><b>Location:</b> {request.location}</p>
                    <p><b>Category:</b> {request.category}.</p>
                    
                    <p><b>Items:</b> {item.length}</p>
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


          <div className='itemDescMain'>
            {item.map((myItem)=>(
              <>
              <div className='itemDescFlex'>
                <p><b>Item:</b> {myItem.name}</p>
                <p>Amount: {formatAmount(myItem.amount)}</p>
                </div>
              </>
            ))}
          </div>

          <div className='proDescFive'>
          <h3>Request images:</h3>
            <div className='proDevImage'>
              <a href={request.image1}>Click to preview request Image 1 <i class="uil uil-arrow-up-right"></i></a>
              <a href={request.image2}>Click to preview request Image 2 <i class="uil uil-arrow-up-right"></i></a>
            </div>
          </div>

        </section>

      : null }

      

    </div>
  )
}

export default RequestDescSec1