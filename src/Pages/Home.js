import React from 'react'


import Nav from '../Components/Nav/Nav'
import SectionOne from '../Components/HomeCompo/SectionOne'
import SectionTwo from '../Components/HomeCompo/SectionTwo'
import SectionThree from '../Components/HomeCompo/SectionThree'
import SectionFour from '../Components/HomeCompo/SectionFour'
import SectionFive from '../Components/HomeCompo/sectionFive'
import Footer from '../Components/Footer/Footer'

const Home = () => {
  return (
    <div>
        <Nav />
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <SectionFour />
        <SectionFive />
        <Footer />
    </div>
  )
}

export default Home