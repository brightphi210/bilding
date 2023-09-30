import React from 'react'
import './ProjectReviewUpdates123.css'
const ProjectDetailsModal = ({isOpen1, onClose1,}) => {

    
    if (!isOpen1) return null;
  return (
    <div className='projectDetailsGen'>
      <section className='projectDetailsDiv'>
      <i class="uil uil-multiply reviewClose" onClick={onClose1}></i>
        <form action="" className='' >
            {/* <div className='createOneDiv'>
                <label>Project title e.g Contractor needed for high rise building</label>
                <input 
                type="text"  
                placeholder='Title'
                name='title'
                />
            </div> */}




            <button type="submit">Submit</button>
        </form>
      </section>
    </div>
  )
}

export default ProjectDetailsModal