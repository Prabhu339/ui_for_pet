import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Bookings = () => {
    const [order,setOrder]=useState([])
    useEffect(()=>{
        axios.get(`https://petavenue-backend.onrender.com/book`)
        .then((res)=>{
            setOrder(res.data)
        })
        .catch((err)=>console.log(err))
    })
  return (
    <>
        <h3><b>Bookings</b></h3>
       
         <div className='row'>
         {order.map((data,india)=>{
            return(
                <div className="card col-md-4 col-lg-12 col-xl-12 p-3 m-2" key={india}>
                   <div className='table table-bordered'>
                    <tr>
                      <th>name</th>
                      <th>email</th>
                      <th>phone</th>
                      <th>description</th>
                      
                      
                    </tr>
                    
                    <tr>
                    <td>{data.name}</td>
                    <td>{data.email}</td>
                    <td>{data.phone}</td>
                    <td>{data.comment}</td>
                    
                    </tr>
                   </div>
                </div>
             
               
            )
          })}  
            
         </div>
        
    </>
  )
}

export default Bookings