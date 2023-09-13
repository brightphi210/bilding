import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


import './sectionFive.css'

import proImg1 from './Images/1.webp'
import proImg2 from './Images/2.webp'
import proImg3 from './Images/3.webp'
import proImg4 from './Images/4.webp'
const SectionFive = () => {
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1,
          slidesToSlide: 1
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1
        }
      };
  return (
    <div>
        <section className='sectionFive'>
            <div className='sectionFiveText'>
                <h2>Testimonials</h2>
                <p>Hear from some of our users.</p>
            </div>

            <Carousel
                responsive={responsive}
                swipeable={true}
                draggable={true}
                showDots={true}
                itemClass="carousel-item-padding-60-px"
                ssr={true}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={4000}
                keyBoardControl={true}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                dotListClass="custom-dot-list-style"
                // className='caroselDivGen'
            >
            <div className='caroselDiv'> 
                <img src={proImg1} alt="" />
                <p>"With Bilding, finding reliable suppliers and skilled labor has never been easier. <br /> It's a game-changer in the industry!"
                </p>
                <h3>- James, Construction Contractor</h3>
            </div>

            <div className='caroselDiv'> 
                <img src={proImg2} alt="" />
                <p>"With Bilding, finding reliable suppliers and skilled labor has never been easier. <br /> It's a game-changer in the industry!"
                </p>
                <h3>- James, Construction Contractor</h3>
            </div>


            <div className='caroselDiv'> 
                <img src={proImg3} alt="" />
                <p>"With Bilding, finding reliable suppliers and skilled labor has never been easier. <br /> It's a game-changer in the industry!"
                </p>
                <h3>- James, Construction Contractor</h3>
            </div>


            <div className='caroselDiv'> 
                <img src={proImg4} alt="" />
                <p>"With Bilding, finding reliable suppliers and skilled labor has never been easier. <br /> It's a game-changer in the industry!"
                </p>
                <h3>- James, Construction Contractor</h3>
            </div>
            </Carousel>
        </section>
    </div>
  )
}

export default SectionFive