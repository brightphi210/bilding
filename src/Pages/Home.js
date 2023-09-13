import React from 'react'


import Nav from '../Components/Nav/Nav'
import SectionOne from '../Components/HomeCompo/SectionOne'
import SectionTwo from '../Components/HomeCompo/SectionTwo'
import SectionThree from '../Components/HomeCompo/SectionThree'
import SectionFour from '../Components/HomeCompo/SectionFour'
import SectionFive from '../Components/HomeCompo/sectionFive'


const Home = () => {
  return (
    <div>
        <Nav />
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <SectionFour />
        <SectionFive />
    </div>
  )
}

export default Home