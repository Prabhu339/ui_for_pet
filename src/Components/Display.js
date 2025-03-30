import React, { useContext, useEffect, useMemo, useState } from 'react'
import Wel from './Wel'
import Enquiry from './Enquiry'
import Blog from './Blog'
import Contact from './Contact'
import LodgingData from './LodgingData'
import Bookings from './Bookings'
import AddBlog from './AddBlog'
import { loginCheck } from '../App'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Display = () => {
  const [token,setToken]=useContext(loginCheck)
const [view,setView]=useState("")
const DisplayView=useMemo(()=>{
  if(view===""){return <Wel/>}
  else if(view==="enquiry"){
    return <Enquiry/>
  }
  else if(view==="blog"){
    return <Blog/>    
  }
  else if(view==="booking"){
    return <Bookings  />
  }
  else if(view==="lodging"){
    return <LodgingData />
  }
  else if(view==="addblog"){
    return <AddBlog/>
  }
},[view])

useEffect(()=>{
  axios.get(`https://petavenue-backend.onrender.com/login`,{
    headers:{"x-token":token}}
  )
  .then((res)=>{
    console.log(res)
  })
  .catch((err)=>console.log(err))
},[])

const navigate=useNavigate();
if(!token){
  navigate('/login')
} 

  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-lg-3'>
          <aside>
            <button onClick={()=>setView("enquiry")}>Quiries</button>
            <button onClick={()=>setView("blog")}>blog</button>
            <button onClick={()=>setView("booking")}>Bookings</button>
            <button onClick={()=>setView("lodging")}>LodgingData</button>
           
            <button onClick={()=>setView("addblog")}>AddBlog</button>
            
           
          </aside>
        </div>
        <div className='col-lg-9'>
          {DisplayView}
        </div>
      </div>
    </div>
  )
}

export default Display