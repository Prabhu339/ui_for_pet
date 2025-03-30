import React, { useState } from 'react'
import lod1 from '../assets/lod1.jpg'
import lod2 from '../assets/lod2.jpg'
import lod3 from '../assets/lod3.jpg'
import lod4 from '../assets/lod4.jpg'
import lod5 from '../assets/lod5.jpg'
import lod6 from '../assets/lod6.jpg'
import lod7 from '../assets/lod7.jpg'
import lod8 from '../assets/lod8.jpg'
import axios from 'axios'
const PetStay = () => {
   const [petname,setPetName]=useState("")
   const [startdate,setStartdate]=useState("")
   const [endDate,setEndDate]=useState("")
   const [mobile,setMobile]=useState("")
   const [requirements,setRequirements]=useState("")
   const lodge=(e)=>{
      e.preventDefault()
      axios.post(`https://petavenue-backend.onrender.com/stay`,{
         petname,startdate,endDate,mobile,requirements
      })
      .then((res)=>alert("booked"))
      .catch((err)=>{
         console.log(err)
      })
   }
  return (
    <>
    <div className='container row lod'>
       <div className='col-sm-12 col-md-6 col-lg-6 col-xl-6 lod'>
       
        
       <img src='https://plus.unsplash.com/premium_photo-1668114375111-e90b5e975df6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGV0c3xlbnwwfHwwfHx8MA%3D%3D'/>
       </div>
       <div className='col-sm-12 col-md-6 col-lg-6 col-xl-6 lod'>
       <img src='https://plus.unsplash.com/premium_photo-1668114375002-a7794d5209b4?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1pbi1zYW1lLXNlcmllc3wxfHx8ZW58MHx8fHx8'/>
       </div>
    </div>
    <div className='container p-5 bg-secondary-subtle'>
    <h2> Welcome to [Pet Avenue] – Premium Pet Lodging! 🐾
      </h2>
<p>
Are you looking for a safe, comfortable, and loving place for your furry friends while you're away?
 Look no further! At [Pet Avenue], we provide high-quality pet lodging services designed to keep 
 your pets happy and relaxed.

</p>
<h3>Why Choose Us?</h3>
<p>✔️ Affordable Rates: Just ₹200 per day!</p>
<p>✔️ Comfortable Accommodation: Clean, spacious, and cozy spaces tailored to your pet's needs.</p>
<p>✔️ Nutritious Meals: Balanced and delicious food options (or bring your pet's favorite meals).</p>
<p>✔️ Daily Playtime: Fun activities to keep your pet entertained and active.</p>
<p>✔️ 24/7 Care: Experienced caregivers who treat your pets like family.</p>
<p>✔️ Safety First: Secure environment with regular health checks.
</p>
Whether it's a short stay or an extended vacation, we ensure your pets are cared for with the love and attention they deserve.

<h4>📞 Contact us today to book your pet's stay or learn more about our services!</h4>
       
    </div>

    <div className='container p-5 text-center '>
        <h2>Our Lodges</h2>
        <p>Click the button now for more offres%</p>
    <button className='b'
    data-bs-target="#book"
    data-bs-toggle="modal"

    >Book Now</button>
    </div>
    <div className='row container '>
    <div className=' col-sm-12 col-md-6 col-lg-4 card   a'>
     <img src={lod1}/>
     <button>Book now at AC Rs.299</button>
    </div>
    <div className=' col-sm-12 col-md-6 col-lg-4  card a '>
     <img src={lod5}/>
     <button>Book now at Rs.199</button>
    </div>
    <div className=' col-sm-12 col-md-6 col-lg-4 card a'>
     <img src={lod4}/>
     <button>Book now at Rs.199</button>
    </div>
    <div className=' col-sm-12 col-md-6 col-lg-4 card a'>
     <img src={lod3}/>
     <button>Book now at Rs.199</button>
    </div>
    <div className=' col-sm-12 col-md-6 col-lg-4  card a'>
     <img src={lod2}/>
     <button>Book now at Rs.199</button>
    </div>

    <div className=' col-sm-12 col-md-6 col-lg-4  card a'>
     <img src={lod6}/>
     <button>Book now at Rs.199</button>
    </div>
    <div className=' col-sm-12 col-md-6 col-lg-4  card a'>
     <img src={lod7}/>
     <button>Book now at Rs.199</button>
    </div>
    <div className=' col-sm-12 col-md-6 col-lg-4  card a'>
     <img src={lod8}/>
     <button>Book now at Rs.199</button>
    </div>

    </div>
     <div className='modal fade' id='book'>
        <div className='modal-dialog'>
            <div className='modal-content'>
             <div className='modal-body'>
                <h3><b>Home Stay for pets</b></h3>
             <form className='bg-danger-subtle text-center' onSubmit={lodge}>
                <input type='text' placeholder='Pet name' className='w-75 form-control mt-3 m-3'
                value={petname}
                onChange={(e)=>setPetName(e.target.value)}
                />
                 <input type='text' placeholder='Mobile Number' className='w-75 form-control m-3'
                value={mobile}
                onChange={(e)=>setMobile(e.target.value)}
                />
                <label><b>Start Date</b></label>
                 <input type="date" placeholder='Start date' className='w-75 form-control ms-3 mb-3 '
                value={startdate}
                onChange={(e)=>setStartdate(e.target.value)}
                />
                
                <label><b>End Date</b></label>
                 <input type="date" placeholder='End date' className='w-75 form-control ms-3 mb-3'
                value={endDate}
                onChange={(e)=>setEndDate(e.target.value)}
                />
                <input type='text' placeholder='Requirements' className='w-75 form-control m-3'
                value={requirements}
                onChange={(e)=>setRequirements(e.target.value)}
                />
                <input type='submit' value='Book Now' className='bg-success text-light bolder btn mb-3 w-100'/>
                </form>  
             </div>
            </div>
        </div>
    </div>
  </>
  )
}

export default PetStay