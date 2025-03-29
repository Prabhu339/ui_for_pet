import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Contact from './Contact'
import Blog from './Blog'
import PetGrooming from './PetGrooming'
import Gallery from './Gallery'
import About from './About'
import Error from './Error'
import BlogMore from './BlogMore'
import Enquiry from './Enquiry'

import PetStay from './PetStay'
import Display from './Display'
import Anu from './Anu'
import Chinni from './Chinni'
import BlogExtra from './BlogExtra'


import Login from './Login'
import Signup from './Signup'


const Routing = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/contact" element={<Contact/>} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/pet" element={<PetGrooming/>} />
        <Route path="/gallery" element={<Gallery/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/enquiry" element={<Enquiry/>} />
        <Route path="/blogMore" element={<BlogMore/>}/>
        <Route path="*" element={<Error/>}/>
        <Route path="/dashboard" element={<Display/>}/>
        <Route path="/stay" element={<PetStay/>}/>
        <Route path="/anu" element={<Anu/>}/> 
        <Route path="/login" element={<Login/>}/> 
        <Route path="/signup" element={<Signup/>}/> 
        <Route path="/chinni/:_id" element={<Chinni/>}/>
    </Routes>
  )
}

export default Routing