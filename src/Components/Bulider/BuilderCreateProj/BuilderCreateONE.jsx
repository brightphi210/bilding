import React from 'react'

import './buildCreate123.css'

const BuilderCreateONE = ({formData, setFormData, onSubmit}) => {
  return (
    <div>
      <form action="" className='createOneFormDiv' onSubmit={onSubmit}>
      
        <div className='createOneDiv'>
          <label>Project title e.g Contractor needed for high rise building</label>
          <input 
            type="text"  
            placeholder='Title'
            value={formData.title}
            onChange={(event) =>
              setFormData({ ...formData, title: event.target.value })
            }
          />
        </div>

        <div className='createOneDiv'>
        <label>Experience e.g 3 years  expereince</label>
        <select 
          placeholder='Title' 
          className='createSelect'
          value={formData.categories}
          onChange={(event) =>
            setFormData({ ...formData, categories: event.target.value })
          }
          >
          <option value="">Category</option>
          <option value="Skilledlabour">Skilled Labour</option>
          <option value="Supplier">Supplier</option>
        </select> 
      </div>

        {/* <div className='createOneDiv'>
          <label>Category e.g Electrical, plumbing, Construction</label>
          <input 
            type="text"  
            placeholder='Category'
            value={formData.categories}
            onChange={(event) =>
              setFormData({ ...formData, categories: event.target.value })
            }
          />
        </div> */}

        <div className='createOneDiv'>
          <label>Skills e.g Building Design, Conduit wiring</label>
          <input 
            type="text"  
            placeholder='Skills'
            value={formData.skills}
            onChange={(event) =>
              setFormData({ ...formData, skills: event.target.value })
            }
            />
        </div>


        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default BuilderCreateONE
