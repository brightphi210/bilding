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
            <h3>Project created successfully!</h3>
            <p>
            You project has been created and sent out, keep your eyes <br /> on the notifications panel for offers from professionals.
            </p>
            <Link to={'/' + 'dashboard'}><button>Continue to dashboard</button></Link>
        </div>
    </section>
</div>
  )
}

export default BuilderCreateModal