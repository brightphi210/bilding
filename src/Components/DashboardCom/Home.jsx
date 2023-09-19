import React from 'react'


import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


import './dashHome.css'

import emptyImg from './Images/empty.png'

const Home = () => {

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
            removeArrowOnDeviceType={["tablet", "mobile"]}
            dotListClass="custom-dot-list-style"
            >
            <div className='dashCaroselDiv'> 
              <div>
                <h2>New update for you!</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> odit vel rerum,
                  Commodi voluptatibus suscipit voluptatum dolorum, eius aperiam iure.
                </p>
                <button>Learn more</button>
              </div>
            </div>
        </Carousel>

        <div className='dashEmptyDiv'>
          <img src={emptyImg} alt='empty' />
          <h2>It’s empty here.</h2>

          <p>
            Create your first project or request 
            in order to get the required help needed  <br />
            for your construction job.
          </p>

          <button>Create New</button>
        </div>
      </section>
    </div>
  )
}

export default Home