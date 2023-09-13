import React from 'react'
import signUpBg from './Images/bg.png'

import './signUp.css'
const SignUp = () => {
  return (
    <div>
        <section className='signupSection'>
            <div>
                <img src={signUpBg} alt="" />
                <h2>Sign up to Bilding</h2>
            </div>
            
            <div className='categoryDiv'>

                <div className='cateEach'>
                    <p>I’m a builder looking  to hire top professionals.</p>
                </div>

                <div className='cateEach'>
                    <p>I’m a supplier, providing goods for projects.</p>
                </div>

                <div className='cateEach'>
                    <p>I’m a service provider, looking for work.</p>
                </div>
            </div>

            <button>Get Started</button>
            <p>Already have an account ? Log in</p>
        </section>
    </div>
  )
}

export default SignUp