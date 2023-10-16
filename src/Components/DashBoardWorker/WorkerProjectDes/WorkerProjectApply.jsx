import React from 'react'
import './workerApply.css'

const WorkerProjectApply = () => {

    let url = ""
    const postData = async () =>{
        try {
            const response = await fetch (url, {
                method: 'POST',
                headers : {
                    "Content-Type": "application/json"
                }

                
            }) 
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
                    <form action="">
                        <div className='createOneDiv'>
                            <label htmlFor="">Amount</label>
                            <input type="number" placeholder='Amount(NGN 20,000,000)'/>
                        </div>

                        <div className='createOneDiv'>
                            <label htmlFor="">Duration:</label>
                            <input type="text" placeholder='Enter Duration (3-5 yrs)'/>
                        </div>

                        <div className='createOneDiv'>
                            <label htmlFor="">Application letter</label>
                            <textarea name="" id="" cols="30" rows="10" placeholder=''>

                            </textarea>
                        </div>

                        <div className='createOneDiv'>
                        <input 
                            type="file" 
                            id='image' 
                            name="image2" 
                            accept="image/*"
                            // onChange={onChange} 
                            required
                            />
                        </div>
                    </form>
                </div>
            </section>
        </section>
    </div>
  )
}

export default WorkerProjectApply