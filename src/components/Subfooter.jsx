import React from 'react';
import { FaGithub, FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaLinkedin, FaTiktok, FaDiscord } from 'react-icons/fa';
import {Link} from 'react-scroll';
const Section = () => {
  return (
    <div className='2xl:w-full'>
      {/* Header Section */}
      <header className="grid bg-black text-center py-12 px-4l">
        <h1 className="text-purple-300 text-2xl xl:text-4xl font-bold leading-relaxed tracking-tight text-balance mb-6">Wallet recovery made easy with Ledger Recover</h1>
        <p className="place-self-center text-gray-400 mt-2 border bg-inherit rounded-md w-[250px] mb-4">
          Service provided by Coincover</p>
        <Link to="backupSection" spy={true} offset={-100} smooth={true} duration={500} >
        <button className=" place-self-center mt-6 px-6 py-3 bg-white text-black font-semibold rounded-full w-[180px]">
          See Bundle offers
        </button>
        </Link>
      </header>

      {/* Footer Section */}
      <footer className="bg-purple-300 py-8 px-4 ">
        <div className="container mx-auto flex flex-col xl:flex-row justify-between items-center">
          {/* Stay in touch section */}
          <div className="text-center xl:text-left mb-8 xl:mb-0 xl:w-1/2">
            <h2 className="text-black text-xl font-bold">Stay in touch</h2>
            <p className="text-black mt-2 font-semibold">Announcements can be found in our blog.<br/>Press contact: <a href="mailto:media@ledger.com" className="text-black underline">media@ledger.com</a></p>
            <div className="flex justify-center xl:justify-start space-x-2 mt-4">
              <a href="#"><FaGithub className="text-black text-2xl" /></a>
              <a href="#"><FaFacebook className="text-black text-2xl" /></a>
              <a href="#"><FaInstagram className="text-black text-2xl" /></a>
              <a href="#"><FaTwitter className="text-black text-2xl" /></a>
              <a href="#"><FaYoutube className="text-black text-2xl" /></a>
              <a href="#"><FaLinkedin className="text-black text-2xl" /></a>
              <a href="#"><FaTiktok className="text-black text-2xl" /></a>
              <a href="#"><FaDiscord className="text-black text-2xl" /></a>
            </div>
          </div>
          
          {/* Subscribe to our newsletter section */}
          <div className="text-center xl:text-left xl:w-1/2">
            <h2 className="text-black text-xl font-bold">Subscribe to our newsletter</h2>
            <p className="text-black mt-2">New coins supported, blog updates and exclusive offers directly in your inbox</p>
            <div className="flex flex-col xl:flex-row mt-4">
              <input type="email" placeholder="Your email" className="px-4 py-2 mb-2 xl:mb-0 xl:mr-2 rounded-full bg-purple-300 text-white ring-2 ring-black"/>
              <button className="bg-black text-white px-6 py-2 rounded-full">Register to newsletter →</button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Section;
