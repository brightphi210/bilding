import React, { useState, useEffect } from 'react'
import jwt_decode from "jwt-decode"

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import './dashHome.css'
import BuilerModal from '../Bulider/BuilerModal';

import emptyImg from './Images/empty.png'

import { Link } from 'react-router-dom';

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

  const [projects, setProjects] = useState([])

  console.log(projects.length)

  let url = 'https://bildingapi.onrender.com/api/projects'

  // let token = localStorage.getItem('authToken') ? JSON.parse(localStorage.getItem('authToken')) : null;
  // const [authTokens, setAuthTokens] = useState(() => token)
  const token = localStorage.getItem('authToken');
  
  const fetccData = async () => {
    // e.preventDefault();
    console.log(token)


    try{
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          // 'Content-Type': 'application/json',
          "Authorization": `Bearer ${token}`
        },

      })


      const data = await response.json()
      setProjects(data)

      console.log(data)


    }catch(er){
      console.log("Error fetching project data !!! ")
    }
  }


  useEffect(()=>{
    fetccData()
  }, [])




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

        <div className='createButton'>
          <p>Create a new project or request </p>
          <Link to={'/' + 'builder/options2'}><h2 className='createBtn'>Create New</h2></Link>
        </div>

        <div className='dashProjectNumDiv'>
          <div className='dashProjectNum'>
            <h2>{projects.length}</h2>
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

        {projects.length > 0 ? (
          <section className='dashShowDiv'>
            <div className='dashShowDivOne'>
              <h2>Active Projects</h2>


              <div className='dashShowOneDiv'>

                {projects.map((project) =>  (
                  <div className='dashShowOneFlex' >
                    <div >
                      <h3 >{project.title}</h3>
                      <div>
                        <span>Applications: 2</span>
                        <span>Hired: 0</span>
                      </div>
                    </div>
                    <Link to={'/dashboard/projects/description'}><button>View</button></Link>
                    <hr />
                  </div>
                ))}
              </div>
            </div>
    
            <div className='dashShowDivTwo'>
              <h2>Recent Activity</h2>
              <div className='dashShowDivTwoBack'>
                <div className='dashShowTwoFlex'>
                  <h3>New project created</h3>
                  <p>30 mins ago.</p>
                  <hr />
                </div>
    
                <div className='dashShowTwoFlex'>
                  <h3>New project created</h3>
                  <p>30 mins ago.</p>
                  <hr />
                </div>
                
              </div>
            </div>
            <p className='viewAll'>View All <i class="uil uil-message"></i></p>
          </section>
        ) :

        (

          <div>
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
      </div>
          

        )
        
        }



      </section>
    </div>
  )
}

export default Home