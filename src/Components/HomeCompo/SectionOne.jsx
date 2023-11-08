import React from 'react'
import bgImage from './Images/bg1.png'
import './sectionOne.css'
const SectionOne = () => {
  return (
    <div>
      <section className='sectionOne'>
        <div className='sectionOneFirst'>
            <h2>Welcome to <span className='secSpan1'>GetBilding</span> </h2>
            <h3>
                Connecting Builders with Reliable <br />
                Suppliers and Skilled Labor
            </h3>
            <p>
                Your Go-To Platform for Building Contractors, <br />
                Suppliers, and Labor Force.
            </p>
            <form action="" className='homeForm'>
                <input type="text" placeholder='Looking for...' />
                <select className='custom-select' >
                    <option value="">Category</option>
                    <option value="">Melson</option>
                    <option value="">Painting</option>
                    <option value="">Wiring</option>
                    <option value="">Funiture</option>
                </select>
                <button className='btn'>Search</button>
            </form>
        </div>
        <div className='sectionOneSecond'>
            <img src={bgImage} alt="" />
        </div>
      </section>
    </div>
  )
}

export default SectionOne
