import React from 'react'

const BuilderReqCreateThree = ({newData, onChange, onSubmit }) => {
  return (
    <div>
        <form action="" className='createOneFormDiv' onSubmit={onSubmit}>

            <div className='createOneDiv'>
                <label>Request description</label>
                <textarea 
                    type="text"  
                    placeholder='Description '
                    name='description'
                    value={newData.description}
                    onChange={onChange}
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
            
            {/* <button type='submit'>Sumit</button> */}
            </div>

        </form>
    </div>
  )
}

export default BuilderReqCreateThree