import React from 'react'
import joinImage from './Images/join.png'
import './sectionThree.css'
import { Link } from 'react-router-dom'


const SectionThree = () => {
  return (
    <div>
        <section className='sectionThree'>
            <div className='sectionThreeText'>
                <h2>Join Bilding.</h2>
                <h3>            
                    Get jobs, skilled workers <br />
                    and supplies with ease
                </h3>
                <p>
                    Providing end-to-end construction fulfilment.
                </p>
            </div>

            <div className='sectionThreeDiv'>
                <div className='sectionThreeEach'>
                    <h2>Post a job, and hire <br /> top professionals.</h2>
                    <Link to={'/register'}><p>Get started <i class="uil uil-angle-right"></i></p></Link>
                </div>

                <div className='sectionThreeEach'>
                    <h2>Help buyers complete <br />great projects.</h2>
                    <Link to={'/register'}><p>Get started <i class="uil uil-angle-right"></i></p></Link>
                </div>

                <div className='sectionThreeEach'>
                    <h2>Supply skilled labour, <br />for building projects.</h2>
                    <Link to={'/register'}><p>Get started <i class="uil uil-angle-right"></i></p></Link>
                </div>
            </div>
        </section>
    </div>
  )
}

export default SectionThree