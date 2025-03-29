import axios from 'axios'
import React, { useEffect, useState } from 'react'

const LodgingData = () => {
    const [lodge,setLodge]=useState([])
    useEffect(()=>{
       
        axios.get(`http://localhost:4000/stay`)
        .then((res)=>{
            setLodge(res.data)
        })
        .catch((err)=>console.log(err))
    })
  return (
    <>

    <div className='container'>
       
        <table className='table table-bordered'>
           <tr>
           <th>Pet Name</th>
            <th>start Date</th>
            <th>end Date</th>
            <th>Mobile Number</th>
            <th>Requirements</th>
           </tr>
         {lodge.map((data,index)=>{
            return(
         
            <tr>
                <td>{data.petname}</td>
            <td>{data.startdate}</td>
            <td>{data.endDate}</td>
            <td>{data.mobile}</td>
            <td>{data.requirements}</td>
            </tr>

         
            )
         })
         }
        </table>
    </div>

    </>
  )
}

export default LodgingData