import React from 'react'
import whyImg from './Images/why.png'
import './sectionFour.css'
const SectionFour = () => {
  return (
    <div>
      <section className='sectionFour'>
        <div className='sectionFourImg'>
            <img src={whyImg} alt="" />
        </div>

        <div className='sectionFourText'>
            <h2>Why use GetBilding</h2>
            <p>
                Connecting Contractors, Suppliers, and Labor - Your Ultimate Construction Hub
            </p>
            <ul className='secFourUl'>
                <li><span>Find Top Suppliers: </span> Access a curated network of reliable suppliers offering quality materials and services within your budget.</li>
                <li><span>Connect with Skilled Labour: </span> Discover a diverse pool of talented workers ready to bring your projects to life.</li>
                <li><span>Simplify Project Management: </span> Streamline your construction projects with easy communication tools and efficient processes.</li>
                <li><span>Personalized Job Recommendations: </span> Find the perfect job opportunities based on your skills and preferences.</li>
                <li><span>Dedicated Customer Support: </span> Get assistance from our support team whenever you need it.</li>
                <li><span>Join a Thriving Community: </span> Be part of an innovative construction community driving progress in the industry.</li>
            </ul>
        </div>
      </section>
    </div>
  )
}

export default SectionFour
