import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Bookings = () => {
    const [order,setOrder]=useState([])
    useEffect(()=>{
        axios.get(`http://localhost:4000/book`)
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
                <div className="card col-md-4 p-3 m-2" key={india}>
                   <div className='table table-bordered'>
                    <tr>
                      <th>name</th>
                      <th>email</th>
                      <th>phone</th>
                      <th>date</th>
                      <th>time</th>
                      
                    </tr>
                    <tr>
                    <td>chintu</td>
                    <td>chintu@gmail.com</td>
                    <td>1/1/2025</td>
                    <td>2:00pm</td>
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