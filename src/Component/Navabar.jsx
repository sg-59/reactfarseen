import React from 'react'
import { useDispatch } from 'react-redux'
import { removeData } from '../Redux/Userslice'
import { Link } from 'react-router-dom'


const Navabar = ({data,log}) => {


    const displatch=useDispatch()

    function display(){
displatch(removeData())
    }

  return (
    <div>
      <div style={{width:"100%",height:"50px",backgroundColor:"darkblue",display:"flex",alignItems:"center",justifyContent:"space-between",padding:"10px"}}>
        <Link to={'/profile'}><h3 style={{fontSize:"14px",color:"white",cursor:"pointer"}}>Profile</h3></Link>
        <h3  style={{fontSize:"14px",color:"white",cursor:"pointer"}}>{data}</h3>
       {log ? "" : <h3 onClick={display} style={{fontSize:"14px",color:"white",cursor:"pointer",}}>Logout</h3>} 
      </div>
    </div>
  )
}

export default Navabar
