import React from 'react'
import './builderReqCreate.css'
const BuilderReqCreateTwo = () => {
  return (
    <div>
        <form action="" className='createOneFormDiv'>

            <div className='createOneDiv'>
                <label>Item name </label>
                <input type="text"  placeholder='Item name'/>
            </div>

            <div className='createOneDiv'>
                <label>Amount </label>
                <input type="text"  placeholder='Enter Amount'/>
            </div>

            <span>Add another item <i class="uil uil-arrow-right"></i></span>

        </form>
    </div>
  )
}

export default BuilderReqCreateTwo