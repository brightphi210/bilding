import React from 'react'
import './ProjectReviewUpdates123.css'
const ProjectDetailsModal = ({isOpen1, onClose1,}) => {

    
    if (!isOpen1) return null;
  return (
    <div className='projectDetailsGen'>
      <section className='projectDetailsDiv'>
      <i class="uil uil-multiply reviewClose" onClick={onClose1}></i>
        <form action="" className='' >
            <div className='createOneDiv'>
                <label>Project title e.g Contractor needed for high rise building</label>
                <input 
                type="text"  
                placeholder='Title'
                name='title'
                />
            </div>

            <div className='createOneDiv'>
              <label>Category e.g Electrical, plumbing, Construction</label>
              <select 
                placeholder='Title' 
                className='createSelect'
                name='categories'
                // value={formData.categories}
                // onChange={onChange}
                // required
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
                // value={formData.skills}
                // onChange={onChange}
                required
                >
                <option value="">Skills</option>
                <option value="Engineer">Engineer</option>
                <option value="Electrician">Electrician</option>
                <option value="Contractor">Contractor</option>
              </select> 
            </div>




          <div className='cancleSubBtn'>
            <span>Cancle <i class="uil uil-times"></i></span>
            <button type="submit">Update</button>
          </div>
        </form>
      </section>
    </div>
  )
}

export default ProjectDetailsModal