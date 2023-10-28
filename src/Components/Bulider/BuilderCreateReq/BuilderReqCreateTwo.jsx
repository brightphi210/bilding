import React from 'react'
import './builderReqCreate.css'
const BuilderReqCreateTwo = ({newData, onChange }) => {
  return (
    <div>
      
        <form action="" className='createOneFormDiv'>

            <div className='createOneDiv'>
            {newData.uploaded_items.map((item, index) => (

              <>
                <div key={index}>
                <label>Item name </label>
                  <input 
                    type="text"  
                    placeholder='Item name'
                    name='name'
                    value={item.name}
                    onChange={(e) => onChange(e, index)}

                  />

                  <label>Amount </label>
                  <input 
                    type="number"  
                    placeholder='Enter Amount'
                    name='amount'
                    value={item.amount}
                    onChange={(e) => onChange(e, index)}
                  />
              </div>


              <div key={index}>
              <label>Item name </label>
                <input 
                  type="text"  
                  placeholder='Item name'
                  name='name'
                  value={item.name}
                  onChange={(e) => onChange(e, index)}

                />

                <label>Amount </label>
                <input 
                  type="number"  
                  placeholder='Enter Amount'
                  name='amount'
                  value={item.amount}
                  onChange={(e) => onChange(e, index)}
                />
              </div>

              </>
              
            ))}

            </div>
            <span>Add another item <i class="uil uil-arrow-right"></i></span>

        </form>
    </div>
  )
}

export default BuilderReqCreateTwo