// src/components/Footer.js
import React, { useState } from 'react';
import { FaPaypal, FaCcVisa, FaCcMastercard, FaCcAmex, FaBitcoin, FaEthereum } from 'react-icons/fa';
import { MdExpandMore, MdExpandLess } from 'react-icons/md';

const Footer = () => {
  const [dropdown, setDropdown] = useState({});

  const toggleDropdown = (section) => {
    setDropdown((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  const navItems = [
    {
      title: 'Products',
      items: ['Ledger Stax', 'Ledger Nano X', 'Ledger Nano S Plus', 'Compare our devices', 'Bundles', 'Accessories', 'All products', 'Downloads'],
    },
    
    {
      title: 'For Business',
      items: ['Ledger Enterprise Solution'],
    },
  
    {
      title: 'Careers',
      items: ['Join us', 'All jobs'],
    },

    {
      title: 'Crypto Assets',
      items: ['Bitcoin wallet', 'Ethereum wallet', 'Cardano wallet', 'XRP', 'Monero wallet', 'USDT wallet', 'See all assets'],
    },
    {
      title: 'Crypto services',
      items: ['Crypto prices', 'Buying crypto', 'Staking crypto', 'Swapping crypto'],
    },
    
    {
      title: 'For Startups',
      items: ['Funding from Ledger Cathay Capital'],
    },
    {
      title: 'For Developers',
      items: ['The Developer Portal'],
    },
    {
      title: 'Get started',
      items: ['Start using your Ledger device', 'Compatible wallets and services', 'How to buy Bitcoin', 'Guide before buying bitcoin', 'Bitcoin Hardware Wallet'],
    },
    {
      title: 'See also',
      items: ['Support', 'Bounty Program', 'Resellers', 'Ledger Press Kit', 'Affiliates', 'Status', 'Developers', 'Partners'],
    },
   
    {
      title: 'About',
      items: ['Our vision', 'Ledger Academy', 'The company', 'The people', 'Diversity', 'Our blogs'],
    },
    {
      title: 'Legal',
      items: ['Legal Center', 'Sales Terms and Conditions', 'Privacy Policy', 'Disclaimers'],
    },
  ];

  return (
    <footer className="bg-black text-white py-8 px-4 lg:px-14 text-sm w-full">
      <div className="flex flex-col justify-between items-left  mb-8">
        <div className="flex flex-col justify-between items-left relative mb-[50px] ">
          <img src="https://shop.ledger.com/ledger-logo-long-white.svg" alt="Ledger Logo" className="mb-10 h-8 absolute " />
          <button className="border h-[50px] w-[90px] rounded-full my-6 relative left-[] top-[40px]">
            English
            <MdExpandMore className="inline ml-1" />
            {/* Dropdown for languages can be added here */}
          </button>
        </div>
        <div className="text-left text-[11px] space-y-2 xl:space-y-0 xl:flex xl:flex-col xl:space-x-4 font-semibold leading-relaxed w-full">
          <p className="mb-8 tracking-wider">
            Copyright © Ledger SAS. All rights reserved. Ledger, Ledger Stax, 
            Ledger Nano S, Ledger Vault, BOLOS are trademarks owned by Ledger SAS</p>
          <p className="tracking-wider">106 Rue du Temple, 75003 Paris, France</p>
          <p className=''> Payment method</p>
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
      <div className="grid grid-cols-1 xl:grid-cols-4 gap-4 font-semibold">
        {navItems.map((section, index) => (
          <div key={index} className="xl:hidden">
            <button onClick={() => toggleDropdown(section.title)} className="w-full flex justify-between items-center font-semibold mb-2">
              {section.title} {dropdown[section.title] ? <MdExpandLess /> : <MdExpandMore />}
            </button>
            {dropdown[section.title] && (
              <div className="ml-4">
                <ul>
                  {section.items.map((item, idx) => (
                    <li className="mb-2" key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
        {navItems.map((section, index) => (
          <div key={index} className="hidden xl:block">
            <h4 className="font-semibold">{section.title}</h4>
            <ul>
              {section.items.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
