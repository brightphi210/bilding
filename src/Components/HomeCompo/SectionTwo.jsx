import React from 'react'
import { Link } from 'react-router-dom'
import sec2Image from './Images/sec2.png'
import whatImg1 from './Images/what1.png'
import whatImg2 from './Images/what2.png'
import './sectionTwo.css'
const SectionTwo = () => {
  return (
    <div>
      <section className='sectionTwoGen'>
        <div className='sectionTwo'>
            <div className='sectionTwoFirst'>
                <img src={sec2Image} alt="" />
            </div>
            <div className='sectionTwoTwo'>
                <h2>What is Bilding.construction?</h2>
                <p>
                    Welcome to Bilding.tech, the ultimate web platform that streamlines 
                    construction connections like never before. Whether you're a building 
                    contractor in need of reliable suppliers and skilled labor, or a skilled 
                    worker searching for the perfect job opportunity, we've got you covered.
                </p>

                <p className='p2'>
                    With years of experience in the industry, we understand the challenges you 
                    face. Say goodbye to time-consuming searches and costly delays – 
                    Bilding.tech is here to revolutionize the way you connect, collaborate, 
                    and create.
                </p>
                <Link to={'/register'}><button>Get Started</button></Link>
            </div>
        </div>

        <div className='whatDiv'>
            <div>
                <h1>What do you need for your Project?</h1>
                <p>
                    Find top talent and suppliers.
                </p>
            </div>
            <div className='whatDivFlex'>
                <div className='skilledDiv'>
                    <img src={whatImg2} alt="" />
                    <div>
                        <h2>Skilled workers</h2>
                        <p>
                            Get top talents for your construction
                            projects with ease.
                        </p>
                        <Link to={'/builder'}><button>Find Talent</button></Link>
                    </div>
                </div>

                <div className='skilledDiv'>
                    <img src={whatImg1} alt="" />
                    <div>
                        <h2>Suppliers</h2>
                        <p>
                            Get the best products for your projects with ease.
                        </p>
                        <Link to={'/builder'}><button>Find Supplier</button></Link>
                    </div>
                </div>
            </div>
        </div>
      </section>
    </div>
  )
}

export default SectionTwo
