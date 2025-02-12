import React, { useEffect, useState } from 'react'
import Navabar from '../Component/Navabar'
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBBtn
  } from 'mdb-react-ui-kit';
import { getProfileData, removeProfile } from '../Api';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { removeData } from '../Redux/Userslice';

function Profile() {

   const LoginData=useSelector(state=>state.userData.userInfo)
const [profile,setProfile]=useState()

const dispatch=useDispatch()
   if(LoginData){
var userId=LoginData.userId
   }

    useEffect(()=>{
getProfileData(userId).then((data)=>{
    console.log("finalyy",data);
    setProfile(data)
})
    },[])


    function removeAccount(){
        removeProfile(userId).then((data)=>{
            if(data=="deleted"){
dispatch(removeData())
            }
        })
    }

  return (
    <div>
  <Navabar data={"upadate profile"} log={true}/>
  <div style={{width:"40%",height:"400px",position:"absolute",left:"300px",top:"150px"}}>
  <MDBCard>
      <MDBCardBody>
        <MDBCardTitle>Profile-Info</MDBCardTitle>
        <MDBCardText>
        {profile?.name}
        </MDBCardText>
        <MDBCardText>
        {profile?.email}
        </MDBCardText>
        <MDBCardText>
        {profile?.mobile}
        </MDBCardText>
      </MDBCardBody>
      <MDBBtn className='bg-success'>update</MDBBtn>
      <MDBBtn onClick={removeAccount} className='bg-danger'>Delete</MDBBtn>
    </MDBCard>
    </div>
        </div>
  )
}

export default Profile