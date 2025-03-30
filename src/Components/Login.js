import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [token,setToken]=useState("")
    const navigate=useNavigate()
    const submit=(e)=>{
    e.preventDefault()
    axios.post(`https://petavenue-backend.onrender.com/login`,{email,password})
    .then((res)=>{
        console.log(res.data);
        if(res.data.token){
            setToken(res.data.token)
        }
    })
    .catch((err)=>console.log(err))
    }
    if(token){
        navigate('/dashboard')
      }
  return (
    <div>

<div className='container p-5 shadow mx-auto col-md-6'>
        <h4 className='text-center'><b>Admin Login{token}</b></h4>
        <form onSubmit={submit}>
        <input type='email' name='email' placeholder='email' value={email}
        className='mb-3 form-control'
         onChange={(e)=>setEmail(e.target.value)}/>
        <input type='password' name='password' placeholder='password' value={password} 
        className='mb-3 form-control'
         onChange={(e)=>setPassword(e.target.value)}/>

<input type='submit' value='login'  className='mb-3 form-control bg-primary'/>

        </form>
        <button onClick={()=>navigate('/signup')}
        className='btn bg-danger-subtle'>
        don't Have An Account</button>
    </div>

    </div>
  )
}

export default Login