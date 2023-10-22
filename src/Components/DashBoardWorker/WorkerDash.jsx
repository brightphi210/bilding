import React, { useEffect } from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import VectorImage from './newvec.png'
import WorkerProjectModal from './WorkerProjectDes/WorkerProjectModal';
import { useState } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import './WorkerDash.css'

import { Link } from 'react-router-dom';

import { Card, Placeholder } from 'semantic-ui-react'

import { FormattedNumber } from 'react-intl';

import WorkerProjectApply from './WorkerProjectDes/WorkerProjectApply';

import { AiOutlineArrowRight } from "react-icons/ai"

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


    // useEffect(()=>{
    //     fetccData()
    // }, [])

    const [selectedData, setSelectedData] = useState([])

    const handleMoreClick = (data) => {
        setSelectedData(data);
        showModal(true);
    };
      


      const formatAmount = (value) => {
        if (value === null || value === undefined) return 0; 
        return value.toLocaleString('en-US', {
          style: 'currency',
          currency: 'NGN',
          minimumFractionDigits: 2,
        });
      };



      const [searchQuery, setSearchQuery] = useState('')
      let searchUrl2 = `https://bildingapi.onrender.com/api/projects?search=${searchQuery}`

      const [isLoading, setIsLoading] = useState(false)


      const fetchData =  async (e) =>{
        e.preventDefault();
        setIsLoading(true)
        try{
          const response = await fetch(searchUrl2,{
            method: 'GET',
            headers: {
              // 'Content-Type': 'application/json',
              "Authorization": `Bearer ${token}`
            },
    
          })
          const data = await response.json();
          setDatas(data)
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


      console.log(datas)
    
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


            <form action="" className='workerDashForm' >
                <input type="text" 
                  placeholder='Search for projects . . .' 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />

                {/* <span onClick={fetchData}>Search</span> */}
                <button type='submit' onClick={fetchData}>{isLoading ? "Searching . . " : 'Search'} </button>
            </form>


            <section className='workerDashSectionTwo'>
                <h2 >Projects for you</h2>
                <div className='workerDashDiv'>

                    {datas.length > 0 ? (
                    <>                    
                    <section  className='workerDashSec'>

                        {datas.map((data)=>(
                            <>
                            <div className='projectSectionTwo projectSectionTwoNew' onClick={() => handleMoreClick(data)}>

                                <div className='proSeniorDiv'>
                                    <img src={VectorImage} alt="" />
                                </div>
                                <div className=''>
                                    <div>
                                        <span className='myName'><b>{data.owner.firstname} {data.owner.lastname}</b></span>
                                        <span className='review'><i class="uil uil-favorite sectTwoIcons"></i> 4.6 (9 reviews)</span>
                                    </div>
                                    <div className='proSenior'>
                                        <h2>{data.title}</h2>
                                        <p>{data.categories}</p>
                                        <span><i class="uil uil-location-point sectTwoIcons"></i> {data.location}</span>
                                    </div>
                                    <p>
                                        {data.description}
                                    </p>

                                    
                                    <div className='applyBtn'>
                                      <button className=''>{data.owner.profession}</button>
                                      <Link to={`/dashboard/apply/${data.id}`}><button >Apply For Project</button></Link>
                                    </div>
                                </div>

                                <div className='proSectHire'>
                                    <h2>{formatAmount(data.budget)}</h2>
                                </div>
                            </div>
                            <hr className='hrt'/>
                            </>
                        ))}


                        


                    </section>
                    </>
                    ) 
                    : (
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
                    )}

                </div>
            </section>
        </section>
        <WorkerProjectModal isOpen={modal} onClose={hideModal} selectedData = {selectedData}/>
        {/* <WorkerProjectApply  selectedData = {selectedData} /> */}
        
    </div>
  )
}

export default WorkerDash