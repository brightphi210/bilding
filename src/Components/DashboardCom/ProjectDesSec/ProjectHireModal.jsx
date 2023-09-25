import React from 'react'
import './projectHire.css'

import proImage from './newvec.png'

import newvecImg from './newvec.png'
const ProjectHireModal = ({isOpen, onClose,}) => {

    if (!isOpen) return null;
  return (
    <div className='projectHireSectionDiv'>
        <section className='projectHireSection'>
            <i class="uil uil-multiply myprojIcon" onClick={onClose}></i>

            <div className='hireSecDiv'>
                <h2>₦1,600,000</h2>
                <button>Hire</button>
            </div>

            <div className='projectPro'>
                <img src={newvecImg} alt="" />
                <div className='projectProSub'>
                    <p>Peter Obi</p> 
                    <span>4.6 (9 reviews)</span>
                </div>
            </div>

            <div className='projectProAddress'>
                <p>Senior Electrical Engineer</p>
                <span>Lagos street, Lekki, Lagos, Nigeria</span>
            </div>

            <div className='projectLetter'>
                <h1>Appplication letter</h1>
                <p><b>Hello Client,</b></p>
                <p>
                    Lorem ipsum dolor sit amet consectetur. 
                    Nibh aenean sit nulla vitae cursus dignissim vel nisl tincidunt. 
                    Ipsum ipsum pellentesque tempor diam lobortis. Ut nisl feugiat Lorem 
                    ipsum dolor sit amet consectetur. Nibh aenean sit nulla vitae cursus 
                    dignissim vel nisl tincidunt. Ipsum ipsum pellentesque tempor diam lobortis. 
                    Ut nisl feugiatLorem ipsum dolor sit amet consectetur. Nibh aenean sit nulla 
                </p>
                <p><b>Peter.</b></p>

                <hr />
            </div>


            <div className='projectLetter'>
                <h1>About Me</h1>
                <p><b>Hires:</b> 20</p>
                <p>
                    Lorem ipsum dolor sit amet consectetur. 
                    Nibh aenean sit nulla vitae cursus dignissim vel nisl tincidunt. 
                    Ipsum ipsum pellentesque tempor diam lobortis. Ut nisl feugiat Lorem 
                    ipsum dolor sit amet consectetur. Nibh aenean sit nulla vitae cursus 
                </p>

                <hr />
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

export default ProjectHireModal