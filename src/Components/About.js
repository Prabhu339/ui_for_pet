import React from 'react'
import stay from '../assets/stay.jpg'
import { useNavigate } from 'react-router-dom'
const About = () => {
  const navigate=useNavigate();
  return (
    <>
      <div className='container-fluid about '>
        <h2>About us </h2>
      </div>
      
      <div className='container p-5 poppins'>
      <p>At Oh My Pet Grooming, we bring professional pet care services right to your doorstep! 
        We are a team of well-trained and sensitive experts
         who will give your furry friend the perfect experience from snout to tail.</p>

         <p>We understand that pet parents have concerns about taking their pets to
           spas, clinics, and salons regularly – such as the risk of infection, 
           separation anxiety, travelling hassles, use of sedatives, and i
           ll-treatment of pets. That’s why we offer our at-home pet
           care services so you can have peace of mind knowing that your p
           et is in good hands.</p>

           <p>We are striving to give your pet the most luxurious and wonderful
             grooming and styling experience 
            along with training and veterinary care at your home:</p>

            <ul>
              <li>Easy to book!<span className='bold text-danger'> Call us OR Book online</span></li>
              <li>Safe and clean home environment</li>
              <li>Full sanitisation , Pre and post service clean up</li>
              <li>No separation anxiety</li>
              <li>Undivided attention</li>
            </ul>
            <p>Apart from the gentle loving luxury of an expert service, we leave no stone
               un-turned to give the best possible experience following the latest trends 
               around the world. Bringing to you the latest hairstyles and cuts, hair coloring
                and chalking, customized and exclusive clothing, 
              pet photoshoots and never seen before add-ons to get the spotlight on immediately.</p>
      </div>

      <div className='row container p-3'>
        <divi className='col-md-6'>
        <div className='card bg-body-secondary p-5'>
        <h3>What suits best for your pet</h3>
       <li>The endless and unconditional love from the furry companion 
        deserves the best. Being adoring believers of the same, Oh My 
        Pet Grooming brought an idea to provide a safe, relaxed, and
         fun-filled experience for the little delightful creatures liv
         ing in your hearts.</li>
         <li>Pets are the mini bundles of joy and celebrations. The days spent w0ith
           pets are like
           celebrations. The pleasure they bring to our lives is immeasurable.</li>
           <li>Because we understand—your pet is an important part of your family.
             When you are looking f
            or competent pet grooming services, you can trust us to take care 
            of your loved one.</li>
            <li>And when you require the Veterinary doctor or pet training, you
               can trust us to help you pamper your little one. We have got your
                back. Every time!</li>
        </div>
       
        
        </divi>

      <div className='card col-md-6 '>
        <img src='https://ohmypetgrooming.in/wp-content/uploads/2023/12/combing-pomeranian-hair-care-dogs-beautiful-dog-sits-gray-rug-enjoys-taking-care-its-fur.jpg'
        className='p-2 '
        />
        <b>“A dog is the only thing on earth that loves you more than you love yourself.” </b>
        </div>      

      </div>

      <div className='container p-3 stay shadow' >
        <h3>We Provide Stay For Your Lovable Pets</h3>
        <p>Our pet boarding facility is designed to provide 
          a safe and comfortable environment for your pet</p>
          <button className='btn btn-dark'
          onClick={()=>navigate('/stay')}
          ><b>
            <h2>Find stay for your pet at <span className='text-danger'> Rs .199/day</span></h2></b></button>
         <img src={stay} className='w-50'/>
      </div>

      <div className='container'>
        
        <div className='row  text-center p-3 bord'>
          <h2 className='p-4'>How Does PetAvenue Works?</h2>
        <div className='col-md-6 col-sm-12 col-lg-4 col-xl-4'>
        <h3>Select Your Location</h3>
        <p> Check out our list of locations to find the your location. We have detailed information
           about locations we are serving</p>
        </div>
        <div className='col-md-6 col-sm-12 col-lg-4 col-xl-4'>
        <h3>Book Your Service</h3>
        Book your service through the book appointment form or by calling us or simply sending us a whatsapp message
        </div>
        <div className='col-md-6 col-sm-12 col-lg-4 col-xl-4'>
        <h3>Get It Groomed</h3>
        Get your furry friend groomed by our experienced groomer at your location at the time provided by you.
        </div>
        </div>
      </div>



      <divd className='container-fluid bg-body-secondary text-center p-2'>
   <h1 className='p-4'>Our Numbers Tell Our Proficiency</h1>
   <div className='row service '>
   <div className='col-sm-6 col-md-6  col-lg-3 col-xl-2 card m-3'>
   <div className='card-body'>
   <img src='https://ohmypetgrooming.in/wp-content/uploads/2023/12/earth_1119067.png'/>
   <h4>10+ cities</h4>
   </div>
   </div>
   <div className='col-sm-6 col-md-6  col-lg-3 col-xl-2 card m-3'>
   <div className='card-body'>
   <img src='https://ohmypetgrooming.in/wp-content/uploads/2023/12/dog_1396295.png'/>
   <h4>5000+ Clients</h4>
   </div>
   </div>
   <div className='col-sm-6 col-md-6  col-lg-3 col-xl-2 card m-3'>
    <div className='card-body'>
        <img src='https://ohmypetgrooming.in/wp-content/uploads/2023/12/affection_2650990.png'/>
    <h2>99+</h2> <span className='text-success'><b>satisfications</b></span>
    </div>
   </div>
   <div className='col-sm-6 col-md-6  col-lg-3 col-xl-2 card m-3'>
    <div className='card-body'>
        <img src='https://ohmypetgrooming.in/wp-content/uploads/2023/12/walking-dog_2942406.png'/>
        <h2>25+</h2><b> professionals</b>
    </div>
   </div>
   </div>
      </divd>

    </>
  )
}

export default About