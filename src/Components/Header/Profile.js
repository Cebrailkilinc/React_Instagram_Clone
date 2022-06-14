import React, { useState, useRef } from 'react'
import profil from '../../Data/profil'

import { MdBookmarkBorder } from "react-icons/md"
import { BiUserCircle } from "react-icons/bi"
import { AiOutlineSetting } from "react-icons/ai"
import { MdOutlineChangeCircle } from "react-icons/md"
import { Link } from 'react-router-dom'
import { useEffect } from 'react'



function Profile({ setLogin }) {

  const [open, setOpen] = useState("hidden")
  // useEffect(() => {
  //   const closeDrop = (e) => {
  //     if (e.path[0].tagName !== "BUTTON") {
  //       setOpen("hidden")
  //     }

  //   }
  //   document.body.addEventListener("click", closeDrop)
  //   return () => document.body.removeEventListener("click", closeDrop)

  // }, [])


  const show = () => {
    setOpen(open === "hidden" ? "visible " : "hidden")
  }
  return (
    <div  >
      <div>
        <img onClick={show} className='w-6 h-6  rounded-full cursor-pointer ' src={profil[0].img} />
      </div>
      <div className={`${open}  absolute bg-white right-64 top-10 text-xs border border-solid rounded-md border-gray-200`}>
        <div className='p-3'>
          <div className='cursor-pointer items-center py-1 hover:bg-slate-50 flex gap-4'>
            <BiUserCircle />
            <Link to="/user" ><h6>Profil</h6></Link>
          </div>
          <div className='flex items-center cursor-pointer py-1 hover:bg-slate-50  gap-4'>
            <MdBookmarkBorder />
            <h6>Kaydedildi</h6>
          </div>
          <div className='flex items-center cursor-pointer py-1 hover:bg-slate-50  gap-4'>
            <AiOutlineSetting />
            <h6>Ayarlar</h6>
          </div>
          <div className='flex items-center cursor-pointer py-1 hover:bg-slate-50  gap-4 '>
            <MdOutlineChangeCircle />
            <h6>Hesap Değiştir</h6>
          </div>
        </div>
        <div className='flex items-cente cursor-pointer py-1 hover:bg-slate-50r border-t'>
          <h6 onClick={() => {  setLogin(true) }} className='p-2 ml-2'>Çıkış Yap</h6>
        </div>
      </div>
    </div>
  )
}

export default Profile