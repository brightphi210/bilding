import React, { useState } from 'react'


import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import './dashHome.css'
import BuilerModal from '../Bulider/BuilerModal';

import emptyImg from './Images/empty.png'

const Home = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

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
                  Commodi voluptatibus.
                </p>
                <button>Learn more</button>
              </div>
            </div>
        </Carousel>

        <div className='dashProjectNumDiv'>
          <div className='dashProjectNum'>
            <h2>0</h2>
            <p>Projects</p>
          </div>

          <div className='dashProjectNum'>
            <h2>0</h2>
            <p>Requests</p>
          </div>

          <div className='dashProjectNum'>
            <h2>0</h2>
            <p>Skilled labor</p>
          </div>

          <div className='dashProjectNum'>
            <h2>0</h2>
            <p>Suppliers</p>
          </div>
        </div>

        <div className='dashEmptyDiv'>
          <img src={emptyImg} alt='empty' />
          <h2>It’s empty here.</h2>

          <p>
            Create your first project or request 
            in order to get the required help needed  <br />
            for your construction job.
          </p>

          <button onClick={openModal}>Create New</button>
        </div>

        <BuilerModal isOpen={isModalOpen} onClose={closeModal}></BuilerModal>
      </section>
    </div>
  )
}

export default Home