import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

const BlogMore = () => {
  const [one,setone]=useState([])
  useEffect(()=>{
axios.get(`http://localhost:4000/blog`)
.then((res)=>setone(res.data))
.catch((err)=>console.log(err))
  })
  return (
    <div className='container p-4'>
      <h1>bolg</h1>
     {one.map((data,india)=>{
      return(
        <div key={india}>
          <img src={data.image} className='w-50'/>
          <h2>{data.title}</h2>
          <p>{data.content}</p>
         
          {/*<p>{data.category}</p>
          <p>{data.description}</p>*/}

          <NavLink to={`/BlgDetails/${data._id}`}>
              <button className='btn btn-danger'>Know More!</button>
          </NavLink>
          
        </div>
      )
     })}
               
    </div>
  )
}

export default BlogMore