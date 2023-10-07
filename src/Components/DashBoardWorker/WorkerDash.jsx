import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import VectorImage from './newvec.png'

import './WorkerDash.css'

const WorkerDash = () => {

    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1,
          slidesToSlide: 1
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 1
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1
        }
      };
  return (
    <div>
        <section className='dashSectionOne'>
            <Carousel
                responsive={responsive}
                swipeable={true}
                draggable={true}
                showDots={true}
                itemClass="carousel-item-padding-60-px"
                ssr={true}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={50000}
                keyBoardControl={true}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile" ]}
                dotListClass="custom-dot-list-style"
                >
                <div className='dashCaroselDiv'> 
                <div>
                    <h2>New update for you!</h2>
                    <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> odit vel rerum,
                    Commodi voluptatibus.
                    </p>
                    <button>Learn more</button>
                </div>
                </div>
            </Carousel>


            <form action="" className='workerDashForm'>
                <input type="text" placeholder='Search for projects . . .' />
                <button>Search</button>
            </form>


            <section className='workerDashSectionTwo'>
                <h2>Projects for you</h2>
                <div className='workerDashDiv'>

                    <section>
                        <div className='projectSectionTwo projectSectionTwoNew'>

                            <div className='proSeniorDiv'>
                                <img src={VectorImage} alt="" />
                            </div>
                            <div className=''>
                                <div>
                                    <span><b>Chevron N..</b></span>
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

                                <span className='proSeniorDivCategory'>Electrical Engineering</span>
                            </div>

                            <div className='proSectHire'>
                                <h2>₦1,600,000</h2>
                            </div>
                        </div>

                        <hr className='hrt'/>
                    </section>

                    <section>
                    <div className='projectSectionTwo projectSectionTwoNew'>

                        <div className='proSeniorDiv'>
                            <img src={VectorImage} alt="" />
                        </div>
                        <div className=''>
                            <div>
                                <span><b>Chevron N..</b></span>
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

                            <span className='proSeniorDivCategory'>Electrical Engineering</span>
                        </div>

                        <div className='proSectHire'>
                            <h2>₦1,600,000</h2>
                        </div>
                    </div>

                    <hr className='hrt'/>
                </section>
                </div>
            </section>
        </section>
        
    </div>
  )
}

export default WorkerDash