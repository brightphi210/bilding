import React from 'react'
import { useNavigate } from 'react-router-dom'

import BuilderReqCreateONE from '../../Components/Bulider/BuilderCreateReq/BuilderReqCreateONE'
import BuilderReqCreateTwo from '../../Components/Bulider/BuilderCreateReq/BuilderReqCreateTwo'
import BuilderReqCreateThree from '../../Components/Bulider/BuilderCreateReq/BuilderReqCreateThree'
import Header from '../../Components/LoginFloder/Header'

import myVideo from './animation_lnkaatit.mp4'

import { useState } from 'react'


const BuilderProReq = () => {

  const navigate = useNavigate()

  const [items, setItems] = useState([
    {name: "", amount: ""},
  ])

  const [newData, setNewData] = useState({
    title : "",
    category : "",
    location : "",
    description : "",
    image1 : null,
    image2 : null,
    uploaded_items: items,
  })


  // const handleAdd = (e) => {
  //   e.preventDefault();
  //   setItems([...items, {name: "", amount: ""}])
  //   console.log('Item Add!!', newData.items)
  // }


  const handleAdd = (e) => {
    e.preventDefault();
    const updatedItems = [...items, { name: "", amount: "" }];
    setItems(updatedItems);
    setNewData({ ...newData, uploaded_items: updatedItems }); // Update uploaded_items in newData
    console.log('Item Add!!', updatedItems);
  };

  const handleRemove = (e) => {
    const list = [...items];
    list.splice(e, 1)
    setItems(list)
    setNewData({...newData, uploaded_items: list})
  }


  const handleChange = (e, index) => {
    const { name, value, type, files } = e.target;

    if (type === 'file') {
      setNewData({ ...newData, [name]: files[0] });
    } 

    else if (name === 'name' || name === 'amount') {
      const newItems = [...newData.uploaded_items];
      newItems[index][name] = value;
      setNewData({ ...newData, uploaded_items: newItems });
    }
    else {
      setNewData({ ...newData, [name]: value });
    }
  };
  
  const newDataNew = JSON.stringify(newData.uploaded_items);

  console.log(newDataNew)
  
  let url = 'https://bildingapi.onrender.com/api/requests'

  const [isLoading, setIsLoading] = useState(false);
  const token = localStorage.getItem('authToken');

  const handleSubmit = async () => {
    setIsLoading(true);
    // e.preventDefault();
    try{

      const newFormData = new FormData();
      
      newFormData.append('title', newData.title);
      newFormData.append('category', newData.category);
      newFormData.append('location', newData.location);
      newFormData.append('description', newData.description);
      newFormData.append('image1', newData.image1);
      newFormData.append('image2', newData.image2);
      newFormData.append('uploaded_items', newDataNew);

      
      // console.log(newData.uploaded_items[0])
      const response = await fetch(url, {
        
        method: 'POST',
        headers: { 
          'Authorization': `Bearer ${token}`
        },

        body: newFormData,
      })

      if (response.ok) {
        const data = await response.json()
        console.log('Product Successfully Created!', data);
        navigate('/dashboard')
      } else {
        console.error( response.error);
        
      }

    }catch(err){
      console.error("There was an error creating request !!!");
    }
  } 




  const [page, setPage] = useState(0)

  const FormTitle = ["1", "2", "3", ]

  const PageDisplayed = () => {
    if(page === 0){
      return <BuilderReqCreateONE 
      newData={newData} 
      setNewData={setNewData} 
      onSubmit={handleSubmit} 
      onChange={handleChange}
      handleAdd = {handleAdd}
      handleRemove = {handleRemove}

      />
    }
    if(page === 1){
      return <BuilderReqCreateTwo 
      newData={newData} 
      setNewData={setNewData} 
      onSubmit={handleSubmit} 
      onChange={handleChange}
      handleAdd = {handleAdd}
      handleRemove = {handleRemove}

      />
    }
    if(page === 2){
      return <BuilderReqCreateThree 
      newData={newData} 
      setNewData={setNewData} 
      onSubmit={handleSubmit} 
      onChange={handleChange}
      handleAdd = {handleAdd}
      handleRemove = {handleRemove}
      />
    }
  }

  let myClassName1 = ''
  let myClassName2 = ''
  let myClassName3 = ''


  let myCarolBtn1 = ''
  let myCarolBtn2 = ''
  let myCarolBtn3 = ''

  if(page === 0){
    myClassName1 = 'levelBorder1'
    myClassName2 = ''
    myClassName3 = ''

    myCarolBtn1 = 'carolBtn1'
    myCarolBtn2 = ''
    myCarolBtn3 = ''
  }
  
  else if(page === 1){
    myClassName2 = 'levelBorder2'
    myClassName1 = ''
    myClassName3 = ''


    myCarolBtn1 = ''
    myCarolBtn2 = 'carolBtn2'
    myCarolBtn3 = ''
  }
  
  else if (page === 2) {
    myClassName3 = 'levelBorder3'
    myClassName1 = ''
    myClassName2 = ''


    myCarolBtn1 = ''
    myCarolBtn2 = ''
    myCarolBtn3 = 'carolBtn3'
  };

  let myMainBtn1 = '' 

  if(page !== 0){
    myMainBtn1 ='mainBtn1'
  }
  return (
    <div>
        <section>
        <Header />
        <div className="container">
          <h2>Create your Request.</h2>
          <p>Get all the help you need for  your construction project.</p>


          <div className='createLevel'>
            <p className={myClassName1} onClick={()=>{
                setPage(0)
            }}>Request details</p>
            <p className={myClassName2} onClick={()=>{
                setPage(1)
            }}>Items</p> 
            <p className={myClassName3} onClick={()=>{
                setPage(2)
            }}>Request Budget</p> 
          </div>


          <div className='createBtnDIv'>

            <div>
              {PageDisplayed()}
            </div>


            <div className='createCarolDiv'>
              <div className={myCarolBtn1}
                onClick={() => {
                setPage(0);
                }}>
              </div>

              <div 
                className={myCarolBtn2}
                onClick={() => {
                setPage(1);
                }}>
              </div>

              <div 
                className={myCarolBtn3}
                onClick={() => {
                setPage(2);
                }}>
              </div>
            </div>

            <div className='mainBtnDiv'>
              <h4 
                className={myMainBtn1}
                onClick={() => {
                  setPage(page - 1);
                }}
              >
                {page === 0 ? null : "Back"}
              </h4>

              
              <button 
                  className='mainBtn2'
                  onClick={() =>{
                    if (page === FormTitle.length - 1) {
                      // alert("FORM SUBMITTED");
                      handleSubmit()
                      // console.log(formData);
                    } else {
                      setPage((currPage) => currPage + 1);
                    }
                  }}
                  
                  >
                  {page === 0 ? "Create Request" : page === 1 ? "Next" : "Submit"}
              </button>
            </div>


            {isLoading === true && (
              <div className='creatingLoadingDiv'>
                <div className='creatingLoading'>
                  <video controls={false} autoPlay loop className='video'> 
                    <source src={myVideo} type="video/mp4" />
                  </video>
                </div>
              </div>
            )}


          </div>
        </div>        
      </section>
    </div>
  )
}

export default BuilderProReq