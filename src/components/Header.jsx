import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";

const Header = () => {
  return (
    <div className='flex gap-10px font-sans tracking-widest font-semibold text-[18px] w-full bg-Headercolor2 cursor-pointer'>
    <div className='bg-Headercolor text-white w-[1050px] flex justify-center items-center h-[60px] py-2 px-2'>
      <p className=''>New: Introducing the world&apos;s first secure touchscreen hardware wallets</p>
    </div>
    <div className='bg-Headercolor2 w-[full] flex justify-center items-center pl-6 ml-[80px]'>Shop Now 
      <span className='ml-2 font-bold'><FaArrowRightLong/></span>
    </div>
    </div>

  )
}

export default Header
