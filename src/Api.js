import axios from "axios";
import { addtoUser } from "./Redux/Userslice";
import { publicRequest, tokenRequest } from "./Axioscreate";

export const SignupDetails=async(data)=>{
    console.log("data",data);
    
    try{
        const finaloutput=await publicRequest.post('/api/storeData',data)
        console.log(finaloutput);
        
        return finaloutput
    }catch(err){

    }
}

export const Logindatass=async(data,dispatch)=>{
    try{
        const a=await publicRequest.post('/login/verifyAccount',data)
        console.log("final output",a.data);
        dispatch(addtoUser(a.data))
    }catch(err){

    }
}

export const getProfileData=async(id)=>{
    try{
        const a=await tokenRequest.get(`/${id}`)
        console.log("final output in profile page",a.data);
        return a.data
    }catch(err){

    }
}

export const removeProfile=async(id)=>{
    try{
const a=await tokenRequest.delete(`/api/removeDatabase/${id}`)
return a.data
    }catch(err){

    }
}