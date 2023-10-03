import React from 'react'
import './buildCreate123.css'

const BuilderCreateTHREE = ({formData, setFormData, onSubmit, onChange,  }) => {


  return (
    <div>
      <form action="" className='createOneFormDiv' onSubmit={onSubmit}>

        <div className='createOneDiv'>
          <label>Budget e.g ₦2,000,000</label>
          <input 
          type="number"  
          placeholder='budget'
          name='budget'
          value={formData.budget}
          onChange={onChange}
          />
        </div>

        <div className='createOneDiv'>
          <label>Project description</label>
          <textarea  
          placeholder='Description '
          name='description'
          value={formData.description}
          onChange={onChange}
          />
        </div>


        

        <div className='createOneDiv'>
          <label>Upload images to aid your project description</label>
          {/* <input 
            type="file" 
            id='image' 
            name="image" 
            accept="image/*"
            onChange={onChange} 
            /> */}
        </div>

      </form>
    </div>
  )
}

export default BuilderCreateTHREE