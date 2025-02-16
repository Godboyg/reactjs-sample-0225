"use client"
import React, { useState } from 'react'
import 'remixicon/fonts/remixicon.css'

function TaskCom({isV}) {

  const [isVisible, setIsVisible] = useState(false);

  const handleCl = ()=>{
    
    console.log("clicked");
    setIsVisible(!isVisible);

  }

  const handleClose = ()=>{

    setIsVisible(false);

  }

  return (
    <>
    <div className={`flex items-center container ${isVisible ? "block" : "hidden"} justify-center absolute sm:right-[1%] top-[30%]`}>
        <div className="sm:w-[40vw] md:w-[30vw] text-white bg-blue-400 sm:px-[2vw] md:px-[1.3vw] sm:py-[3vw] md:py-[1vw]">
            <div className="flex item-center justify-between">
              <i class="ri-delete-bin-7-fill sm:text-[4vw] md:text-[2vw]"></i>
              <i class="ri-close-large-line sm:text-[4vw] md:text-[2vw]" onClick={handleClose}></i>
            </div>
            <div className="">
              <div className="sm:p-[2.4vw] md:p-[1.2vw]">
                  <p className='sm:text-[2.3vw] md:text-[1.5vw]'>Campus build</p>
              </div>
              <div className="">
                <input type="text" className='md:h-[8vh] md:w-[27vw] sm:h-[5vw] sm:w-[35vw] sm:px-[2.4vw] sm:py-[2.4] text-black outline-none' placeholder='Add Details...'/>
              </div>
              <div className="sm:p-[2.4vw] md:p-[1vw]">
                <p className='sm:text-[2.3vw] mt-[1vw] md:text-[1.5vw]'>Add Date</p>
                <p className='sm:text-[2.3vw] mt-[1vw] md:text-[1.5vw]'>Move to another list</p>
              </div>
            </div>
        </div>
    </div>
    <div className="py-[2vw] px-[3.5vw]">
        <div className={`sm:w-[40vw] md:w-[23vw]  bg-white border border-blue-900 ${isV ? "" : "absolute"} text-blue-900`}>
            <div className="flex items-center justify-between py-[0.5vw] px-[1.5vw]">
                <p className='sm:text-[3vw] md:text-[1.4vw]'>My Tasks</p>
                <i class="ri-list-check hover:cursor-pointer sm:text-[3vw] md:text-[1.5vw]"></i>
            </div>
            <div className="flex items-center gap-[1vw] mt-[2vh] ml-[2vw] mb-[2vw]">
                <div className="sm:h-[6vw] sm:w-[6vw] md:h-[3vw] md:w-[3vw] rounded-full bg-blue-900 flex items-center justify-center"><i class="text-2xl text-white ri-add-line hover:cursor-pointer" onClick={handleCl}></i></div>
                <p className='sm:text-[3vw] md:text-[1.4vw]'>Add a task</p>
            </div>
        </div>
    </div>
    </>
  )
}

export default TaskCom