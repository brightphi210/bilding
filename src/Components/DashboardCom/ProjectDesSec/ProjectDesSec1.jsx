import React from 'react'
import './projectDescSec123.css'
const ProjectDesSec1 = () => {
  return (
    <div>
      <section className='proDesOneDiv'>
        <div>
          <div className='proDesOneFlex'> 
            <div className='proDesOneFlexOne'>
              <div className='proDesOneFlexTwo'>
                <h4>Plumbing materials needed in Asaba</h4>
                <h4>₦2,000,000</h4>
              </div>

              <div className='proSubGrid'>
                <div className='proSubGrid1'>
                  <p><b>Location:</b> No. 5 Lagos street, Abuja bus stop, Asaba, Delta, Nigeria.</p>
                  <p><b>Category:</b> Plumbing.</p>
                  <p><b>Items:</b> 5</p>
                </div>

                <div className='proSubGrid2'>
                  <p><b>Scope:</b> Large</p>
                  <p><b>Duration: </b> 3-6 months</p>
                  <p><b>Experience: </b> Intermediate</p>
                </div>
              </div>
            </div>
          </div>

          <hr />
        </div>

        <div className='proDesOneFlexThree'>
          <h3>Request description:</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, 
            praesentium? Quam dolores cum recusandae voluptatibus nemo doloribus maiores fugiat. 
            Sint, minus. Nobis, qui eum nemo dicta quibusdam error labore numquam!
          </p>
          <hr />
        </div>


        {/* <div className='proDesOneFour'>
          <h3>Items:</h3>
          <div className='proDesOneFlexFourMain'>
            <div className='proDesOneFlexFour'>
              <p><b>Item title One:</b></p>
              <p><b>Amout</b>: ₦2,000,000</p>
            </div>

            <div className='proDesOneFlexFour'>
              <p><b>Item title One:</b></p>
              <p><b>Amout</b>: ₦2,000,000</p>
            </div>

            <div className='proDesOneFlexFour'>
              <p><b>Item title One:</b></p>
              <p><b>Amout</b>: ₦2,000,000</p>
            </div>
          </div>

          <hr />
        </div> */}


        <div className='proDescFive'>
          <h3>Request images:</h3>
          <p>new_site_full.jpg</p>
          <p>new_site_side_shot.jpg</p>
          <p>neighbors_house_design_inspiration.jpg</p>
        </div>



      </section>
    </div>
  )
}

export default ProjectDesSec1