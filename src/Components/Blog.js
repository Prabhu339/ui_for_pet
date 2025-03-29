import React, { useEffect, useState } from 'react'
import { BlogData } from './BlogData'
import { NavLink, useNavigate } from 'react-router-dom'
import axios from 'axios'


const Blog = () => {
  const [ball,setball]=useState([])
  useEffect(()=>{
    axios.get(`http://localhost:4000/blog`)
    .then((res)=>setball(res.data))
    .catch((err)=>console.log(err))
  })
  const navigate=useNavigate();
  const ap=()=>{
    navigate('/')
  }
  return (
    <div className='row'>
      
    {
      ball.map((data,index)=>{
        return(
         <div className='col-md-4'>
           <div key={index} className='p-2'>
            
            <img src={data.image} className='w-100'/>
            <p className='text-danger'>Breed</p>
            
            <NavLink to={`/chinni/${data._id}`}>
            <button className='btn btn-danger'>Konw more</button>
            </NavLink>
          </div>
         </div>
        )
      })
    }
    
    </div>
  )
}

export default Blog