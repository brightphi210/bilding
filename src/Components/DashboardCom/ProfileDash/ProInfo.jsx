import React, { useState } from 'react'
import './profile.css'
import ProSide from './ProSide'

import { FiEdit } from 'react-icons/fi'
import {AiOutlineArrowRight} from 'react-icons/ai'



const ProInfo = () => {

    const [showEdit, setShowEdit] = useState(true)

    const [showEditAdd, setShowEditAdd] = useState(true)

    const handleShowEdit = () =>{
        setShowEdit(!showEdit);
    }


    const handleShowEditAdd = () =>{
        setShowEditAdd(!showEditAdd);
    }

  return (
    <div>
        <section className='profileInfoSection'>
            <h2 className='sett'>Settings</h2>
            <div className='prfileDivFlex'>
                <ProSide />
                <div className='profileGenDiv'>

                    <div className='OneDiv new'>
                        <div className='editDiv'>
                            <h2>Account info</h2>
                            <FiEdit  className='luIcons' onClick={handleShowEdit}/>
                        </div>
                        <hr />


                        {showEdit ? 
                        (<>
                            <div className='formDetails'>
                                <h3>Your name</h3>
                                <p>Bright Philip</p>
                            </div>


                            <div className='formDetails'>
                                <h3>Email address</h3>
                                <p>bright@gmail.com</p>
                            </div>


                            <div className='formDetails'>
                                <h3>Phone number</h3>
                                <p>08094422807</p>
                            </div>
                                
                        </>) : 
                        (<>

                            <form action="" className='proFormDiv'>
                                <div className='formDetails'>
                                    <h3>Your name</h3>
                                    <input type="text" placeholder='Name . . .' />
                                </div>


                                <div className='formDetails'>
                                    <h3>Email address</h3>
                                    <input type="text" placeholder='Email . . .' />
                                </div>


                                <div className='formDetails'>
                                    <h3>Phone number</h3>
                                    <input type="text" placeholder='Phone Number . . .' />
                                </div>
                                <button>Update <AiOutlineArrowRight /></button>
                                <button className='cancle'>Cancle <AiOutlineArrowRight /></button>
                            </form>
                        </>)}




                    </div>

                    <div className='OneDiv'>

                        <div className='editDiv'>
                            <h2>Location info</h2>
                            <FiEdit  className='luIcons' onClick={handleShowEditAdd}/>
                            <hr />
                        </div>


                        {showEditAdd ? 
                        (<>
                            <div className='formDetails'>
                                <h3>Country</h3>
                                <p>Nigeria</p>
                            </div>


                            <div className='formDetails'>
                                <h3>State</h3>
                                <p>Lagos State</p>
                            </div>


                            <div className='formDetails'>
                                <h3>Address</h3>
                                <p>40 Lekki Street, Mile two park, Lagos</p>
                            </div>
                        </>) : 


                        (<>
                            <form action="" className='proFormDiv'>
                                <div className='formDetails'>
                                    <h3>Country</h3>
                                    <input type="text" placeholder='Count . .' />
                                </div>


                                <div className='formDetails'>
                                    <h3>State</h3>
                                    <input type="text" placeholder='State . .' />
                                </div>


                                <div className='formDetails'>
                                    <h3>Address</h3>
                                    <input type="text" placeholder='Address.  .' />
                                </div>
                                
                                <button>Update <AiOutlineArrowRight /></button>
                            </form>
                        </>)}

                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default ProInfo
