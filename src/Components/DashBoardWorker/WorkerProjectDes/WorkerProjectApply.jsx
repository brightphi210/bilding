import React from 'react'
import './workerApply.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import jwt_decode from 'jwt-decode';
const WorkerProjectApply = () => {

    const token = localStorage.getItem('authToken');

    // console.log(jwt_decode(token));
    const decodeToken = jwt_decode(token)
    // console.log(decodeToken.user_id);

    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        amount: "",
        duration : "",
        applicationletter : "",
        images: null,
    })


    const handleChange = (e) => {
        const { name, value, type } = e.target;
        const newValue = type === "file" ? e.target.files[0] : value;
        setFormData({ ...formData, [name]: newValue });
    }

    
    
    let url = "https://bildingapi.onrender.com/api/bids/"



    const postData = async (e) =>{
        e.preventDefault();
        try {

            const formDataNew = new FormData();
 
            formDataNew.append('amount', formData.amount);
            formDataNew.append('duration', formData.duration);
            formDataNew.append('applicationletter', formData.applicationletter);
            formDataNew.append('images', formData.images);


            const response = await fetch (url, {
                method: 'POST',
                headers : {
                    "Authorization": `Bearer ${token}`,
                },
                body: formDataNew,
                
            }) 


            if (response.ok) {
                const data = await response.json()
                console.log('Product Successfully Created!', data);
                navigate('/dashboard')
              } else {
                console.error( response.statusText, 'Product Failed to Create');
                
              }
        } catch (error) {
            
        }
    }



  return (
    <div>
        <section className='applySection'>
            <h2 className='applyTech'>Apply to work on this project</h2>
            <section>
                <div className='copyDiv'>
                    <div className=''>
                        <span>https://bilding.contruction/project....</span>
                        <span className='linkBtn'>Copy project link</span>
                    </div>

                    <p>Created Jul 4, 2023</p>
                </div>

                <div className='productDetails'>
                    <h2>Project details</h2>
                    <h3>Electrician to wire a two bedroom apartment complex</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur. 
                        Nibh aenean sit nulla vitae cursus dignissim vel nisl 
                        tincidunt. Ipsum ipsum pellentesque tempor diam lobortis. 
                        la vitae cursus dignisor diam lobortis. Ut nisl feugiatLorem ia 
                    </p>
                </div>

                <div className='productDetails'>
                    <h2>Project category:</h2>
                    <p>Electrical</p>
                </div>

                <div className='productDetails'>
                    <h2>Project required skills:</h2>
                    <p>Building wiring, Conduit wiring, wiring diagram.   </p>
                </div>


                <div className='bidDiv'>
                    <h2>Bid</h2>
                    <form action="" onSubmit={postData}>
                        <div className='createOneDiv'>
                            <label htmlFor="">Amount</label>
                            <input 
                                type="number" 
                                placeholder='Amount(NGN 20,000,000)'
                                name='amount'
                                onChange={handleChange}
                                value={formData.amount}
                            />
                        </div>

                        <div className='createOneDiv'>
                            <label htmlFor="">Duration:</label>
                            <select 
                                placeholder='Title' 
                                className='createSelect'
                                name='duration'
                                value={formData.duration}
                                onChange={handleChange}
                                >
                                <option value="">Durations</option>
                                <option value="1-6months">1-6months</option>
                                <option value="1-2yrs">1-2yrs</option>
                                <option value="1-5yrs">1-5yrs</option>
                            </select>  
                        </div>

                        <div className='createOneDiv'>
                            <label htmlFor="">Application letter</label>
                            <textarea 
                                name="applicationletter" 
                                placeholder='applicationletter'
                                value={formData.applicationletter}
                                onChange={handleChange}
                        />
                        </div>

                        <div className='createOneDiv'>
                        <input 
                            type="file" 
                            id='images' 
                            name="images" 
                            accept="image/*"
                            onChange={handleChange} 
                            required
                            />
                        </div>

                        <button type='submit'>Submit application</button>
                    </form>
                </div>
            </section>
        </section>
    </div>
  )
}

export default WorkerProjectApply