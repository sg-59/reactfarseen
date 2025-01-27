import React from 'react'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import Home from './Pages/Home'

function App() {
  const router=createBrowserRouter([
    {
      path:'/',
      element:<Login/>
    },
    {
      path:'/signup',
      element:<Signup/>
    },
    {
      path:"/home",
      element:<Home/>
    }
  ])
  return (
<RouterProvider router={router}></RouterProvider>
  )
}

export default App