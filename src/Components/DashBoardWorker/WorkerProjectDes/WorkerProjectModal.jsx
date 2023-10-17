import React from 'react'
import { Link } from 'react-router-dom'

import proImage from './newvec.png'

import newvecImg from './newvec.png'

import { useParams } from 'react-router-dom'
const WorkerProjectModal = ({isOpen, onClose, selectedData}) => {

    const { id } = useParams()

    if (!isOpen) return null;
  return (
    <div className='projectHireSectionDiv'>
        <section className='projectHireSection'>
            <i class="uil uil-multiply myprojIcon" onClick={onClose}></i>

            <div className='hireSecDiv'>
                <h2>₦{selectedData.budget}</h2>
                {console.log(selectedData)}
                <Link to={`/dashboard/apply/${selectedData.id}`}><button>Apply</button></Link>
            </div>

            <div className='projectPro'>
                <img src={newvecImg} alt="" />
                <div className='projectProSub'>
                    <p>Peter Obi</p> 
                    <span>4.6 (9 reviews)</span>
                </div>
            </div>

            <div className='projectProAddress'>
                <span>{selectedData.location}</span>
            </div>

            <div className='projectLetter'>
                <h1>{selectedData.title}</h1>
                <p>
                    {selectedData.description}
                </p>

                <hr />
            </div>


            <div className='projectLetter'>
                <h1>Project details</h1>
                <p><b>Project location:</b></p>
                <p>
                    {selectedData.location}
                </p>

                <hr />
            </div>

            <div className='projectLetter'>
                <b>Project Images: </b>
                <div className='proDevImage'>
              <a href={selectedData.image1} download={selectedData.image1}>Click to preview project Image 1 <i class="uil uil-arrow-up-right"></i></a>
              <a href={selectedData.image2} download={selectedData.image2}>Click to preview project Image 2 <i class="uil uil-arrow-up-right"></i></a>
            </div>
            </div>

            <div className='projectLetter'>
                <h1>Reviews</h1>
                <div className='projectLetterEach'>
                    <img src={proImage} alt="" />
                    <div>
                        <span>Chevron NIgeria</span>
                        <h3>Electrician</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur. Nibh aenean sit nulla vitae 
                            cursus dignissim vel nisl tincidunt. 
                            Ipsum ipsum pellentesque tempor diam lobortis. Ut nisl feugiat...
                        </p>
                    </div>
                </div>
                <hr />



                <div className='projectLetterEach'>
                    <img src={proImage} alt="" />
                    <div>
                        <span>Chevron NIgeria</span>
                        <h3>Electrician</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur. Nibh aenean sit nulla vitae 
                            cursus dignissim vel nisl tincidunt. 
                            Ipsum ipsum pellentesque tempor diam lobortis. Ut nisl feugiat...
                        </p>
                    </div>
                </div>
                <hr />



                <div className='projectLetterEach'>
                    <img src={proImage} alt="" />
                    <div>
                        <span>Chevron NIgeria</span>
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

export default WorkerProjectModal