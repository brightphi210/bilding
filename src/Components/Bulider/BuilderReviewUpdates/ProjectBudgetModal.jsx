import React from 'react'

const ProjectBudgetModal = ({isOpen3, onClose3,}) => {
  if (!isOpen3) return null;
  return (
    <div className='projectDetailsGen'>
      <section className='projectDetailsDiv'>
        <form action="">

            <div className='createOneDiv'>
            <i class="uil uil-multiply reviewClose" onClick={onClose3}></i>
              <label>Budget e.g ₦2,000,000</label>
              <input 
              type="number"  
              placeholder='budget'
              name='budget'
              // value={formData.budget}
              // onChange={onChange}
              />
            </div>

            <div className='createOneDiv'>
              <label>Project description</label>
              <textarea  
              placeholder='Description '
              name='description'
              // value={formData.description}
              // onChange={onChange}
              />
            </div>


            <div className='createOneDiv'>
              <label>Upload images to aid your project description</label>
              <input 
                type="file" 
                id='image' 
                name="image" 
                accept="image/*"
                // onChange={onChange} 
                />
            </div>

        </form>
      </section>
    </div>
  )
}

export default ProjectBudgetModal