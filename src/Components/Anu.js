import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

const Anu = () => {
    const [app,setApp]=useState([])
    useEffect(()=>{
     
        axios.get(`https://petavenue-backend.onrender.com/blog`)
        .then((res)=>setApp(res.data))
        .catch((err)=>console.log(err))
    })
  return (
    <div>
    <h1>Vlog</h1>
    {app.map((data,index)=>{
        return(
            <div key={index} className='container p-5'>
              <div className='card w-50 text-center'>
              <h2>{data.name}</h2>
              <h2>{data.phone}</h2>
              <img src={data.image} className='w-100'/>
            <NavLink to={`/chinni/${data._id}`}>
            <button className='btn btn-success w-75 m-2 '>Read More#</button>
            </NavLink>
              </div>

            </div>
        )
    })}
    </div>
  )
}

export default Anu