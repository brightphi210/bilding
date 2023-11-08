import React from 'react'
import './builderReqCreate.css'
const BuilderReqCreateTwo = ({newData, onChange, handleAdd, handleRemove }) => {
  
  return (
    <div>
      
        <form action="" className='createOneFormDiv'>

            <div className='createOneDiv'>
              <label>Item </label>
            {newData.uploaded_items.map((item, index) => (

              <>
                <div key={index}>
                  <div className='item'>
                    <input 
                      type="text"  
                      placeholder='Item name'
                      name='name'
                      value={item.name}
                      onChange={(e) => onChange(e, index)}
                    />
                    
                    <input 
                      type="number"  
                      placeholder='Amount'
                      name='amount'
                      value={item.amount}
                      onChange={(e) => onChange(e, index)}
                    />

                    {newData.uploaded_items.length > 1 && (<i class="uil uil-times-circle myCloseIcon" onClick={handleRemove}></i>)}
                  </div>
                  
                  
                  {newData.uploaded_items.length -1 === index && newData.uploaded_items.length < 10 && (
                    <span onClick={handleAdd}>Add another item <i class="uil uil-arrow-right"></i></span>
                  )}
                  
                </div>
              </>
              
            ))}

            </div>


            

        </form>
    </div>
  )
}

export default BuilderReqCreateTwo