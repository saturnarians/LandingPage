import React from 'react';
import HeroButtons from "./HeroButtons";
import iphone from '../assets/iphone__1_.png';
import nano from '../assets/nanoDrive.png';
import { FaCheckCircle } from "react-icons/fa";
import { TbArrowCurveRight } from "react-icons/tb";
import {Link as RouterLink} from 'react-router-dom';

const Hero = () => {
  return (
    <>
      <div className='grid w-full h-3/4 bg z-10 font-[Inter, sans-serif]'>
        <div className='flex flex-col xl:flex-row gap-6 justify-center text-center items-center place-items-center px-2 mx-4'>
          <h1 className='text-left font-bold text-4xl 2xl:text-6xl xl:text-4xl leading-snug tracking-tight xl:relative xl:left-16 w-full z-1000'>
            Wallet recovery<br /> made easy with <br /> Ledger Recover
          </h1>
          <div className="text-left xl:text-right xl:w-1/2 ">
            <p className="font-semibold 2xl:text-2xl text-customGrey text-balance leading-tight tracking-tighter xl:indent-8">Restore access to your wallet without your Secret Recovery Phrase</p>
            <p className="font-semibold text-sm text-customGrey pb-4">Service provided by Coincover</p>
            <div className="place-self-center max-xl:hidden">
              <HeroButtons />
            </div>
          </div>
        </div>
        <div className='flex flex-row justify-center text-center items-center place-self-center px-2 h-[350px] w-[300px] xl:h-[678px] xl:w-[640px] relative'>
          <img src={iphone} className='h-[285px] w-[190px] xl:h-[600px] xl:w-[400px] absolute inset-y-0 left-0 z-10' alt=""></img>
          <img src={nano} className='h-[243px] w-[190px] xl:h-[513px] xl:w-[400px] absolute inset-y-0 right-0 z-0' alt=""></img>
        </div>
        <div className='place-self-center xl:hidden'>
          <HeroButtons />
        </div>
        <h1 className='items-center place-self-center sm:text-[28px] xl:text-4xl 2xl:text-[50px] font-bold leading-tight tracking-tighter my-4 py-2 mx-4 px-2'>
          A digital backup for your wallet access
        </h1>
        <div className='place-self-center xl:items-center flex flex-col xl:flex-row items-right text-[18px] xl:text-[20px] leading-tight tracking-tighter my-1 py-2 px-4'>
          <p className='px-6 mx-4 relative'>
            <span className='absolute right-[240px] md:absolute md:right-[290px] lg:absolute lg:right-[] top-1 xl:absolute xl:right-[205px] h-[24] w-[24px]'><FaCheckCircle /></span>
            End-to-end encryption
          </p>
          <p className='px-6 mx-4 relative xl:relative'>
            <span className='absolute right-60 md:absolute md:right-[290px] top-1 h-[24] w-[24px] xl:absolute xl:right-[315px]'><FaCheckCircle /></span>
            Self-custody secured by your identity
          </p>
        </div>
        <span className='place-self-center items-center font-normal text-[16px] leading-tight tracking-tighter border border-customBlack rounded mt-6 mb-20 p-1'>
          Service provided by Coincover
        </span>

        {/* <div className='flex justify-center'>
          <Link to="/home">
            <button '>Get Started</button>
          </Link>
        </div> */}
      <div id="backupSection" className="place-self-center flex justify-center items-center text-center text-[20px] font-semibold bg-customOrangeRed text-white px-4 py-2 rounded-lg w-auto mb-6">
      <TbArrowCurveRight className='mr-2 w-[20px] border-x-orange-500'/>
      <RouterLink to={'./AuthPage'}>Back up your Ledger Wallet now</RouterLink>
      </div> 
    </div>
    </>
  );
}

export default Hero;
