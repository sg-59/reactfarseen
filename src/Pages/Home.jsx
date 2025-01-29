import React from 'react'
import { removeData } from '../Redux/Userslice'
import { useDispatch } from 'react-redux'

function Home() {

  const dispatch=useDispatch()

  function display(){
   dispatch(removeData())
  }

  return (
    <div>
        <h1>Welcome to home page</h1>
        <button onClick={display}>Logout</button>
    </div>
  )
}

export default Home