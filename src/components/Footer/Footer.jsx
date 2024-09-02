// src/components/Footer.js
import React, { useState } from 'react';
import { FaPaypal, FaCcVisa, FaCcMastercard, FaCcAmex, FaBitcoin, FaEthereum } from 'react-icons/fa';
import { MdExpandMore, MdExpandLess } from 'react-icons/md';
import { desktopFooterData, mobileFooterData } from './FooterData';

const Footer = () => {
  
  const [dropdown, setDropdown] = useState({});

  const toggleDropdown = (section) => {
    setDropdown((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  return (
    <footer className="2xl:flex bg-black text-white py-8 px-6 lg:px-4 w-full h-auto">
      <div className="flex flex-col items-left mb-8 2xl:w-[30%] xl:py-8 2xl:px-16 2xl:mb-28 ">
        <div className="flex flex-col justify-between items-left relative mb-[50px] ">
          <img src="https://shop.ledger.com/ledger-logo-long-white.svg" alt="Ledger Logo" className="mb-10 h-8 absolute " />
          <button className="border h-[50px] w-[90px] rounded-full my-6 relative left-[] top-[40px] text-[13px]">
            English
            <MdExpandMore className="inline ml-1" />
            {/* Dropdown for languages can be added here */}
          </button>
        </div>
        <div className="text-left text-[11px] space-y-2 2xl:space-y-0 2xl:flex 2xl:flex-col font-semibold leading-relaxed w-full 2xl:w-[200px]">
          <p className=" tracking-wider 2xl:tracking-tighter pb-4">
            Copyright © Ledger SAS. All rights reserved. Ledger, Ledger Stax, 
            Ledger Nano S, Ledger Vault, BOLOS are trademarks owned by Ledger SAS</p>
          <p className="tracking-wider 2xl:tracking-tighter pb-2">106 Rue du Temple, 75003 Paris, France</p>
          <p className='pb-2'> Payment method</p>
          <div className="flex items-center space-x-4 ">
            <span className=''><FaPaypal /></span>
            <span className=''><FaCcVisa /></span>
            <span className=''><FaCcMastercard /></span>
            <span className=''><FaCcAmex /></span>
            <span className=''><FaBitcoin /></span>
            <span className=''><FaEthereum /></span>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 xl:grid-rows-2 xl:grid-flow-col gap-x-[150px] p-4 mt-[12px] font-semibold xl:tracking-normal xl:leading-relaxed h-full 2xl:pl-[-50px]">
        {mobileFooterData.map((section, index) => (
          <div key={index} className="xl:hidden">
            <button onClick={() => toggleDropdown(section.title)} className="w-full flex justify-between items-center font-semibold mb-2">
              {section.title} {dropdown[section.title] ? <MdExpandLess /> : <MdExpandMore />}
            </button>
            {dropdown[section.title] && (
              <div className="ml-4">
                <ul>
                  {section.links.map((link, idx) => (
                    <li className="mb-2 text-[13px]" key={idx}><a href={link.url}>{link.name}</a></li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
       {desktopFooterData.map((section, index) => (
          <div key={index} className={`hidden xl:flex flex-col justify-between ${section.titleClassName} `}>
            <h4 className=''>{section.title}</h4>
            <ul className="flex flex-col flex-1">
              {section.links.map((link, idx) => (
                <li key={idx} className="mb-2 text-[13px]"><a href={link.url} className={link.className}>{link.name}</a></li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
