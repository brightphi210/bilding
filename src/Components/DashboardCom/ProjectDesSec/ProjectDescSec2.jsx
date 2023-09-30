import React, {useState} from 'react'
import './projectDescSec123.css'
import VectorImage from './newvec.png'
import ProjectHireModal from './ProjectHireModal'
import ProjectHireModal2 from './ProjectHireModal2'

const ProjectDescSec2 = () => {

  const [modal, setModal] = useState(false)
  const [modal2, setModal2] = useState(false)

  const showModal = ()=>{
      setModal(true)
  }

  const hideModal = ()=>{
      setModal(false)
  }


  const showModal2 = ()=>{
    setModal2(true)
  }

  const hideModal2 = ()=>{
    setModal2(false)
  }

  
  return (
    <div>
      <section className='projectSectionTwoDiv'>
        <section>
          <div className='projectSectionTwo'>

            <div className='proSeniorDiv'>
                <img src={VectorImage} alt="" />
            </div>
            <div className=''>
              <div>
                <span><b>Peter Obi</b></span>
                <span className='review'><i class="uil uil-favorite sectTwoIcons"></i> 4.6 (9 reviews)</span>
              </div>
                <div className='proSenior'>
                  <h2>Senior Electrical Engineer</h2>
                  <span><i class="uil uil-location-point sectTwoIcons"></i> Lagos street, Lekki, Lagos, Nigeria</span>
                </div>
              <p>
                Lorem ipsum dolor sit amet consectetur. Nibh aenean sit nulla vitae cursus dignissim 
                vel nisl tincidunt. Ipsum ipsum pellentesque tempor diam lobortis. Ut nisl feugiat...
              </p>
              <p className='hireNum'> <b>Hires:</b> 10</p>
            </div>

            <div className='proSectHire'>
              <h2>₦1,600,000</h2>
              <div className='projectSec2Btns'>
                <button className='secTwoView' onClick={showModal}>View</button>
                <button className='secTwoHire' onClick={showModal2}>Hire</button>
              </div>
            </div>
          </div>

            <hr />
        </section>


        <section>
          <div className='projectSectionTwo'>

            <div className='proSeniorDiv'>
                <img src={VectorImage} alt="" />
            </div>
            <div className=''>
              <div>
                <span><b>Peter Obi</b></span>
                <span className='review'><i class="uil uil-favorite sectTwoIcons"></i> 4.6 (9 reviews)</span>
              </div>
                <div className='proSenior'>
                  <h2>Senior Electrical Engineer</h2>
                  <span><i class="uil uil-location-point sectTwoIcons"></i> Lagos street, Lekki, Lagos, Nigeria</span>
                </div>
              <p>
                Lorem ipsum dolor sit amet consectetur. Nibh aenean sit nulla vitae cursus dignissim 
                vel nisl tincidunt. Ipsum ipsum pellentesque tempor diam lobortis. Ut nisl feugiat...
              </p>
              <p className='hireNum'> <b>Hires:</b> 10</p>
            </div>

            <div className='proSectHire'>
              <h2>₦1,600,000</h2>
              <div className='projectSec2Btns'>
                <button className='secTwoView'>View</button>
                <button className='secTwoHire'>Hire</button>
              </div>
            </div>
          </div>

            <hr />
        </section>



        <section>
          <div className='projectSectionTwo'>

            <div className='proSeniorDiv'>
                <img src={VectorImage} alt="" />
            </div>
            <div className=''>
              <div>
                <span><b>Peter Obi</b></span>
                <span className='review'><i class="uil uil-favorite sectTwoIcons"></i> 4.6 (9 reviews)</span>
              </div>
                <div className='proSenior'>
                  <h2>Senior Electrical Engineer</h2>
                  <span><i class="uil uil-location-point sectTwoIcons"></i> Lagos street, Lekki, Lagos, Nigeria</span>
                </div>
              <p>
                Lorem ipsum dolor sit amet consectetur. Nibh aenean sit nulla vitae cursus dignissim 
                vel nisl tincidunt. Ipsum ipsum pellentesque tempor diam lobortis. Ut nisl feugiat...
              </p>
              <p className='hireNum'> <b>Hires:</b> 10</p>
            </div>

            <div className='proSectHire'>
              <h2>₦1,600,000</h2>
              <div className='projectSec2Btns'>
                <button className='secTwoView'>View</button>
                <button className='secTwoHire'>Hire</button>
              </div>
            </div>
          </div>

            <hr />
        </section>

        <ProjectHireModal isOpen={modal} onClose={hideModal}/>
        <ProjectHireModal2 isOpen2={modal2} onClose2={hideModal2}/>
      </section>
    </div>
  )
}

export default ProjectDescSec2