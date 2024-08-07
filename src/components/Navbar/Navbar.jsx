import React, { useState } from "react";
// import { Link } from "react-router-dom";
import Logo from "../../assets/ledger-favicon-shop_200x200.png";
// import HeroButton from "../HeroButtons";
import NavLinks from "./NavLinks";
import { MdMenu, MdClose } from 'react-icons/md';
import { IoCartOutline } from "react-icons/io5";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className=" ">
      <div className="flex items-center font-medium justify-around relative ">
        <div className="relative z-200 p-5 2xl:w-auto w-full flex justify-between ">
          <img src="https://shop.ledger.com/ledger-logo-long-black.svg"  alt="logo" className="hidden xl:block xl:cursor-pointer h-8 relative right-2" />  {/* Desktop */}
          <div className="flex justify-between space-x-[200px] relative">
          <img src={Logo} alt="logo" className="block xl:hidden xl:cursor-pointer h-[50px]" /> {/* Mobile */}
          <div className="block 2xl:hidden text-3xl mt-[10px] text-left absolute left-[40px] md:left-[100px] lg:left-[140px] xl:left-[-260px]" onClick={() => setOpen(!open)}>{open ? <MdClose /> : <MdMenu />}</div>
          </div>
        </div>
        <ul className="2xl:flex hidden items-center text-sm font-semibold 2xl:space-x-4 font-['ui-sans-serif', 'system-ui'] relative left-28">
          {/* <li>
            <Link to="/" className="py-7 px-3 inline-block">
              Products
            </Link>
          </li> */}
          <NavLinks/>
          <a href="#cart" className="text-customBlack text-sm relative left-4"><IoCartOutline  className="size-5 "/></a>
        </ul>
        <div className="2xl:block hidden">
         
        </div>
        
        {/* Mobile nav */}
        <ul
          className={`
        2xl:hidden absolute z-20 bg-customWhiteGrey w-full top-[70px] overflow-y-auto bottom-[0] py-[10px] pl-4 h-[300px]
        duration-500 ${open ? "top-0" : "left-[-100%]"}
        `}
        >
          <NavLinks className=""/>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;