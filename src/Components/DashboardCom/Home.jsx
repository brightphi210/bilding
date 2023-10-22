import React, { useState, useEffect } from 'react'
import jwt_decode from "jwt-decode"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { Card, Placeholder } from 'semantic-ui-react'

import './dashHome.css'
import BuilerModal from '../Bulider/BuilerModal';

import emptyImg from './Images/empty.png'
import { useLocation } from 'react-router-dom';

import myVideo from './animation_lnkaatit.mp4'

import { Link } from 'react-router-dom';



const Home = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  // const [isLoading, setIsLoading] = useState(true);

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

  console.log(projects)
  const [recentProjects, setRecentProject] = useState([])


  let url = 'https://bildingapi.onrender.com/api/projects/user'
  let url2 = 'https://bildingapi.onrender.com/api/recentprojects'

  
  
  const token = localStorage.getItem('authToken');

  let newToken = jwt_decode(token)


  const [isVisible, setIsVisible] = useState(true);

  const location = useLocation();
  const state = location.state || {};
  const successMessage = state.myMessage;

  //  useEffect(() => {
  //    if (message) {
  //      const timeout = setTimeout(() => {
  //        setIsVisible(false);
  //      }, 2000);

  //      return () => {
  //        clearTimeout(timeout);
  //      };
  //    }
  //  }, [message]);

  //  console.log(successMessage)



  
  //  ============================ Fetch Projects ===============================
  const fetccData = async () => {
    
    
    try{
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          "Authorization": `Bearer ${token}`
        },

      })
      const data = await response.json()
      setIsLoading(false); 
      setProjects(data)

    }catch(er){
      setIsLoading(false)
      console.log("Error fetching project data !!! ")
    }
  }


  useEffect(()=>{
    fetccData()
  }, [])



    const [request, setRequest] = useState([])
    
    const url3 = 'https:bildingapi.onrender.com/api/requests/user'
    const fetchData2 = async () =>{
      try {
          const response = await fetch(url3, {
              method: 'GET',
              headers: {
                "Authorization": `Bearer ${token}`
              },

          })
          const data = await response.json()
          setRequest(data)
      } catch (error) {
          console.log(error)
      }
  }


  useEffect(() =>{
      fetchData2()
  }, [])


  //  ========================== Recent Project ========================

  const fetchRecentData = async () => {
    try{

      const response = await fetch(url2, {
        method: 'GET',
        headers: {
          "Authorization": `Bearer ${token}`
        },
      })

      const data = await response.json()
      setRecentProject(data)

    }catch(e){
      console.log("There An Error Fetching Recent Data !!!")
    }
  }

  useEffect(()=>{
    fetchRecentData()
  }, [])



    const [searchQuery, setSearchQuery] = useState('')
    let searchUrl = `https://bildingapi.onrender.com/api/projects?search=Painting${searchQuery}`

    const [isLoading, setIsLoading] = useState(false)


    const fetchData =  async (e) =>{
      e.preventDefault();
      setIsLoading(true)
      try{
        const response = await fetch(searchUrl,{
          method: 'GET',
          headers: {
            // 'Content-Type': 'application/json',
            "Authorization": `Bearer ${token}`
          },

        })
        const data = await response.json();
        setProjects(data)
        setIsLoading(false)


      }catch(e){
        console.log("There was an error fetching the data!!")
      }
    }

    useEffect(() => {
      if (searchQuery) {
        fetchData();
      }

      fetccData()
    }, []);



  return (
    <div>

      <p className='loginMessage'>{successMessage}</p>
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

        <form action="" className='workerDashForm' >
                <input type="text" 
                  placeholder='Search for projects . . .' 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />

                {/* <span onClick={fetchData}>Search</span> */}
                <button type='submit' onClick={fetchData}>{isLoading ? "Searching . . " : 'Search'} </button>
            </form>

        <div className='createButton'>
          <p>Create a new project or request </p>
          <Link to={'/' + 'builder/options2'}><h2 className='createBtn'>Create New</h2></Link>
        </div>

        {projects.length >  0 ? 
        ( 
        <>
        <div className='dashProjectNumDiv'>
          <div className='dashProjectNum'>
            {projects.length > 0 ? (
              <h2>{projects.length}</h2>
            ): (<h2>0</h2>)}
            
            <p>Projects</p>
          </div>

          <div className='dashProjectNum'>
            {request.length > 0 ? (<><h2>{request.length}</h2></>) : (<><h2>0</h2></>)} 
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
       
        
        <section className='dashShowDiv'>
          <div className='dashShowDivOne'>
            <div className='viewDiv'>
              <h2>Active Projects</h2>
              <Link to={'/' + 'dashboard/projects'}><p className='viewAll'>View All <i class="uil uil-message"></i></p></Link>
            </div>
  
            <div className='dashShowOneDiv'>

              {projects.slice(0, 3).map((project) =>  (
                <div className='dashShowOneFlex' >
                  <div >
                    <h3 >{project.title}</h3>
                    <div>
                      <span>Applications: 2</span>
                      <span>Hired: 0</span>
                    </div>
                    <img src="" alt="" />
                  </div>
                  <Link to={`/dashboard/projects/description/${project.id}`}><button>View <i class="uil uil-arrow-right"></i></button></Link>
                  <hr />
                </div>
              ))}
            </div>
          </div>
  
          <div className='dashShowDivTwo'>
            <h2>Recent Activity</h2>
            <div className='dashShowDivTwoBack'>
              
              {recentProjects.slice(0, 3).map((recentproject) =>(
                <>
                <div className='dashShowTwoFlex'>
                  <h3>{recentproject.project.title}</h3>
                  <p>{recentproject.project.time}</p>
                </div>
                {/* <hr /> */}
                </>
              ))}

            </div>
          </div>
        </section>
        </>
        ): 

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
        
        }

        {/* {isLoading === true &&  (

          (
            <>
            <Placeholder fluid>
              <Placeholder.Header image>
                <Placeholder.Line />
                <Placeholder.Line />
              </Placeholder.Header>
              <Placeholder.Paragraph>
                <Placeholder.Line />
                <Placeholder.Line />
                <Placeholder.Line />
              </Placeholder.Paragraph>
            </Placeholder>

            <Placeholder fluid>
              <Placeholder.Header image>
                <Placeholder.Line />
                <Placeholder.Line />
              </Placeholder.Header>
              <Placeholder.Paragraph>
                <Placeholder.Line />
                <Placeholder.Line />
                <Placeholder.Line />
              </Placeholder.Paragraph>
            </Placeholder>


            <Placeholder fluid>
              <Placeholder.Header image>
                <Placeholder.Line />
                <Placeholder.Line />
              </Placeholder.Header>
              <Placeholder.Paragraph>
                <Placeholder.Line />
                <Placeholder.Line />
                <Placeholder.Line />
              </Placeholder.Paragraph>
            </Placeholder>


          </>
          )
        )} */}


      </section>
    </div>
  )
}

export default Home