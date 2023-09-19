import React from 'react'
import './buildCreate123.css'

const BuilderCreateTHREE = () => {
  return (
    <div>
      <form action="" className='createOneFormDiv'>
      
        <div className='createOneDiv'>
          <label>Budget e.g ₦2,000,000</label>
          <input type="text"  placeholder='Title'/>
        </div>

        <div className='createOneDiv'>
          <label>Project description</label>
          <textarea type="text"  placeholder='Description '/>
        </div>

        <div className='createOneDiv'>
          <label>Upload images to aid your project description</label>
          <button>Upload image <i class="uil uil-upload-alt"></i></button>
        </div>

      </form>
    </div>
  )
}

export default BuilderCreateTHREE