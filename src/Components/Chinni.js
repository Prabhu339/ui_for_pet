import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import axios from 'axios'
import AddBlog from './AddBlog'

const Chinni = () => {
    const {_id}=useParams();
    const [off,setOff]=useState([])
    useEffect(()=>{
        axios.get(`http://localhost:4000/blog/${_id}`)
        .then((res)=>setOff(res.data))
        .catch((err)=>console.log(err))
    })
   
  return (
    <div className='container p-5'>
        <div className='row'>
            <div className=''>
            <img src={off.image} className='w-75'/>
            <h2>{off.title}</h2>
    <p>{off.content}</p>
   
    <h5>{off.description}</h5>
   
            </div>
          
        </div>
    </div>
  )
}

export default Chinni