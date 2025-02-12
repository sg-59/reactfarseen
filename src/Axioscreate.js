import axios from "axios"

const Urls="http://localhost:3000"

const tokenValue=JSON.parse(JSON.parse(localStorage.getItem('persist:AbhinathMern')).userInfo)&&JSON.parse(JSON.parse(localStorage.getItem('persist:AbhinathMern')).userInfo).token
console.log("final answer in token",tokenValue);


export const publicRequest=axios.create({
    baseURL:Urls,
   
})

export const tokenRequest=axios.create({
    baseURL:Urls,
    headers:{token:tokenValue}
})