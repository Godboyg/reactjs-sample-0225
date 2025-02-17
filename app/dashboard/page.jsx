"use client"
import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import 'remixicon/fonts/remixicon.css'
import Cookie from 'js-cookie';
import TaskCom from '../components/TaskCom'

function dashboard() {

  const [isVisible , setIsVisible] = useState(false)

  const handleClick = ()=>{
    setIsVisible(!isVisible);
  }

  const handleChange = ()=>{
    setIsVisible(false);
  }

  const handleClose = ()=>{
    setIsVisible(false);
  }

  return (
    <>
    <div className="h-screen w-full flex items-center justify-center absolute">
       <div className={`h-full w-full bg-black ${isVisible ? "opacity-80" : "hidden"} ${isVisible ? "block" : "hidden"} flex items-center justify-center`}>
         <div>
           <div className="absolute top-10 right-10 h-[14vw] w-[14vw] sm:h-[12vw] sm:w-[12vw]  md:h-[6vw] md:w-[6vw] rounded-full bg-blue-900 flex items-center justify-center">
              <i class="ri-close-large-line text-white text-2xl" onClick={handleClose}></i>
           </div>    
           <div className="flex w-[65vw] sm:w-[60vw] md:w-[34vw] items-center justify-between px-[5vw] py-[2vw] sm:py-[2.5vw] sm:px-[6vw] md:px-[3.5vw] md:py-[1.5vw] border border-white bg-white">
             <p className='text-[4vw] sm:text-[3.5vw] md:text-[1.4vw]  text-zinc-400'>New List</p>
             <div className="h-[10vw] w-[10vw] sm:h-[7vw] sm:w-[7vw] md:h-[3vw] md:w-[3vw] rounded-full bg-blue-900 flex items-center justify-center"><i class="text-2xl text-white ri-add-line hover:cursor-pointer"></i></div>
           </div>
         </div>
       </div>
      <div className="">
        <div className="absolute bottom-10 right-10 h-[14vw] w-[14vw] sm:h-[12vw] sm:w-[12vw] md:h-[6vw] md:w-[6vw] rounded-full flex items-center justify-center bg-blue-900">
          <i class="ri-add-line text-white text-[4vw] sm:text-[3vw] md:text-[3vw] hover:cursor-pointer" onClick={handleClick}></i>
        </div>
      </div>
    </div>
    <div className="">
      <Navbar />
      <TaskCom isV={isVisible}/>
    </div>
    </>
  )
}

export default dashboard