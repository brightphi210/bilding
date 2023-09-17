import React from 'react'
import './builderRequest.css'

import { Link } from 'react-router-dom';

import { useState } from 'react';
const BuilderRequest = () => {

    const [isChecked1, setIsChecked1] = useState(false);
    const [isChecked2, setIsChecked2] = useState(false);

    const [containerBackgroundColor1, setContainerBackgroundColor1] = useState('white');
    const [containerBackgroundColor2, setContainerBackgroundColor2] = useState('white');

    const [containerBorderColor1, setContainerBorderColor1] = useState('Gray');
    const [containerBorderColor2, setContainerBorderColor2] = useState('Gray');

    const [btnColor, setBtnColor] = useState('pink');
    const [cusorPointer, setCursorPointer] = useState('default');


    const handleRadioChange1 = () => {
        setIsChecked1(!isChecked1); 
        setContainerBackgroundColor1(isChecked1 ? 'white' : 'pink');
        setContainerBorderColor1(isChecked1 ? 'Gray' : '#C32F07');

        setIsChecked2(false); 
        setContainerBackgroundColor2('white');
        setContainerBorderColor2("Gray")

        setBtnColor('#C32F07')
        setCursorPointer('pointer');

    };

    const handleRadioChange2 = () => {
        setIsChecked2(!isChecked2); 
        setContainerBackgroundColor2(isChecked2 ? 'white' : 'pink');
        setContainerBorderColor2(isChecked2 ? 'Gray' : '#C32F07');

        setIsChecked1(false); 
        setContainerBackgroundColor1('white');
        setContainerBorderColor1("Gray")

        setBtnColor('#C32F07')
        setCursorPointer('pointer');

    };
  return (
    <div>
        <section className='buiderRequestSection'>
            <h2>What would you like to get started with?</h2>
            <p>Get all the help you need for your construction project.</p>

            <div className='builderRequestFlex'>
                <div className='builderRequestOne' style={{ backgroundColor: containerBackgroundColor1 , borderColor: containerBorderColor1 }}>
                   <p>
                        Create a new request, <br />
                        for labor or supplies.
                   </p>
                   <input type="radio" className='radioBuid'  checked={isChecked1} onChange={handleRadioChange1}/>
                </div>

                <div className='builderRequestOne' style={{ backgroundColor: containerBackgroundColor2 , borderColor: containerBorderColor2 }}>
                    <p>Search Bilding for <br /> supplies or labor.</p>
                    <input type="radio"  className='radioBuid' checked={isChecked2} onChange={handleRadioChange2}/>
                </div>
                
            </div>

            <Link to={'/builder/create'}><button style={{backgroundColor : btnColor, cursor: cusorPointer}}>Get Started</button></Link>
            <p>Skip and head straight to your dashboard.</p>
        </section>
    </div>
  )
}

export default BuilderRequest
