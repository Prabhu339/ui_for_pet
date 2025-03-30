import axios from 'axios'
import React, { useEffect, useState } from 'react'

const AddBlog = () => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [image, setImage] = useState('')
    const [category, setCategory] = useState('')
    const [description,setDescription]=useState('')

    const AddData=(e)=>{
        
            e.preventDefault();
            axios.post(`https://petavenue-backend.onrender.com/blog`,{
                title,content,image,category,description
            })
            .then((res)=>alert("Added"))
            .catch((err)=>alert(err))
        }
       
    

  return (
    <div>
        <form onSubmit={AddData} className='col-lg-6 shadow'>
           
            <input type="text"
             value={title}
             className='form-control w-75 m-3'
             placeholder='title'
              onChange={(e)=>setTitle(e.target.value)}/>

             <input type="text"
             value={content}
             className='form-control w-75 m-3'
             placeholder='Content'
            
              onChange={(e)=>setContent(e.target.value)}/>

<input type="text"
             value={description}
             className='form-control w-75 m-3'
             placeholder='description'
              onChange={(e)=>setDescription(e.target.value)}/>

<input type="text"
             value={category}
             className='form-control w-75 m-3'
             placeholder='category'
              onChange={(e)=>setCategory(e.target.value)}/>

<input type="text"
             value={image}
             className='form-control w-75 m-3'
             placeholder='Image'
              onChange={(e)=>setImage(e.target.value)}/>

              <input type='submit' value='AddBlog' className='bg-success btn m-3 w-75'/>

        </form>
    </div>
  )
}

export default AddBlog