import React from 'react'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import Home from './Pages/Home'
import { useSelector } from 'react-redux'
import Profile from './Pages/Profile'
import Update from './Pages/Update'

function App() {

  const data=useSelector(state=>state.userData.userInfo)

  console.log("************************************",data);
  if(data){
    var token=data.token
  }
  
console.log(token);

  const router=createBrowserRouter([
    {
      path:'/',
      element:token ? <Home/> : <Login/>
    },
    {
      path:'/signup',
      element:<Signup/>
    },
    {
      path:"/profile",
      element:token ? <Profile/> : <Login/>
    },
    {
      path:'/update',
      element:token ? <Update/> : <Login/>
    }
   
  ])
  return (
<RouterProvider router={router}></RouterProvider>
  )
}

export default App