import React from 'react'
import paw from "../assets/paw.png"
import shitzu from "../assets/shitzu.webp"
import area, { HydArea } from "../Components/HydArea"
const PetGrooming = () =>{
  return (
    <>
    <div className='row  p-4 pacific '>
     
      <div className='col-md-6 p-5 groom '></div>
      <div className='col-md-6  p-5 grooming'>
        <h2>Premium Pet Grooming At Home in Hyderabad (30% Off)</h2>
        <p>The ultimate destination for your pet’s grooming needs</p>
        <button className='btn bg-warning m-2'> Book Appointment</button><br></br>
        <button className='btn bg-success'>Call for Offers And Bookings</button>
        <h4>BOOK PET GROOMING</h4>

      </div>
    </div>

    <div className='row p-5 bg-dark-subtle'>
    <h3 className='text-center '>DOGS Grooming Packages in Hyderabad</h3>
      <div className='col-md-3 p-4'>
        <div className='card car'>
       
          <button className='btn bg-primary-subtle'>ECO</button>
          <p>Dog Medicated Spa Bath</p>
          <h4 className='bord'><del>Rs. 1299</del>Rs. 899</h4>
          
            <li><img src={paw}/>Medicated Bath With Shampoo </li>
            <li><img src={paw}/>Conditioning And Brushing</li>
            <li><img src={paw}/> Nail Trimming</li>
            <li><img src={paw}/>Ear Cleaning</li>
            <li><img src={paw}/>Eyes Cleaning</li>
            <li><img src={paw}/>Blow Dry</li>
            
           
            <details>
              <summary><button>view More</button></summary>
              
                <li><img src={paw}/> Paw Massage</li>
              <li><img src={paw}/>Combing/Brushing</li>
           <li><img src={paw}/>Spritz of Perfume</li>
              
            </details>
            <button className='m-2 bg-warning '>BooK Appointment</button>
          
        </div>
      </div>
      <div className='col-md-3 p-4'>
        
      <div className='card car'>
       
          <button className='btn bg-secondary-subtle'>PREMIER</button>
          <p>Dog Medicated Spa Bath</p>
          <h4 className='bord'><del>Rs. 1700</del>Rs. 1199</h4>
          
            <li><img src={paw}/>Medicated Bath With Shampoo </li>
            <li><img src={paw}/>Conditioning And Brushing</li>
            <li><img src={paw}/> Nail Trimming</li>
            <li><img src={paw}/>Ear Cleaning</li>
            <li><img src={paw}/>Eyes Cleaning</li>
            <li><img src={paw}/>Blow Dry</li>
            
           
            <details>
              <summary><button>view More</button></summary>
              
                <li><img src={paw}/> Paw Massage</li>
              <li><img src={paw}/>Combing/Brushing</li>
           <li><img src={paw}/>Spritz of Perfume</li>
              
            </details>
            <button className='m-2 bg-warning '>BooK Appointment</button>
          
        </div>

      </div>

      <div className='col-md-3 p-4 '>
      <div className='card car'>
       
       <button className='btn bg-danger-subtle'>GOLD</button>
       <p>Dog Medicated Spa Bath</p>
       <h4 className='bord'><del>Rs. 1699</del>Rs. 1199</h4>
       
         <li><img src={paw}/>Medicated Bath With Shampoo </li>
         <li><img src={paw}/>Conditioning And Brushing</li>
         <li><img src={paw}/> Nail Trimming</li>
         <li><img src={paw}/>Ear Cleaning</li>
         <li><img src={paw}/>Eyes Cleaning</li>
         <li><img src={paw}/>Blow Dry</li>
         
        
         <details>
           <summary><button>view More</button></summary>
           
             <li><img src={paw}/> Paw Massage</li>
           <li><img src={paw}/>Combing/Brushing</li>
        <li><img src={paw}/>Spritz of Perfume</li>
           
         </details>
         <button className='m-2 bg-warning '>BooK Appointment</button>
       
     </div>
      </div>

      <div className='col-md-3 p-4'>
      <div className='card car'>
       
          <button className='btn bg-warning-subtle'>PAW LUXE</button>
          <p>Dog Medicated Spa Bath</p>
          <h4 className='bord'><del>Rs. 2500</del>Rs. 1499</h4>
          
            <li><img src={paw}/>Medicated Bath With Shampoo </li>
            <li><img src={paw}/>Conditioning And Brushing</li>
            <li><img src={paw}/> Nail Trimming</li>
            <li><img src={paw}/>Ear Cleaning</li>
            <li><img src={paw}/>Eyes Cleaning</li>
            <li><img src={paw}/>Blow Dry</li>
            
           
            <details>
              <summary><button>view More</button></summary>
              
                <li><img src={paw}/> Paw Massage</li>
              <li><img src={paw}/>Combing/Brushing</li>
           <li><img src={paw}/>Spritz of Perfume</li>
              
            </details>

            <button className='m-2 bg-warning '>BooK Appointment</button>
          
          
        </div>
      </div>

      
    </div>

    <div className='conatainer-fluid row p-4 bg-dark text-light '>
      <div className='col-md-4 p-5 shitzu text-center '>
        <img src={shitzu} className='w-75'/>
      </div>
      <div className='col-md-8 p-5 text-center poppins'>
      <h2>Ready to Meet our Grooming Experts?</h2>
      <p>Learn more about our experienced groomers and their dedication to 
        keeping your pets looking and feeling their best </p>
        <button className='btn bg-warning '>Book Groomer</button>
       
       
      </div>
    </div>

    <div className='vil container-fluid  p-5 poppins'>
     <h3 className='text-center p-3'>Pet Grooming Services in Other Hyderabad Locality Near You</h3>
     <div className='row '>
      {HydArea.map((data,index)=>{
        return(
         
           <div key={index}className=' shadow city col-sm-6 col-md-4 col-lg-3 col-xl-2'>
           <p>{data.name}</p>
          
         </div>
        )
      })
      }
     </div>
    </div>

    <div className='card container p-5 m-2 ' >
      <h3><b>Get Pet Grooming in Gachibowli, Hyderabad</b></h3>
     <p>Oh My Pet is an exclusive pet grooming service option for residents of Gachibowli,
       Hyderabad. We offer
       extraordinary pet grooming at home because your fur babies deserve 
       the best care. </p><p>
       Oh My Pet is an exclusive pet grooming service option for residents of 
       Gachibowli, Hyderabad. We offer 
       extraordinary pet grooming at home because your fur babies deserve the
        best care. 
       </p>
       <p>
       Our professional groomers are dedicated to providing top-notch care and 
       convenience to ensure that 
       your pets get pampered without the stress involved in traditional grooming 
       salons.
       </p>
       <h3>
       Best-in-class Services For Your Dogs
       </h3>
       <p>
       At Oh My Pet, we provide dog hair grooming, keeping your dog’s comfort and
        cleanliness in mind. Our mobile service brings everything needed to the 
        doorstep; all tools and products are with the groomers to ensure a pleasant
         and hassle-free experience for your dog. Be it a bath, a full haircut, 
         or simply a proper brushing, we do it with much care and expertise to meet
          your dog’s particular needs in Gachibowli, Hyderabad.


       </p>
       <h3>Grooming For Cats With Utmost Care</h3>
       <p>We know how frustrating it can be for cat owners to find reasonable cat 
        grooming prices with service. We offer very competitive rates for pet cat 
        grooming near me, so your feline friends can feel relaxed with gentle, 
        professional grooming. Our feline grooming reduces stress and keeps them
         looking fabulous and feeling great.</p>
     <h2>Convenience is the Key</h2>
     <p>With pet grooming home service, you can expect so much more than just
       convenience in Gachibowli, Hyderabad —it is about comfort and familiarity 
       for your pet. Our groomers arrive fully equipped at your doorstep so that your 
       pets have the comfort of surroundings they like while they get groomed.
        This approach reduces anxiety and provides a more enjoyable experience
         for you and your pets.

Whether you need a regular dog grooming home service or seek trusted mobile pet
 grooming, we are here to meet your expectations.
 Call us now and give your pets the grooming experience they truly deserve.</p>
    </div>

    <div className='container p-5 qs'>
      <h3 className='poppins'>Frequently Asked Questions</h3>
      <details>
        <summary>Q: What is the best way to book a pet grooming appointment?</summary>
        <p className='text-secondary'>You can book a pet grooming appointment by calling us or filling out the form</p>
       
        </details>
        <details>
        <summary >
        In which locality of Delhi do you provide pet grooming services?
        </summary>
        <p className='text-secondary'>We cover the following localities in Delhi city: Vasant Vihar, Tagore Garden, Malviya 
          Nagar, Golf Links, Hauj Khas, Vipin Garden, Mayur Vihar, Mayfair Gardens, and more.</p>
        </details>
        <details>
          <summary>Do you provide pet grooming services for cats?</summary>
          <p className='text-secondary'>Yes, we provide pet grooming services for cats. Our f</p>
        </details>
        <details>
          <summary>
          What services do you provide for dog grooming?
          </summary>
          <p className='text-secondary'>Our pet grooming services include Spa Baths, Full Grooming, Nail Clipping,
             Stylish Hair Cuts, de-stressing massage, Knots/mat removal, and Anti-Tick Treatment.</p>
        </details>
       <details>
        <summary>Do you use special pet-friendly products for dog grooming?</summary>
        <p className='text-secondary'>Yes, we use special pet-friendly products for dog grooming.
        Yes, we use all high-quality and pet-specific shampoos. All our products are gentle on your pet’s 
        skin and coat. Also, we examine the coat and fur condition and then give the shampooing and condi
        tioning treatments to prevent developing skin issues or allergies.


        </p>
       </details>
    </div>
    </>
  )
}

export default PetGrooming