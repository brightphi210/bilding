import React from 'react'
import { Link } from 'react-router-dom'

import createImg from './created.png'

const BuilderCreateModal = () => {
  return (
    <div className='projectHireSectionDiv2'>
    <section className='projectHireSection2'>
        <i class="uil uil-multiply hiredClose"></i>
        <div className='HiredModal'>
            <img src={createImg} alt="" />
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

export default BuilderCreateModal