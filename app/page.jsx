"use client"
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import axios from 'axios';

function Register() {

  const router = useRouter();

  const [name , setName] = useState();
  const [email , setEmail] = useState();
  const [password , setPassword] = useState();

  useEffect(()=>{
    document.title = "Task-Board"; 

    const token = document.cookie.split(";").find((cookie) => cookie.trim().startsWith("token="));

    if(token){
      alert("user authenticated");
      router.push("/dashboard");
    }

  })

  const handleSubmit = async(e)=>{
    e.preventDefault();
    setName("");
    setEmail("");
    setPassword("");
    const data = { name , email , password};
    console.log("form submitted");
    const response = await axios.post("/createUser", data );
    console.log(response.data.token);

    setTokenInCookie(response.data.token);

      function setTokenInCookie(token) {
        const expirationDate = new Date();
        expirationDate.setTime(expirationDate.getTime() + (15 * 24 * 60 * 60 * 1000)); // 15 days from now
    
        // Set the cookie with Secure, HttpOnly, and SameSite flags
        document.cookie = `token=${token}; expires=${expirationDate.toUTCString()}`;
      }
    
    if(response.data){
      router.push("/dashboard");
    }
  }

  return (
    <>
    <div className="h-screen w-full bg-blue-800 flex flex-col items-center justify-center">
      <p className='text-white sm:text-[3vw]'>Sign up!</p>
      <div className="text-white sm:w-96 sm:px-[2vw]">
        <form onSubmit={handleSubmit}>
          <label className='sm:text-[1vw] mt-1'>Username</label>
          <input type="text" value={name} name='name' onChange={(e)=>setName(e.target.value)} className='px-[1.7vw] py-[0.7vw] text-white border bg-transparent mt-[2vh] border-white outline-none w-full' placeholder='Enter Name' required="true"/>
          <label className='sm:text-[1vw] mt-1'>Email Address</label>
          <input type="email" value={email} name='email' onChange={(e)=>setEmail(e.target.value)} className='px-[1.7vw] py-[0.7vw] text-white border bg-transparent mt-[2vh] border-white outline-none w-full' placeholder='Enter Emai' required={true}/>
          <label className='sm:text-[1vw] mt-1'>Password</label>
          <input type="password" value={password} name='password' onChange={(e)=>setPassword(e.target.value)} className='px-[1.7vw] py-[0.7vw] bg-transparent border  mt-[2vh] border-white outline-none w-full' placeholder='Enter Password' required={true}/>
          <div className="flex items-center justify-between mt-[2vh]">
            <div className="flex items-center gap-[0.4vw]">
              <input type="checkbox" className='h-[4vh]'/>
              <spam>Remember Me</spam>
            </div>
          </div>
          <div className="flex items-center justify-center w-full mt-[2vh]">
            <button className='px-[3vw] py-[0.5vw] text-white bg-black'>Sign up</button>
          </div>
          <p>Already have an account? <Link href="/Login">Log in!</Link> </p>
        </form>
      </div>
    </div>
    </>
  )
}

export default Register