import React from 'react'

import { Link } from 'react-router-dom';

import { useState } from 'react';

import { useNavigate } from 'react-router-dom';


const BuilderProReqOption = () => {

    let navigate = useNavigate()
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


    const submit = () =>{

        if(isChecked1){
            navigate('/builder/request/create')
        }

        else if(isChecked2){
            navigate('/builder/project/create')
        }
    }
  return (
    <div>
        <section className='buiderRequestSection'>
            <h2>How would you like to get started?</h2>
            <p>Get all the help you need for your construction project.</p>

            <div className='builderRequestFlex'>
                <div className='builderRequestOne' style={{ backgroundColor: containerBackgroundColor1 , borderColor: containerBorderColor1 }}>
                   <p>
                        Create a new request, <br />
                        for supplies.
                   </p>
                   <input type="radio" className='radioBuid'  checked={isChecked1} onChange={handleRadioChange1}/>
                </div>

                <div className='builderRequestOne' style={{ backgroundColor: containerBackgroundColor2 , borderColor: containerBorderColor2 }}>
                    <p>Create a project, and <br /> source for skilled labor.</p>
                    <input type="radio"  className='radioBuid' checked={isChecked2} onChange={handleRadioChange2}/>
                </div>
                
            </div>

            <button style={{backgroundColor : btnColor, cursor: cusorPointer}} onClick={submit}>Get Started</button>
            <Link to={'/dashboard'}><p>Skip and head straight to your dashboard.</p></Link>
        </section>
    </div>
  )
}

export default BuilderProReqOption