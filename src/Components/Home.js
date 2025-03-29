import React, { useState } from 'react'
import noida from '../assets/noida.png'
import guru from '../assets/guru.jpg'
import gazi from '../assets/ghaziabad.png'
import mumbai from'../assets/mumbai.png'
import farid from '../assets/faridabad.webp'
import hyd from '../assets/hyd.webp'
import beng from '../assets/benguluru.png'
import chennai from '../assets/chennai.jpg'
import train from '../assets/training.webp'
import vaccine from '../assets/vaccine.webp'
import consult from '../assets/consult.webp'
import spa from '../assets/dog-bath.png'
import knots from '../assets/Anti-tick.png'
import groom from '../assets/dog_10667046.png'
import hair from '../assets/grooming.png'
import nail from '../assets/destressing.png'
import clipper from '../assets/nail-clipper_9716888.png'
import remove from '../assets/ear-cleaning_1499504.webp'
import axios from 'axios'
import Home2 from './Home2'
import chat from "../assets/homeimg.webp"
import Home4 from './Home4'

const Home = () => {
  const [pet,setPet]=useState("")
  const [name,setName]=useState("")
  const [phone,setPhone]=useState("")
  const [email,setEmail]=useState("")
  const [comment,setComment]=useState("")
  const [city, setCity] = useState("");

  const booking=(e)=>{
    e.preventDefault();
    axios.post(`http://localhost:4000/Book`,{
      pet,name,email,phone,comment,city
    })
    .then((res)=>alert("Booking Successfull"))
    .catch((err)=>alert("error"))
  }

  const handleCall = () => {
    const phoneNumber = "7337266170";
    window.open(`tel:${phoneNumber}`);
  };
  
  return (
   <div>
    <div className='ant'>
      <img src={chat}/>
      </div>
      <div className='container shadow p-1 text-center col-lg-10'>
       <h3 className='text-center p-5'>Affordable Pet Grooming Services in Your City</h3>
       <button className='btn btn-warning text-center mb-3'
       data-bs-toggle="modal"
       data-bs-target="#update">Book appointment</button><br></br>
       <button className='btn btn-success text-center mb-3' onClick={handleCall}>
        call for offers & Group Bookings</button>
      </div>
      
        <h3 className='text-center'>At Home Pet Grooming Services</h3>
        <p className='text-center p-5'>Oh My Pet’s pet grooming services offer a convenient and stress-free way
           for pet owners to maintain their pets’ hygiene and appearance. These services
            typically include bathing, hair trimming, nail clipping, and ear cleaning, all
           performed in the comfort of your own home. Proudly serving more than 5000 Pawrents..</p>
           


        <Home4/>


        

      
       
        

        

      
      

      <div className='container p-5'>
        <h1 className='p-3'><b>Explore Our Pet Grooming Services for Your Pet</b></h1>
        <div className='row p-5'>
          
         
          <div className='col-sm-6 col-md-6 col-md-4 col-lg-4 col-xl-4'>
           <div className='card shadow'>
            <img src={train} className='w-75 p-4'/>
            <h5 h5 className='text-center'><b>Dog Training At Home</b></h5>
          </div>
          </div>

          <div className='col-sm-6 col-md-6 col-md-4 col-lg-4 col-xl-4 '>
           <div className='card shadow'>
            <img src={vaccine} className='w-75 p-4'/>
            <h5 h5 className='text-center'><b>At Home Pet Vaccination</b></h5>
          </div>
          </div>

          <div className='col-sm-6 col-md-6 col-md-4 col-lg-4 col-xl-4 '>
           <div className='card shadow'>
            <img src={consult} className='w-75 p-4'/>
            <h5 h5 className='text-center'><b>Online Vet Consultation</b></h5>
          </div>
          </div>
        </div>
       
      </div>

      <div className='row container p-5'>
        <div className='col-sm-6 col-md-6  col-lg-2 col-xl-2'>
          <div className='card shadow'>
            <img src={hair} className='p-4'/>
            <h5 className='text-center'><b>Full Grooming</b></h5>
          </div>
        </div>

        <div className='col-sm-6 col-md-6  col-lg-2 col-xl-2'>
          <div className='card shadow'>
            <img src={clipper} className='p-4'/>
            <h5 className='text-center'><b>Nail clipper</b></h5>
          </div>
        </div>

        <div className='col-sm-6 col-md-6  col-lg-2 col-xl-2'>
          <div className='card shadow'>
            <img src={groom} className='p-4'/>
            <h5 className='text-center'><b>Stylish hair Cuts</b></h5>
          </div>
        </div>

        <div className='col-sm-6 col-md-6  col-lg-2 col-xl-2'>
          <div className='card shadow'>
            <img src={remove} className='p-4'/>
            <h5 className='text-center'><b>Knots Removal</b></h5>
          </div>
        </div>

        <div className='col-sm-6 col-md-6  col-lg-2 col-xl-2'>
          <div className='card shadow'>
            <img src={spa} className='p-4'/>
            <h5 className='text-center'><b>Spa Bath</b></h5>
          </div>
        </div>

        <div className='col-sm-6 col-md-6  col-lg-2 col-xl-2'>
          <div className='card shadow'>
            <img src={knots} className='p-4'/>
              <h5 className='text-center'><b>  Anti-Tick Treatment</b></h5>
           
          </div>
        </div>

        <div className='col-sm-6 col-md-6  col-lg-2 col-xl-2'>
          <div className='card shadow'>
            <img src={nail} className='p-4'/>
            <h5 className='text-center'><b>DeStressing Massage</b></h5>
          </div>
        </div>

      
</div>


<div className='modal  fade'id='update'>
            <div className='modal-dialog'>
                <div className='modal-content'>
                    <div className='modal-body'>
                        <div className='row'>
                          <div className='col-md-4'>
                            <img src='https://ohmypetgrooming.in/wp-content/uploads/2023/11/WhatsApp-Image-2023-11-20-at-17.02.32_b35d25bf.jpg'
                            className='w-100'/>
                          </div>
                          <div className='col-md-8'>
                            <h2>Hello There</h2>
                            <p>How can we serve your Furry Friend?
                            </p>
                           <form onSubmit={booking}>
                           <div className='form'>
                           <p>Select Your Pet *
                            </p>
                            
           
                            Dog<input type='radio'name='pet'className='w-25'
                             value={pet}
                             onChange={(e)=>setPet(e.target.value)}/>
                            Cat<input type='radio' name='pet' className='w-25'
                            value={pet}
                            onChange={(e)=>setPet(e.target.value)}/>

                          


                    <input type='text' placeholder='name' className='w-50 mb-3 '
                    value={name}
                    onChange={(e)=>setName(e.target.value)}/>
                    
                    <input type='text' placeholder='phone number' className='w-50  mb-3'
                     value={phone}
                     onChange={(e)=>setPhone(e.target.value)}/>
                    
                    <input type='text' placeholder='email address ' className='w-50 mb-3'
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}/>

                    <input type='text' placeholder='city ' className='w-50 mb-3'
                    value={city}
                    onChange={(e)=>setCity(e.target.value)}/>

                    <input type='text' placeholder='comments ' className='w-100 mb-3'
                    value={comment}
                    onChange={(e)=>setComment(e.target.value)}/>
 
                            <input type='submit' value='Book Now' className='bg-dark text-white'/>
                                   </div>
                           </form>
                          </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>                    
        


<Home2/>
<div className='container p-4 shadow text-center'>
            <h2>Ready to Make the day of your Furry Friend?
           </h2>
           <button className='btn-warning btn'
         data-bs-toggle="modal"
       data-bs-target="#update"
           > Book Appointment Now</button>
        </div>
</div>


   
  )
}

export default Home