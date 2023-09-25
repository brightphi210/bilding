import React from 'react'

import './buildCreate123.css'

const BuilderCreateONE = () => {
  return (
    <div>
      <form action="" className='createOneFormDiv'>
      
        <div className='createOneDiv'>
          <label>Project title e.g Contractor needed for high rise building</label>
          <input type="text"  placeholder='Title'/>
        </div>

        <div className='createOneDiv'>
          <label>Category e.g Electrical, plumbing, Construction</label>
          <input type="text"  placeholder='Category'/>
        </div>

        <div className='createOneDiv'>
          <label>Skills e.g Building Design, Conduit wiring</label>
          <input type="text"  placeholder='Skills'/>
        </div>

      </form>
    </div>
  )
}

export default BuilderCreateONE
