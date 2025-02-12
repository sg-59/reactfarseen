import React from 'react'
import { removeData } from '../Redux/Userslice'
import { useDispatch } from 'react-redux'
import Navabar from '../Component/Navabar'

function Home() {

  return (
    <div>
      <Navabar/>
      <h1 style={{color:"lightblue",position:"absolute",top:"250px",left:"40%"}}>Home page</h1>
    </div>
  )
}

export default Home