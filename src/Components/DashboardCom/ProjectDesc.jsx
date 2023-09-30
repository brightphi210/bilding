import React, { useState } from 'react'
import './projectDes.css'


import ProjectDesSec1 from './ProjectDesSec/ProjectDesSec1'
import ProjectDescSec2 from './ProjectDesSec/ProjectDescSec2'
import ProjectDescSec3 from './ProjectDesSec/ProjectDescSec3'

import { Link } from 'react-router-dom'
const ProjectDesc = () => {

    const [sect, setSect] = useState(0)

    const SecDisplay = () =>{
        if(sect === 0){
            return <ProjectDesSec1 />
        }

        else if(sect === 1){
            return <ProjectDescSec2 />
        }

        else{
            return <ProjectDescSec3 />
        }
    }


    let myBorder1 = ''
    let myBorder2 = ''
    let myBorder3 = ''

    if(sect === 0){
        myBorder1 = 'secBorder'
        myBorder2 = ''
        myBorder3 = ''
    }
    

    else if(sect === 1){
        myBorder1 = ''
        myBorder2 = 'secBorder'
        myBorder3 = ''
    }


    else if(sect === 2){
        myBorder1 = ''
        myBorder2 = ''
        myBorder3 = 'secBorder'
    }
  return (
    <div>
        <section className='dashProjectDesc'>
            <Link to={'/dashboard'}><span><i class="uil uil-angle-left"></i> Back to dashboard</span></Link>
            <h2>Electrician to wire a two storey building in Asaba.</h2>

            <section>
                <div className='dashDescLink'>
                    <ul className='dashDesLinkUL'>
                        <li className=''><i class="uil uil-link link_new"></i> https://bilding.contruction/project....</li>
                        <li className='copyLink'>Copy project link</li>
                    </ul>

                    <ul className='dashDesLinkUL'>
                        <li><i class="uil uil-edit-alt"></i> Edit project</li>
                        <li><i class="uil uil-eye"></i> View project</li>
                        <li><i class="uil uil-trash-alt"></i> Delete project</li>
                    </ul>
                </div>


                <section className='detailSection'>
                    <div className='detailSectionDiv'>
                        <h2 onClick={()=>{setSect(0)}} className={myBorder1}>Details</h2>
                        <h2 onClick={()=>{setSect(1)}} className={myBorder2}>Applications (3)</h2>
                        <h2 onClick={()=>{setSect(2)}} className={myBorder3}>Hired</h2>
                    </div>
                    
                    <div>{SecDisplay()} </div>
                </section>
            </section>
        </section>
    </div>
  )
}

export default ProjectDesc