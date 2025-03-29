import React from 'react'
import ohm from '../assets/chintu.jpg'
const Footer = () => {
    const WhatsApp=()=>{
        window.open("https://web.whatsapp.com/")
    }
  return (
    <div className='container-fluid p-5'>
        <div className='row bg p-5'>
            <div className='col-sm-6 col-md-6 col-lg-4 col-xl-3 p-1'>
                <h5>UseFull Links</h5>
                <ul>
                    <li>home</li>
                    <li>About Us</li>
                    <li>Services</li>
                    <li>Gallery</li>
                    <li>Blog</li>
                    <li>FAQ</li>
                </ul>
                <button className='btn btn-warning' onClick={WhatsApp}>Whatsapp</button>
            </div>
            <div className='col-sm-6 col-md-6 col-lg-4 col-xl-3 p-1'>
                <h5>important links</h5>
                <ul>
                    <li>PetGrooming in Delhi</li>
                    <li>PetGrooming in Gurogram</li>
                    <li>PetGrooming in Mumbai</li>
                    <li>PetGrooming in Chennai</li>
                    <li>PetGrooming in Vijayawada</li>
                    <li>PetGrooming in Hyderabad</li>
                    <li>PetGrooming in Noida</li>

                </ul>
            </div>
            <div className='col-sm-6 col-md-6 col-lg-4 col-xl-3 p-1'>
                <h5>contact us</h5>
                <p>mail us</p>
                <p>chintuworld@gmail.com</p><b></b>
                <b onClick={WhatsApp}>call or Whatsapp at</b>
                <p>917337266170</p>
            </div>
            <div className='col-sm-6 col-md-6 col-lg-4 col-xl-3 p-1'>
                <img src={ohm} alt="ohm" className='w-50'/>
           <p>Pet grooming services at home.<br></br> Wash, dry and brush your fuzzy <br></br>friend in the comfort of your home.</p>
            </div>
        </div>

       <div className='row bg'>
        <p>Are you looking for a reliable and professional pet grooming service provider? Look no further than
             Ohmypet Grooming! OhMyPet stands out among other pet grooming services, as we offer
             a top-rated experience for your furry friends. With our highly-experienced staff and 
             outstanding reputation, you can trust that your beloved dog or cat is in great hands.</p>
        <div className='col-sm-6 col-md-6 col-lg-4 col-xl-3 p-1'><li>Terms and conditions</li></div>
        <div className='col-sm-6 col-md-6 col-lg-4 col-xl-3 p-1'><li>Refunds</li> </div>
        <div className='col-sm-6 col-md-6 col-lg-4 col-xl-3 p-1'><li>Cancellations</li></div>
        <div className='col-sm-6 col-md-6 col-lg-4 col-xl-3 p-1'><li>privacy and policies</li></div>
       </div>

    </div>
  )
}

export default Footer