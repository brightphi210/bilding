import React, { useEffect } from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import VectorImage from './newvec.png'
import WorkerProjectModal from './WorkerProjectDes/WorkerProjectModal';
import { useState } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import './WorkerDash.css'

const WorkerDash = () => {

    const [modal, setModal] = useState(false)
    const [modal2, setModal2] = useState(false)
  
    const showModal = ()=>{
        setModal(true)
    }
  
    const hideModal = ()=>{
        setModal(false)
    }

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

    const url = 'https://bildingapi.onrender.com/api/projects'
    const token = localStorage.getItem('authToken');

    const [datas, setDatas] = useState([])

    const fetccData = async () => {
        try {
            const res = await fetch(url, {
                method : 'GET',
                headers : {
                    "Authorization": `Bearer ${token}`,
                }
            })

            const data = await res.json();
            setDatas(data)
        } catch (error) {
            console.log(error)
        }
    }


    useEffect(()=>{
        fetccData()
    }, [])

    const [selectedData, setSelectedData] = useState([])

    const handleMoreClick = (data) => {
        setSelectedData(data);
        showModal(true);
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
                <button>Search <i class="fa-solid fa-arrow-right"></i></button>
            </form>


            <section className='workerDashSectionTwo'>
                <h2>Projects for you</h2>
                <div className='workerDashDiv'>
                    <section  className='workerDashSec'>

                        {datas.map((data)=>(
                            <>
                            <div className='projectSectionTwo projectSectionTwoNew' onClick={() => handleMoreClick(data)}>

                                <div className='proSeniorDiv'>
                                    <img src={VectorImage} alt="" />
                                </div>
                                <div className=''>
                                    <div>
                                        <span><b>Chevron N..</b></span>
                                        <span className='review'><i class="uil uil-favorite sectTwoIcons"></i> 4.6 (9 reviews)</span>
                                    </div>
                                    <div className='proSenior'>
                                        {console.log(datas)}
                                        <h2>{data.title}</h2>
                                        <span><i class="uil uil-location-point sectTwoIcons"></i> {data.location}</span>
                                    </div>
                                    <p>
                                        {data.description}
                                    </p>

                                    <span className='proSeniorDivCategory'>Electrical Engineering</span>
                                </div>

                                <div className='proSectHire'>
                                    <h2>₦{data.budget}</h2>
                                </div>
                            </div>
                            <hr className='hrt'/>
                            </>
                        ))}


                    </section>
                </div>
            </section>
        </section>
        <WorkerProjectModal isOpen={modal} onClose={hideModal} selectedData = {selectedData}/>
        
    </div>
  )
}

export default WorkerDash