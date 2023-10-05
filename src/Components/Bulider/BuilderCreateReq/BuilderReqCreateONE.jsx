import React from 'react'
import './builderReqCreate.css'

const BuilderReqCreateONE = ({formData, setFormData, onSubmit, onChange }) => {
  return (
    <div>
        <form action="" className='createOneFormDiv' onSubmit={onSubmit}>
        
          <div className='createOneDiv'>
            <label>Request title e.g Contractor needed for high rise building</label>
            <input type="text"  placeholder='Title'/>
          </div>

          <div className='createOneDiv'>
          <label>Category e.g Electrical, plumbing, Construction</label>
          <select 
            placeholder='Title' 
            className='createSelect'
            name='categories'
            value={formData.categories}
            onChange={(e)=>setFormData(e.target.value)}
            required
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
            <label>Location</label>
            <input type="text"  placeholder='Request location'/>
          </div>

        <button type='submit'>submit</button>
      </form>
    </div>
  )
}

export default BuilderReqCreateONE