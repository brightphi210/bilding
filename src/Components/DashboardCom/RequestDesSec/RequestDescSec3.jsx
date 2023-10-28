import React from 'react'
// import './projectDescSec123.css'
import { useState, useEffect } from 'react'
import VectorImage from './newvec.png'
import sectTwoImage from './ggh.png'



const ProjectDescSec3 = () => {

  const [hires, setHires] = useState([])
  const [isLoading, setIsLoading] = useState(true)


  const url = 'https://bildingapi.onrender.com/api/applies/'
  const token = localStorage.getItem('authToken');

  const fetcHire = async () => {
    try {
      const response = await fetch(url, {
        method: "GET",
        headers : {
          "Authorization": `Bearer ${token}`,
        }

      })
      const data = await response.json()
      setHires(data)


    } catch (error) {
      console.log("There is an error fetching hired workers")
    }
  }


  useEffect(() =>{
    fetcHire()
  }, [])

  console.log(hires)
  return (
    <div>
      {hires.length === 0 ? (
        <section className='projectSecThree'>
        <img src={sectTwoImage} alt="" />
        <h2>No hire yet.</h2>
        <p>Please go to your applications section, and select <br /> a preferred candidate for your project</p>
      </section>
      ):(
        <section>
        {hires.map((hire)=>(
          <>
            {hire.accepted === true ? 
            (<>
              <div className='projectSectionTwo'>

              <div className='proSeniorDiv'>
                  <img src={VectorImage} alt="" />
              </div>
              <div className=''>
                <div>
                  <span><b>{hire.store.owner.firstname} {hire.store.owner.lastname}</b></span>
                  <span className='review'><i class="uil uil-favorite sectTwoIcons"></i> 4.6 (9 reviews)</span>
                </div>
                  <div className='proSenior'>
                    <h2>{hire.store.owner.profession}</h2>
                    <span><i class="uil uil-location-point sectTwoIcons"></i> {hire.store.owner.country}</span>
                  </div>
                <p>
                  {hire.store.owner.about}
                </p>
              </div>

              <div className='proSectHire'>
                <h2>{hire.amount}</h2>
                <div className='projectSec2BtnsNew'>
                  <button className='secTwoView'>View</button>
                  <button className='secTwoHire'>Favourite</button>
                </div>
              </div>
              </div>
              <hr />
            </>) :
            
            (<>
              <section className='projectSecThree'>
                <img src={sectTwoImage} alt="" />
                <h2>No hire yet.</h2>
                <p>Please go to your applications section, and select <br /> a preferred candidate for your project</p>
              </section>
            </>)
          }
          </>
        ))}

    </section>
      )}



    </div>
  )
}

export default ProjectDescSec3