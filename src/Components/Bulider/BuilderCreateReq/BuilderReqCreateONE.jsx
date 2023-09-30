import React from 'react'

const BuilderReqCreateONE = () => {
  return (
    <div>
        <form action="" className='createOneFormDiv'>
        
          <div className='createOneDiv'>
            <label>Request title e.g Contractor needed for high rise building</label>
            <input type="text"  placeholder='Title'/>
          </div>

          <div className='createOneDiv'>
            <label>Category e.g plumbing, electrical, carpentary</label>
            <input type="text"  placeholder='Category'/>
          </div>

          <div className='createOneDiv'>
            <label>Location</label>
            <input type="text"  placeholder='Project location'/>
          </div>

      </form>
    </div>
  )
}

export default BuilderReqCreateONE