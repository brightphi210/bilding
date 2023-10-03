import React from 'react'

const ProjectScaleModal = ({isOpen2, onClose2,}) => {
  if (!isOpen2) return null;
  return (
    <div className='projectDetailsGen'>
    <section className='projectDetailsDiv'>
      <form action="">

          <div className='createOneDiv'>
            <i class="uil uil-multiply reviewClose" onClick={onClose2}></i>
            <label>Scope e.g large, medium, small</label>

              <select 
                placeholder='Title' 
                className='createSelect'
                name='scope'
                // value={formData.scope}
                // onChange={onChange}
                >
                <option value="">Scope</option>
                <option value="Large">Large</option>
                <option value="Medium">Medium</option>
                <option value="Small">Small</option>
              </select> 
          </div>


          <div className='createOneDiv'>
            <label>Experience e.g 3 years  expereince</label>

            <select 
                placeholder='Title' 
                className='createSelect'
                name='experience'
                // value={formData.experience}
                // onChange={onChange}
                >
                <option value="">Experience</option>
                <option value="1-3yrs">1-3yrs</option>
                <option value="4-8yrs">4-8yrs</option>
                <option value="10-15yrs">10-15yrs</option>
            </select> 
          </div>
      

          <div className='createOneDiv'>
            <label>Projected duration e.g 1-6 months, 6-12 months, over a year</label>

            <select 
                placeholder='Title' 
                className='createSelect'
                name='duration'
                // value={formData.duration}
                // onChange={onChange}
                >
                <option value="">Durations</option>
                <option value="1-6months">1-6months</option>
                <option value="1-2yrs">1-2yrs</option>
                <option value="1-5yrs">1-5yrs</option>
              </select> 
          </div>



          <div className='createOneDiv'>
            <label>Project location (complete address)</label>
            <input 
            type="text"  
            placeholder='Location'
            name='location'
            // value={formData.location}
            // onChange={onChange}
            />
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

export default ProjectScaleModal