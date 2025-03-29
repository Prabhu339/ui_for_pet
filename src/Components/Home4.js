import React from 'react'

import { World } from './Home3'
const Home4 = () => {
    
  return (
    <div>
        <h2  className='text-center bg-secondary-subtle p-2'>PetAvenue Across The Cities</h2>
      <div className='row p-3'>
      {
World.map((data,index)=>{
    return(
        <div className='card col-sm-6 col-md-6 col-lg-4 col-xl-3 vil' key={index}>
           
            <img src={data.image} />
           <button className='btn bg-danger-subtle'> <b>Pet Grooming in  {data.name}</b></button>
        </div>
    )
})
        }
      </div>
    </div>
  )
}

export default Home4