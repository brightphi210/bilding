import React from 'react'
import './builderVerify.css'
import { Link } from 'react-router-dom'
const BuilderVerify = () => {
  return (
    <div>
        <section className='builderVerifySection'>
            <h2>Welcome to Bilding</h2>
            <p>Tell us a bit more about yourself.</p>

            <form action="" className='builderVerifySectionForm'>
                <input type="text" placeholder='Address' />
                <input type="text" placeholder='BVN' />
                <div className='upload'>
                    <p>Upload government approved ID</p>
                    <input  type="file" accept="image/*" />
                    <span>Click here to select file, or drag and drop them on here</span>
                </div>
                <Link to={'/builder/request'}><button>Continue</button></Link>
            </form>
        </section>
    </div>
  )
}

export default BuilderVerify
