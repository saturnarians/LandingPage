import React, { useState } from "react";
import { Link } from "react-router-dom";
// import Logo from "../../assets/Logo.png";
import HeroButton from "../HeroButtons";
import NavLinks from "./NavLinks";
import { MdMenu, MdClose } from 'react-icons/md';
import { FaShoppingCart } from 'react-icons/fa';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className=" ">
      <div className="flex items-center font-medium justify-around space-x-2 relative">
        <div className="z-50 p-5 2xl:w-auto w-full flex justify-between">
          <img src="https://shop.ledger.com/ledger-logo-long-black.svg" alt="logo" className="xl:cursor-pointer h-8 relative right-2" />
          <div className="text-3xl 2xl:hidden " onClick={() => setOpen(!open)}>{open ? <MdClose /> : <MdMenu />}</div>
        </div>
        <ul className="2xl:flex hidden items-center text-sm font-semibold 2xl:space-x-4 font-['ui-sans-serif', 'system-ui'] relative left-28">
          {/* <li>
            <Link to="/" className="py-7 px-3 inline-block">
              Products
            </Link>
          </li> */}
          <NavLinks />
          <a href="#cart" className="text-customBlack text-sm relative left-4">
          <FaShoppingCart />
        </a>
        </ul>
        <div className="2xl:block hidden">
          {/* <HeroButton /> */}
        </div>
        {/* Mobile nav */}
        <ul
          className={`
        2xl:hidden  fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4
        duration-500 ${open ? "left-0" : "left-[-100%]"}
        `}
        >
          <li>
            <Link to="/" className="py-7 px-3 inline-block">
              {/* Products */}
            </Link>
          </li>
          <NavLinks />
          <div className="py-5">
            <HeroButton />
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;