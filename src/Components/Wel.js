import React from 'react'
import useCallApi from './CallApi'

const Wel = () => {
  const booking=useCallApi(`http://localhost:4000/book`)
  const enquiries=useCallApi("http://localhost:4000/enquiries")
  return (
    <div className='container p-5'>
      <h3>Welcome To Dashboard</h3>
    
      <div className='row'>
      <div className='col-lg-4'>
        <div className='card text-center shadow'>
          <div className='card-body'>
           
            <h5 className='card-title'>{enquiries.length}</h5>
            <h2>Quiries</h2>
           </div>
        </div>

      </div>
      <div className='col-lg-4'>
      <div className='card text-center shadow'>
        <div className='card-body'>
        <h5 className='card-title'>{booking.length}</h5>
        <h3>Bookings</h3>
        </div>
      </div>
    </div>
    
    </div>
    
    </div>
  )
}

export default Wel