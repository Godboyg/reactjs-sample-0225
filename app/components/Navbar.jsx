"use client"
import React, { useEffect, useState } from 'react'
import Cookie from 'js-cookie';
import { useRouter } from 'next/navigation';
import 'remixicon/fonts/remixicon.css'
import axios from "axios"

function Navbar() {

    const [img , setImg] = useState()

    const router = useRouter();

    const handleLogout = ()=>{

        Cookie.remove("token");

        router.push("/");

    }

    useEffect(()=>{
    
        const randomNumber = Math.floor(Math.random() * 999);

        axios.get(`https://picsum.photos/id/${randomNumber}/info`).then((img)=>{
            console.log(img.data.download_url);
            setImg(img.data.download_url);
        })
        .catch(error => {
            console.error('Error fetching image URL:', error);
        })
    },[])

  return (
    <>
    <div className=" flex items-center justify-between py-[3.5vw] px-[3.5vw] bg-blue-600 text-white sm:text-xl  md:h-[15vh] md:py-[4vw] sm:bg-blue-800 md:bg-blue-900">
        <div className="flex items-center gap-[2vw]">
            <div className="overflow-hidden rounded-full h-[15vw] w-[15vw] sm:h-[10vw] sm:w-[10vw] md:h-[6vw] md:w-[6vw]">
                <img className='h-full w-full object-cover' src="https://images.pexels.com/photos/1203777/pexels-photo-1203777.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
            </div>
            <div className="">
              <h3 className='text-[7vw] text-black sm:text-[2.8vw] md:text-[3vw]'>TasksBoard</h3>
            </div>
        </div>
        <div className="flex gap-[3vw]">
            <div className="rounded-full overflow-hidden h-[15vw] w-[15vw] sm:h-[10vw] sm:w-[10vw] md:h-[6vw] md:w-[6vw]">
              { img ? (
                   <img className='h-full w-full object-cover' src={img} alt="" />
                ) : (
                    <p>Loading img..........</p>
                )
              }
            </div>
            <div className="">
              <i class="ri-logout-box-line text-1xl hover:cursor-pointer absolute top-[5vh]" onClick={handleLogout}></i>
            </div>
        </div>
    </div>
    </>
  )
}

export default Navbar