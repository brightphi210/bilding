import React from 'react'
import './buildCreate123.css'

const BuilderCreateTHREE = ({formData, setFormData, onSubmit, onChange,  }) => {


  return (
    <div>
      <form action="/upload" className='createOneFormDiv' onSubmit={onSubmit} enctype="multipart/form-data">

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
          required
          />
        </div>


        

        <div className='createOneDiv'>
          <label>Upload images to aid your project description</label>
          <input 
            type="file" 
            id='image' 
            name="image1" 
            accept="image/*"
            onChange={onChange} 
            required
            />


          <input 
            type="file" 
            id='image' 
            name="image2" 
            accept="image/*"
            onChange={onChange} 
            required
            />


          {/* <input 
            type="file" 
            id='image' 
            name="image3" 
            accept="image/*"
            onChange={onChange} 
            required
            /> */}
            
        </div>

      </form>
    </div>
  )
}

export default BuilderCreateTHREE