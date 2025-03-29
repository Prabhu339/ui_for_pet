import React from 'react'
import { BlogData } from './BlogData'
const BlogExtra = () => {
   
  return (
    <div className='row'>
        {BlogData.map((data,index)=>{
    return(
       
         <div key={index}  className=' col-sm-6 col-md-4 col-lg-4 col-xl-4 p-3 text-center'>
         <img src={data.img} className='w-100'/>
         <b className='btn btn-warning w-100'>{data.name}</b>
            </div>  
 
    )
   })}
    </div>
  )
}

export default BlogExtra