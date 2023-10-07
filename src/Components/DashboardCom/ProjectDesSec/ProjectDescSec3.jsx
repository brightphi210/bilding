import React from 'react'
import './projectDescSec123.css'
import VectorImage from './newvec.png'
import sectTwoImage from './ggh.png'

const ProjectDescSec3 = () => {
  return (
    <div>
      {/* <section className='projectSecThree'>
        <img src={sectTwoImage} alt="" />
        <h2>No hire yet.</h2>
        <p>Please go to your applications section, and select <br /> a preferred candidate for your project</p>
      </section> */}


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
            </div>

            <div className='proSectHire'>
              <h2>₦1,600,000</h2>
              <div className='projectSec2BtnsNew'>
                <button className='secTwoView'>View</button>
                <button className='secTwoHire'>Add to Favourite</button>
              </div>
            </div>
          </div>

            <hr />
      </section>
    </div>
  )
}

export default ProjectDescSec3