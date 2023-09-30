import React from 'react'

import './buildCreate123.css'

const BuilderCreateONE = ({formData, setFormData, onSubmit, onChange }) => {
  return (
    <div>
      <form action="" className='createOneFormDiv' onSubmit={onSubmit}>
      
        <div className='createOneDiv'>
          <label>Project title e.g Contractor needed for high rise building</label>
          <input 
            type="text"  
            placeholder='Title'
            name='title'
            value={formData.title}
            onChange={onChange}
          />
        </div>

        <div className='createOneDiv'>
          <label>Category e.g Electrical, plumbing, Construction</label>
          <select 
            placeholder='Title' 
            className='createSelect'
            name='categories'
            value={formData.categories}
            onChange={onChange}
            >
            <option value="">Category</option>
            <option value="Electrical">Electrical</option>
            <option value="Plumbing">Plumbing</option>
            <option value="Construction">Construction</option>
            <option value="Plastering">Plastering</option>
            <option value="Painting">Painting</option>
            <option value="InteriorDecoration">Interior Decoration</option>
          </select> 
        </div>


        <div className='createOneDiv'>
          <label>Skills e.g Contractor, Engineer, Electrician</label>
          <select 
            placeholder='skills' 
            className='createSelect'
            name='skills'
            value={formData.skills}
            onChange={onChange}
            >
            <option value="">Skills</option>
            <option value="Engineer">Engineer</option>
            <option value="Electrician">Electrician</option>
            <option value="Contractor">Contractor</option>
          </select> 
        </div>


        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default BuilderCreateONE
