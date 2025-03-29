import React from 'react'
import chow from '../assets/chow.webp'
const Home2 = () => {
  return (
    <>
      <div className='container-fluid bg-body-secondary text-center p-2 pacific'>
   <h1 className='p-4'>Best Pet Grooming Service Provider in India</h1>
   <div className='row service '>
   <div className='col-sm-6 col-md-6  col-lg-3 col-xl-2 card m-3'>
   <div className='card-body'>
   <img src='https://ohmypetgrooming.in/wp-content/uploads/2023/12/earth_1119067.png'/>
   <h2>10+ cities</h2>
   </div>
   </div>
   <div className='col-sm-6 col-md-6  col-lg-3 col-xl-2 card m-3'>
   <div className='card-body'>
   <img src='https://ohmypetgrooming.in/wp-content/uploads/2023/12/dog_1396295.png'/>
   <h2>5000+ Clients</h2>
   </div>
   </div>
   <div className='col-sm-6 col-md-6  col-lg-3 col-xl-2 card m-3'>
    <div className='card-body'>
        <img src='https://ohmypetgrooming.in/wp-content/uploads/2023/12/affection_2650990.png'/>
    <h2>99+ <span className='text-success'>satisfications</span></h2>
    </div>
   </div>
   <div className='col-sm-6 col-md-6  col-lg-3 col-xl-2 card m-3'>
    <div className='card-body'>
        <img src='https://ohmypetgrooming.in/wp-content/uploads/2023/12/walking-dog_2942406.png'/>
        <h2>25+ professionals</h2>
    </div>
   </div>
   </div>
      </div>

      <div className='container-fluid'>
        <div className='row'>
            <div className='col-lg-6 p-5'>
                <div className=''>
               <h5 className='text-warning'>From The</h5>
   <h2 className='p-2'><b>DOG BLOG</b></h2><br></br>
     <p> We love and care for your dog like they are our own. We realize that
 your dog is a furry member of your family, and they deserve the highest level of care. With
 our award-winning grooming and spa services, you’ll be treating your
  dog to their Most Exciting Day Ever!</p>
                </div>
            
            </div>

            <div className='col-lg-6 p-5'>
                <img src={chow

                } className='w-75'/>
            </div>

        </div>
      </div>

        
    </>
  )
}

export default Home2