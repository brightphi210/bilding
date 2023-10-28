import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import proImage from './newvec.png'

import newvecImg from './newvec.png'

const RequestHireModal = ({isOpen, onClose, selectedApplication}) => {

    const [isLoading, setIsLoading] = useState(false)

    const navigate = useNavigate()
    //   console.log(selectedApplication)
    const token = localStorage.getItem('authToken');
    const [accepted, setAccepted] = useState (false);

    const url2 = `https://bildingapi.onrender.com/api/applies/${selectedApplication.id}`;



    const [message, setMessage] = useState('')

    const updateInput =  async (e) => {
      setIsLoading(true)
      try{
    
        const response = await fetch(url2, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            "Authorization": `Bearer ${token}`,
          },
  
  
          body: JSON.stringify({ accepted: true })
        })
  
  
        if (response.ok) {
            setAccepted(true);
            console.log('Product Successfully Created!');
            setMessage("You have Successfully Hired a worker")
            navigate('/dashboard/hire/success')
        } else {
          console.error( response.statusText, 'Product Failed to Create');
          
        }
        
      }catch(e){
        console.log("THis is an error")
      }
    }

    if (!isOpen) return null;
  return (
    
    <div className='projectHireSectionDiv'>
        <section className='projectHireSection'>
            <i class="uil uil-multiply myprojIcon" onClick={onClose}></i>
            <>
            <div className='hireSecDiv'>
                <h2>₦{selectedApplication.biditem.map((mybid)=>(mybid.amount))}</h2>
                {console.log(selectedApplication)}
                <button onClick={updateInput}>{isLoading ? ". . ." : "Hire Now"}</button>
            </div>

            <div className='projectPro'>
                <img src={newvecImg} alt="" />
                <div className='projectProSub'>
                    <p>{selectedApplication.store.owner.firstname} {selectedApplication.store.owner.lastname}</p> 
                    <span>4.6 (9 reviews)</span>
                </div>
            </div>

            <div className='projectProAddress'>
                <p>{selectedApplication.store.owner.profession}</p>
                <span>{selectedApplication.store.owner.profile.address}</span>
            </div>

            <div className='projectLetter'>
                <h1>Appplication letter</h1>
                <p>
                    {selectedApplication.letter}
                </p>
                

                <hr />
            </div>


            <div className='projectLetter'>
                <h1>About Me</h1>
                <p><b>Hires:</b> 20</p>
                <p>
                    {/* {selectedApplication.store.owner.about} */}
                </p>

                <hr />
            </div>
            </>

            <div className='projectLetter'>
                <h1>Reviews</h1>
                <div className='projectLetterEach'>
                    <img src={proImage} alt="" />
                    <div>
                        <span>Chevron</span>
                        <h3>Electrician</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur. Nibh aenean sit nulla vitae 
                            cursus dignissim vel nisl tincidunt. 
                            Ipsum ipsum pellentesque tempor diam lobortis. Ut nisl feugiat...
                        </p>
                    </div>
                </div>
                <hr />
            </div>
        </section>
        {/* <ProjectHireModal2 /> */}
    </div>
  )
}

export default RequestHireModal