
import React from 'react'
import { useState, useEffect } from 'react'

import VectorImage from './newvec.png'
import sectTwoImage from './ggh.png'

const RequestDescSec2 = () => {

  const [modal, setModal] = useState(false)
  const [modal2, setModal2] = useState(false)

  const token = localStorage.getItem('authToken');

  const [requestApplication, setRequestApplication] = useState([])
  const [selectedApplication, setSelectedApplication] = useState([])

  const url = 'https://bildingapi.onrender.com/api/applies/'

  const showModal = ()=>{
    setModal(true)
  }

  const hideModal = ()=>{
      setModal(false)
  }

  const fetchData = async () => {
    try {
      const res = await fetch(url, {
        method: 'GET',
        headers: {
          "Authorization": `Bearer ${token}`,
        }

      })
      const data = await res.json()
      setRequestApplication(data)

    } catch (error) {
      console.error(error)
    }
  }

  useEffect(()=>{
    fetchData()
  }, [])


  const handleMoreClick = (myApplication) => {
    setSelectedApplication(myApplication);
    showModal(true);
  };


  console.log(requestApplication)
  return (
    <div>
    <section className='projectSectionTwoDiv'>
      <section>
      {requestApplication.length === 0 ? 
        (<section className='projectSecThree'>
          <img src={sectTwoImage} alt="" />
          <h3>No Application yet.</h3>
          <p>Please go to your applications section, and select <br /> a preferred candidate for your project</p>
        </section>): 
      (

        <>
        {requestApplication.map((myApplication)=>(
            <>
                <div className='projectSectionTwo' key={myApplication.store.owner.id}>
                  <div className='proSeniorDiv'>
                      <img src={VectorImage} alt="" />
                  </div>
                  <div className=''>
                    <div>
                      <span className='name'>{myApplication.store.owner.firstname} {myApplication.store.owner.lastname}</span>
                      <span className='review'><i class="uil uil-favorite sectTwoIcons"></i> 4.6 (9 reviews)</span>
                    </div>
                      <div className='proSenior'>
                        <h2>{myApplication.store.owner.profession}</h2>
                        <span><i class="uil uil-location-point sectTwoIcons"></i> {myApplication.store.owner.country}</span>
                      </div>
                    <p>
                      <b>Bio</b>: {myApplication.store.owner.about}
                    </p>
                    <p className='hireNum'> <b>Hires:</b> 0</p>
                  </div>

                  <div className='proSectHire'>
                    <h2>₦{myApplication.biditem.map((bidAmount) => (bidAmount.amount)) }</h2>
                    <div className='projectSec2Btns'>

                      <button className ="secTwoView" onClick={() => handleMoreClick(myApplication)}>Hire User</button>
                    </div>
                  </div>
                    </div>
                    <hr />  
                </>
        ))}
      </>
      )}
      </section>


      {/* <ProjectHireModal isOpen={modal} onClose={hideModal} selectedApplication = {selectedApplication}/> */}
    </section>
  </div>
  )
}

export default RequestDescSec2