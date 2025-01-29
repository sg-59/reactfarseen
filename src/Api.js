import axios from "axios";
import { addtoUser } from "./Redux/Userslice";

export const SignupDetails=async(data)=>{
    console.log("data",data);
    
    try{
        const finaloutput=await axios.post('http://localhost:3000/api/storeData',data)
        console.log(finaloutput);
        
        return finaloutput
    }catch(err){

    }
}

export const Logindatass=async(data,dispatch)=>{
    try{
        const a=await axios.post('http://localhost:3000/login/verifyAccount',data)
        console.log("final output",a.data);
        dispatch(addtoUser(a.data))
    }catch(err){

    }
}