import React from 'react'

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

            <button>Add another item</button>

        </form>
    </div>
  )
}

export default BuilderReqCreateTwo