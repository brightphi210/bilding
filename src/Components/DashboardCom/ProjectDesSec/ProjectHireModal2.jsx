import React from 'react'
import hireImg from './d.png'
import { Link } from 'react-router-dom';

const ProjectHireModal2 = ({isOpen2, onClose2}) => {
    if (!isOpen2) return null;
  return (
    <div className='projectHireSectionDiv2'>
        <section className='projectHireSection2'>
            <i class="uil uil-multiply hiredClose" onClick={onClose2}></i>
            <div className='HiredModal'>
                <img src={hireImg} alt="" />
                <p>
                    You’ve successfully selected a Skilled labor, it’s time to <br /> 
                    get your project started.
                </p>
                <Link to={'/' + 'dashboard'}><button>Continue to dashboard</button></Link>
            </div>
        </section>
    </div>
  )
}

export default ProjectHireModal2