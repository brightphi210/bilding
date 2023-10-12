import React, {useState, useEffect} from 'react'
import './projectHire.css'

import proImage from './newvec.png'

import newvecImg from './newvec.png'
const ProjectHireModal = ({isOpen, onClose, selectedApplication}) => {

    if (!isOpen) return null;
  return (
    
    <div className='projectHireSectionDiv'>
        <section className='projectHireSection'>
            <i class="uil uil-multiply myprojIcon" onClick={onClose}></i>
            <>
            <div className='hireSecDiv'>
                <h2>₦{selectedApplication.amount}</h2>
                <button>Hire</button>
            </div>

            <div className='projectPro'>
                <img src={newvecImg} alt="" />
                <div className='projectProSub'>
                    <p>{selectedApplication.applicant.firstname} {selectedApplication.applicant.lastname}</p> 
                    <span>4.6 (9 reviews)</span>
                </div>
            </div>

            <div className='projectProAddress'>
                <p>{selectedApplication.applicant.profession}</p>
                <span>{selectedApplication.applicant.location}</span>
            </div>

            <div className='projectLetter'>
                <h1>Appplication letter</h1>
                <p>
                    {selectedApplication.applicationletter}
                </p>
                

                <hr />
            </div>


            <div className='projectLetter'>
                <h1>About Me</h1>
                <p><b>Hires:</b> 20</p>
                <p>
                    {selectedApplication.applicant.about}
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
    </div>
  )
}

export default ProjectHireModal