import React, { useState } from 'react'
import ProSide from './ProSide'
import proImage from './prof.png'
import { FiEdit } from 'react-icons/fi'
import {AiOutlineArrowRight} from 'react-icons/ai'
import { Link } from 'react-router-dom'
const ProSett = () => {


    const [proSettEdit, setProSettEdit] = useState(true)
    const [proSettEditTwo, setProSettEditTwo] = useState(true)

    const handleProSettEdit = () => {
        setProSettEdit(!proSettEdit)
    }

    const handleProSettEditnew = (e) => {
        setProSettEditTwo(!proSettEditTwo)
    }

    const handleProSettEditnewa = (e) => {
        setProSettEditTwo(!proSettEditTwo)
    }


    const handleProSettEdita = (e) => {
        e.preventDefault()
        setProSettEdit(!proSettEdit)
    }



    const url = 'https://bildingapi.onrender.com/auth/edit'

    const [formData, setFormData] = useState ({
        address: '',
        bvn: '',
    });

  return (
    <div>
        <section className='profileInfoSection'>
            <h2 className='sett'>Settings</h2>
            <div className='prfileDivFlex'>
                <ProSide />
                <div className='OneDivSett'>
   

                    {proSettEditTwo ? 
                    (<>
                        <img src={proImage} alt="" />
                        <div className='chaPicDiv'>
                            <h2>Change Profile Picture</h2>
                            <FiEdit  className='luIconss' onClick={handleProSettEditnew}/>
                        </div>
                        <p>Electrical</p>
                        
                    </>): 
                    (<>              
                        <form action="" className='proSettCat'>
                        <div className='profilePicsSett'>
                            <input type="file" accept="image/*"  />
                        </div>

                        
                        <div className='createOneDiv newCreate'>
                            <input type="text" placeholder='Position e.g(Electrician)'/>
                        </div>

                        <Link to={'/dashboard/profile/modal'}><button>Update <AiOutlineArrowRight /></button></Link>  
                        <button onClick={handleProSettEditnewa} className='viewSett'>Cancle</button>


                        </form>
                    </>)}
                    
                    <div className='twoDivSett'>
                        <div className='editDivSett'>
                            <h2>Description</h2>
                            <FiEdit  className='luIcons' onClick={handleProSettEdit}/>
                        </div>

                        {proSettEdit ? 
                        (<>
                            <hr />
                            <p>
                                pLorem ipsum dolor sit amet consectetur. Nibh aenean sit nulla 
                                vitae cursus dignissim vel nisl tincidunt. Ipsum ipsum pellentesque 
                                tempor diam lobortis. Ut nisl feugiat Lorem ipsum dolor sit amet consectetur. 
                                Nibh aenean sit nulla vitae cursus dignissim vel nisl tincidunt. Ipsum 
                                ipsum pellentesque tempor diam lobortis. Ut nisl feugiatLorem ipsum dolor 
                                sit amet consectetur. Nibh aenean sit nulla vitae cursus dignissim vel nisl 
                                tincidunt. Ipsum ipsum pellentesque tempor diam lobortis. Ut nisl feugiatLorem 
                                ipsum dolor sit amet consectetur. Nibh aenean sit nulla 
                            </p>
                        </>):
                        (<>
                            <form action="" className='proSettDes'>
                                <textarea name="" placeholder='Description'/>
                                <Link to={'/dashboard/profile/modal'}><button className='cancle'>Update <AiOutlineArrowRight /></button></Link>
                                <button onClick={handleProSettEdita}>Cancle</button>
                            </form>
                        </>)
                        }
                    </div>
                </div>
            </div>
        </section>
        
    </div>
  )
}

export default ProSett