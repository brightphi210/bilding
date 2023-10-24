import React from 'react'
import signUpBg from './Images/bg.png'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'


import './signUp.css'
const SignUp = () => {

    let navigate  = useNavigate()
    
    const [isChecked, setIsChecked] = useState(false);
    const [isChecked1, setIsChecked1] = useState(false);
    const [isChecked2, setIsChecked2] = useState(false);

    const [btnColor, setBtnColor] = useState('pink');
    const [cusorPointer, setCursorPointer] = useState('default');
    const [btnDisabled, setBtnDisabled] = useState('true');


    const [containerBackgroundColor, setContainerBackgroundColor] = useState('white');
    const [containerBackgroundColor1, setContainerBackgroundColor1] = useState('white');
    const [containerBackgroundColor2, setContainerBackgroundColor2] = useState('white');

    const [containerBorderColor, setContainerBorderColor] = useState('Gray');
    const [containerBorderColor1, setContainerBorderColor1] = useState('Gray');
    const [containerBorderColor2, setContainerBorderColor2] = useState('Gray');
  
    const handleRadioChange = () => {
        setIsChecked(!isChecked); 
        setContainerBackgroundColor(isChecked ? 'white' : 'pink');
        setContainerBorderColor(isChecked ? 'Gray' : '#C32F07');


        setIsChecked1(false); 
        setContainerBackgroundColor1('white');
        setContainerBorderColor1("Gray")

        setIsChecked2(false); 
        setContainerBackgroundColor2('white');
        setContainerBorderColor1("Gray")


        setBtnColor('#C32F07')
        setCursorPointer('pointer');
        setBtnDisabled('false');

    };

    const handleRadioChange1 = () => {
      
        setIsChecked1(!isChecked1); 
        setContainerBackgroundColor1(isChecked1 ? 'white' : 'pink');
        setContainerBorderColor1(isChecked1 ? 'Gray' : '#C32F07');
        
        setIsChecked(false);
        setContainerBackgroundColor('white');
        setContainerBorderColor("Gray")

        setIsChecked2(false);
        setContainerBackgroundColor2('white');
        setContainerBorderColor2("Gray")

        setBtnColor('#C32F07')
        setCursorPointer('pointer');
        setBtnDisabled('false');

    };


    const handleRadioChange2 = () => {
    
        setIsChecked(false); 
        setContainerBackgroundColor('white');
        setContainerBorderColor("Gray")
        
        
        setIsChecked1(false); 
        setContainerBackgroundColor1('white');
        setContainerBorderColor1("Gray")

        setBtnColor('#C32F07')
        setCursorPointer('pointer');
        // setBtnDisabled(null);


        setIsChecked2(!isChecked2); 
        setContainerBackgroundColor2(isChecked2 ? 'white' : 'pink');
        setContainerBorderColor2(isChecked2 ? 'Gray' : '#C32F07');
    };


    const submit = () =>{

        if(isChecked){
            navigate('/builder')
        }

        else if(isChecked1){
            navigate('/supplier')
        }

        else if(isChecked2){
            navigate('/worker')
        }
    }
  return (
    <div>
        <section className='signupSection'>
            <div className='signupSectionImg'>
                <img src={signUpBg} alt="" />
                <h2>Join Bilding</h2>
            </div>
            
            <div className='categoryDiv'>

                <div className='cateEach' onClick={handleRadioChange} style={{ backgroundColor: containerBackgroundColor , borderColor: containerBorderColor }}>
                    <p>I’m a builder looking  to <br /> hire top professionals.</p>
                    <input type="radio" id="radio" name="radio" checked={isChecked} onChange={handleRadioChange}></input>
                </div>

                <div className='cateEach'onClick={handleRadioChange1} style={{ backgroundColor: containerBackgroundColor1 , borderColor: containerBorderColor1 }}>
                    <p>I’m a supplier, providing <br />goods for projects.</p>
                    <input type="radio" id="radio" name="radio" checked={isChecked1} onChange={handleRadioChange1}></input>
                </div>

                <div className='cateEach' onClick={handleRadioChange2} style={{ backgroundColor: containerBackgroundColor2 , borderColor: containerBorderColor2}}>
                    <p>I’m a service provider, <br /> looking for work.</p>
                    <input type="radio" id="radio" name="radio" checked={isChecked2} onChange={handleRadioChange2}></input>
                </div>
            </div>

            <button 
                style={{backgroundColor : btnColor, cursor: cusorPointer}} 
                disabled ={false}
                onClick={submit}
                >Get Started
            </button>
            <span>Already have an account ? <Link to={'/login'}>Log in</Link></span>
        </section>
    </div>
  )
}

export default SignUp