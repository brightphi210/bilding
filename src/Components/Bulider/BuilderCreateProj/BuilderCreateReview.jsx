import React from 'react'
import Header from '../../LoginFloder/Header'
import { useState } from 'react'
import { Link } from 'react-router-dom'

import './builderCreateReview.css'
import BuilderCreateReviewModals from './BuilderCreateReviewModals'
const BuilderCreateReview = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <Header />
        <section className='builderCreateReviewSection'>
            <div className='builderCreateReviewDivOne'>
              <h2>Review your project.</h2>
              <p>Look through your request, make edits and publish them.</p>
            </div>
            


            <div className='builderCreateReview'>
              <div className='builderCreateReviewOne'>
                <div className='reviewFlex'>
                  <h2>Project Details</h2>
                  <h4>Edit <i class="uil uil-edit"></i></h4>
                </div>
                <hr />
                <p>Project title e.g Contractor needed for high rise building</p>
                <span>Title</span>

                <p>Category e.g skilled labor, supplier</p>
                <span>Skilled labor</span>

                <p>Skills e.g contractor, engineer, electrician</p>
                <span>Skills</span>
              </div>



              <div className='builderCreateReviewOne'>
              <div className='reviewFlex'>
                  <h2>Project Scope</h2>
                  <h4>Edit <i class="uil uil-edit"></i></h4>
                </div>
                <hr />
                <p>Scope e.g large, medium, small</p>
                <span>Scope</span>

                <p>Experience e.g 3 years  expereince</p>
                <span>Experience</span>

                <p>Projected duration e.g 1-6 months, 6-12 months, over a year</p>
                <span>Duration</span>

                <p>Project location (complete address)</p>
                <span>Location</span>
              </div>


              <div className='builderCreateReviewOne'>
                <div className='reviewFlex'>
                  <h2>Project Budget</h2>
                  <h4>Edit <i class="uil uil-edit"></i></h4>
                </div>
                <hr />
                <p>Budget e.g ₦2,000,000</p>
                <span>₦2,000,000</span>

                <p>Project description</p>
                <span>
                  Lorem ipsum dolor sit amet consectetur. Nibh aenean sit nulla vitae cursus dignissim vel 
                  nisl tincidunt. Ipsum ipsum pellentesque tempor diam lobortis. Ut nisl feugiat malesuada 
                  pellentesque elementum enim convallis tempor dignissim. A quisque non varius semper 
                  non id sit ultrices. Tempus tempus aliquam et erat. Mollis praesent fermentum aliquam 
                  sed tellus neque. Ac in quam egestas risus integer. 
                </span>

                <p>Upload images to aid your project description</p>
                <h5>new_site_full.jpg</h5>
                <h5>new_site_side_shot.jpg</h5>
                <h5>neighbors_house_design_inspiration.jpg</h5>
              </div>
            </div>

            <div className='reviewBtns'>
              <Link to={'/builder/project/create'} className='back'><p >Back</p></Link>
              <button onClick={openModal}>Post Project</button>
            </div>
        </section>

        <BuilderCreateReviewModals isOpen={isModalOpen} onClose={closeModal}></BuilderCreateReviewModals>
    </div>
  )
}

export default BuilderCreateReview