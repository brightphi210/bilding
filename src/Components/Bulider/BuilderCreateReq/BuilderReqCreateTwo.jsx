import React from 'react'

const BuilderReqCreateTwo = () => {
  return (
    <div>
        <form action="" className='createOneFormDiv'>
            
            <div className='createOneDiv'>
                <label>Scope e.g large, medium, small</label>
                <select type="text"  placeholder='Title' className='createSelect'>
                <option value="">Scope</option>
                <option value=""></option>
                <option value=""></option>
                </select> 
            </div>

            <div className='createOneDiv'>
                <label>Experience e.g 3 years  expereince</label>
                <select type="text"  placeholder='Title' className='createSelect'>
                <option value="">Experience</option>
                <option value=""></option>
                <option value=""></option>
                </select> 
            </div>
            
            



            <div className='createOneDiv'>
                <label>Projected duration e.g 1-6 months, 6-12 months, over a year</label>
                <select type="text"  placeholder='Title' className='createSelect'>
                <option value="">Duration</option>
                <option value=""></option>
                <option value=""></option>
                </select> 
            </div>


            <div className='createOneDiv'>
                <label>Project location (complete address)</label>
                <input type="text"  placeholder='Location'/>
            </div>

        </form>
    </div>
  )
}

export default BuilderReqCreateTwo