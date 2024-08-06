import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";

const Header = () => {
  return (
    <div className='flex flex-col xl:flex-row gap-10px justify-center items-center font-sans font-semibold xl:text-[18px] w-full bg-Headercolor2 cursor-pointer'>
    <div className='bg-Headercolor text-white w-[100%] text-center flex justify-center items-center xl:h-[60px] h-[80px] py-2 px-2  xl:tracking-widest tracking-normal'>
      <p className=''>New: Introducing the world&apos;s first secure touchscreen hardware wallets</p>
    </div>
    <div className='bg-Headercolor2 w-[full] flex justify-center items-center xl:pr-2 xl:mr-[80px] h-[60px] text-center'>Shop Now 
      <span className='ml-2 font-bold'><FaArrowRightLong/></span>
    </div>
    </div>

  )
}

export default Header
