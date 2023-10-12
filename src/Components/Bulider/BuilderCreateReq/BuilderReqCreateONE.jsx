import React from 'react'
import './builderReqCreate.css'

const BuilderReqCreateONE = ({newData, onChange, onSubmit }) => {
  return (
    <div>
        <form action="" className='createOneFormDiv' onSubmit={onSubmit}>
        
          <div className='createOneDiv'>
            <label>Request title e.g Contractor needed for high rise building</label>
            <input 
              type="text"  
              placeholder='Title'
              name='title'
              value={newData.title}
              onChange={onChange}
              />
          </div>

          <div className='createOneDiv'>
          <label>Category e.g Electrical, plumbing, Construction</label>
          <select 
            className='createSelect'
            name='category'
            value={newData.category}
            onChange={onChange}
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
            <input 
              type="text"  
              placeholder='Request location'
              name='location'
              value={newData.location}
              onChange={onChange}
              />
          </div>

          <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default BuilderReqCreateONE