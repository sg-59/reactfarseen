import React, { useState } from 'react'
import axios from 'axios'
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBInput,
    MDBIcon,
    MDBCheckbox
  }
  from 'mdb-react-ui-kit';

const Signup = () => {

    const [data,setData]=useState({
        name:String,
        email:String,
        mobile:Number,
        password:String
    })
    const [name,setName]=useState('Signup')

    function handlechange(event){
       const {name,value} = event.target

       setData({...data,[name]:value})

    }

    async function display(){
        try{
            const finaloutput=await axios.post('http://localhost:3000/api/storeData',data)
            console.log(finaloutput.data);
            if(finaloutput.data.status=="success"){
      setName("signup success")
            }
        }catch(err){
console.log("*******************************err",err);

        }
 
      
    }

    

  return (
    <MDBContainer fluid>

    <MDBCard className='text-black m-5' style={{borderRadius: '25px'}}>
      <MDBCardBody>
        <MDBRow>
          <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>

            <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">{name}</p>

            <div className="d-flex flex-row align-items-center mb-4 ">
              <MDBIcon fas icon="user me-3" size='lg'/>
              <MDBInput name='name' label='Your Name' id='form1' type='text' className='w-100' onChange={handlechange}/>
            </div>

            <div className="d-flex flex-row align-items-center mb-4">
              <MDBIcon fas icon="envelope me-3" size='lg'/>
              <MDBInput name='email' label='Your Email' id='form2' type='email' onChange={handlechange}/>
            </div>

            <div className="d-flex flex-row align-items-center mb-4">
              <MDBIcon fas icon="envelope me-3" size='lg'/>
              <MDBInput name='mobile' label='Your Mobile' id='form4' type='number' onChange={handlechange}/>
            </div>

            <div className="d-flex flex-row align-items-center mb-4">
              <MDBIcon fas icon="lock me-3" size='lg'/>
              <MDBInput name='password' label='Password' id='form3' type='password' onChange={handlechange}/>
            </div>


            <MDBBtn className='mb-4' size='lg' onClick={display}>Signup</MDBBtn>

          </MDBCol>

          <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
            <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp' fluid/>
          </MDBCol>

        </MDBRow>
      </MDBCardBody>
    </MDBCard>

  </MDBContainer>
  )
}

export default Signup
