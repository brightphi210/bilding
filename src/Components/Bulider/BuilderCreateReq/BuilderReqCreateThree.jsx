import React from 'react'

const BuilderReqCreateThree = () => {
  return (
    <div>
        <form action="" className='createOneFormDiv'>
      
            <div className='createOneDiv'>
                <label>Budget e.g ₦2,000,000</label>
                <input type="text"  placeholder='Title'/>
            </div>

            <div className='createOneDiv'>
                <label>Request description</label>
                <textarea type="text"  placeholder='Description '/>
            </div>

            <div className='createOneDiv'>
                <label>Upload images to aid your request description</label>
            </div>

        </form>
    </div>
  )
}

export default BuilderReqCreateThree