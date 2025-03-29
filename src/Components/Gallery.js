import React from 'react'
import a from "../assets/dog1.webp"
import b from "../assets/dog2 (1).webp"
import c from "../assets/dog2.webp"
import d from "../assets/dog3.jpeg"
import e from "../assets/dog5.webp"
import f from "../assets/dog6.webp"
import g from "../assets/dog7.webp"
import h from "../assets/dog8.webp"

const Gallery = () => {
  return (
    <div className='p-5 text-center'>
      <h1>Our Gallery</h1>
      <div className=' container-fluid p-2'>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR12ZnG9p56x7BCmOOwQlqHgqjajj9yu-71nQ&s
        '/>
      </div>
      <div className="row">

        <div className=" col-sm-6 col-md-6 col-lg-4 col-xl-3 ">
        <img src={a} className='w-100 p-3' />
       </div>

       <div className=" col-sm-6 col-md-6 col-lg-4 col-xl-3 ">
        <img src={b} className='w-100 p-3' />
       </div>

       <div className=" col-sm-6 col-md-6 col-lg-4 col-xl-3 ">
        <img src={c} className='w-100 p-3' />
       </div>

       <div className=" col-sm-6 col-md-6 col-lg-4 col-xl-3 ">
        <img src={d} className='w-100 p-3' />
       </div>

       <div className=" col-sm-6 col-md-6 col-lg-4 col-xl-3 ">
        <img src={e} className='w-100 p-3' />
       </div>

       <div className=" col-sm-6 col-md-6 col-lg-4 col-xl-3 ">
        <img src={f} className='w-100 p-3' />
       </div>

       <div className=" col-sm-6 col-md-6 col-lg-4 col-xl-3 ">
        <img src={g} className='w-100 p-3' />
       </div>

       <div className=" col-sm-6 col-md-6 col-lg-4 col-xl-3 ">
        <img src={h} className='w-100 p-3' />
       </div>

       <div className=" col-sm-6 col-md-6 col-lg-4 col-xl-3 ">
        <img src={b} className='w-100 p-3' />
       </div>

      </div>
    </div>
  )
}

export default Gallery