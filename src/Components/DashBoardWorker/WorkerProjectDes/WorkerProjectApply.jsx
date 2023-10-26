import React from 'react'
import './workerApply.css'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { useParams } from 'react-router-dom';


const WorkerProjectApply = ({ selectedData }) => {


    console.log(selectedData)

    const token = localStorage.getItem('authToken');

    const [isLoading, setIsLoading] = useState(false)

    const navigate = useNavigate()

    const { id } = useParams()

    const [project, setProject] = useState([])
    let url = `https://bildingapi.onrender.com/api/projects/${id}`


    const fetccData = async () => {

        try{
          const response = await fetch(url, {
            method: 'GET',
            headers: {
              "Authorization": `Bearer ${token}`
            },
    
          })
    
    
          const data = await response.json()
          setProject(data)
    
        }catch(er){
          console.log("Error fetching project data !!! ")
        }
      }
    
    
      useEffect(()=>{
        fetccData()
      }, [])

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
    
    
    
    
    const postData = async (e) =>{
        e.preventDefault();
        setIsLoading(true);
        let url = `https://bildingapi.onrender.com/api/bids/${project.id}`
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
                navigate('/dashboard/apply/sent')
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
            {project && ( <>
            <section className=''>
                <div className='projectDesBord'>
                {/* {console.log(project)} */}
                <div className='copyDiv'>
                    <div className=''>
                        {/* <span>https://bilding.contruction/project....</span> */}
                        {/* <span className='linkBtn'>Copy project link</span> */}
                    </div>

                    <p>Created {project.time}</p>
                </div>

                <div className='productDetails'>
                    <h2>Project details</h2>
                    <h3>{project.title}</h3>
                    {/* {console.log(selectedData)} */}
                    <p>
                        {project.description}
                    </p>
                </div>

                <div className='productDetails'>
                    <h2>Project category:</h2>
                    <p>{project.categories}</p>
                </div>

                <div className='productDetails'>
                    <h2>Project required skills:</h2>
                    <p>{project.skills}</p>
                </div>

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
                                required
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
                                required
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
                                // placeholder='applicationletter'
                                value={formData.applicationletter}
                                onChange={handleChange}
                                required
                        />
                        </div>

                        <div className='createOneDiv'>
                        <label htmlFor="">Upload CV</label>
                        <input 
                            type="file" 
                            id='images' 
                            name="images" 
                            accept="image/*"
                            onChange={handleChange} 
                            required
                            />
                        </div>

                        <button type='submit'>{isLoading ? 'Loading . . .' : 'Submit application'}</button>
                    </form>
                </div>


            </section>
            </>)}
        </section>
    </div>
  )
}

export default WorkerProjectApply