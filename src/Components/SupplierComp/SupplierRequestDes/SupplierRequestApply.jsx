import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';


const SupplierRequestApply = ({selectedData}) => {

  console.log(selectedData)

  const token = localStorage.getItem('authToken');

  const [isLoading, setIsLoading] = useState(false)

  const navigate = useNavigate()

  const { id } = useParams()

  const [request, setRequest] = useState([])
  const [item, setItem] = useState([])
  
  let url = `https://bildingapi.onrender.com/api/requests/${id}`
  let urlItems = `https://bildingapi.onrender.com/api/items/${id}`


  const fetccData = async () => {

    try{
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          "Authorization": `Bearer ${token}`
        },

      })


      const data = await response.json()
      setRequest(data)

    }catch(er){
      console.log("Error fetching project data !!! ")
    }
  }


  useEffect(()=>{
    fetccData()
  }, [])


  const fetchItem = async () => {

    try{
      const response = await fetch(urlItems, {
        method: 'GET',
        headers: {
          "Authorization": `Bearer ${token}`
        },

      })


      const data = await response.json()
      setItem(data)

      console.log(data)

    }catch(er){
      console.log("Error fetching project data !!! ")
    }
  }


  useEffect(()=>{
    fetchItem()
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
  let url = `https://bildingapi.onrender.com/api/bids/${request.id}`
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


// const [myItems, setMyItems] = useState([]);

// const newItems = request.items
// (newItems.map((item)=>(
//   console.log(item)
//   )))


const formatAmount = (value) => {
  if (value === null || value === undefined) return 0; 
  return value.toLocaleString('en-US', {
    style: 'currency',
    currency: 'NGN',
    minimumFractionDigits: 2,
  });
};
  return (
    <div>
        <section className='applySection'>
            <div className='applyFlexDiv'>
              <h2 className='applyTech'>Apply to fulfil this request.</h2>
              <Link to={'/dashboard'}><button>Cancle</button></Link>
            </div>
            {request && ( <>
            <section className=''>
                {console.log(request)}
                <div className='projectDesBord'>
                <div className='copyDiv'>
                    <div className=''>
                        {/* <span>https://bilding.contruction/project....</span> */}
                        {/* <span className='linkBtn'>Copy project link</span> */}
                    </div>

                    <p>Created {request.time}</p>
                </div>

                <div className='productDetails'>
                    <h2>Project details</h2>
                    <h3>{request.title}</h3>
                    <p>
                        {request.description}
                    </p>
                </div>

                <div className='productDetails'>
                    <h2>Project category:</h2>
                    <p>{request.category}</p>
                </div>
                </div>


                <div className='bidDiv'>
                    <h2>Bid</h2>
                    <form action="" onSubmit={postData}>
                        <div className='createOneDiv '>
                            <div className='itemDivRequest'>
                              <div>
                                <h3>Item</h3>
                                <p>{item.map((myItem)=>(
                                    myItem.name
                                  ))}
                                </p>
     
                              </div>

                              <div>
                                <h3>Amount</h3>
                                <p>{formatAmount(item.map((myItem)=>(
                                    myItem.amount
                                  )))}
                                </p>
                              </div>

                              <div>
                                <h3>Bid</h3>
                                <input 
                                type="number" 
                                placeholder='NGN'
                                name='amount'
                                onChange={handleChange}
                                value={formData.amount}
                                required
                            />
                              </div>

                            </div>

                        </div>


                        <div>
                          <h2>Delivery inclusive:</h2>
                          <div className='willDeliver'>
                            <input type="checkbox" />
                            <label>I’ll be delivering the goods.</label>
                          </div>

                          <div className='createOneDiv delivery'>
                            <label htmlFor="">Delivery duration:</label>
                            <input type="text" placeholder='(e.g) 2 months '/>
                          </div>
                        </div>

                        <div className='createOneDiv bidFormDiv'>
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

                        <div className='createOneDiv bidFormDiv'>
                            <label htmlFor="">Application letter</label>
                            <textarea 
                                name="applicationletter" 
                                value={formData.applicationletter}
                                onChange={handleChange}
                                required
                        />
                        </div>

                        <div className='createOneDiv bidFormDiv'>
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

export default SupplierRequestApply