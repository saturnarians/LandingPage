import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";

const Header = () => {
  const handleRedirect = () => {
    window.location.href = "https://shop.ledger.com/pages/hardware-wallets-secure-touchscreen";
  };
  return (
    <div onClick={handleRedirect} className='flex flex-col xl:flex-row gap-10px justify-center items-center font-sans font-semibold xl:text-[18px] w-full bg-Headercolor cursor-pointer'>
    <div className=' text-white 2xl:w-[1100px]  2xl:mr-4 text-center flex justify-center items-center xl:h-[60px] h-[80px] py-2 px-2  xl:tracking-widest tracking-normal'>
      <p className=''>New: Introducing the world&apos;s first secure touchscreen hardware wallets</p>
    </div>
    <div className='bg-Headercolor2 w-full xl:w-[296px] flex justify-center items-center xl:pr-2 xl:mr-[0px] h-[60px] text-center'>Shop Now 
      <span className='ml-2 font-bold'><FaArrowRightLong/></span>
    </div>
    </div>

  )
}

export default Header
