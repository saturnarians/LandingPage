import React, { useState, useEffect } from 'react';
import { GoPlus } from "react-icons/go";
import video from '../assets/video.mp4';
import image1 from '../assets/Gallery/Lost_my_recovery_phrase.png';
import image2 from '../assets/Gallery/Tweet_3_Wrote_down_.png';
import image3 from '../assets/Gallery/tweet1.png';


const images = [
  image1,
  image2,
  image3,
];

const Gallery = () => {

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
      const interval = setInterval(() => {
          setCurrentImage((prevImage) => (prevImage + 1) % images.length);
      }, 5000); // 5 seconds for each image
      return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid relative w-96 h-full xl:w-full xl:h-full overflow-hidden text-slate-200 my-16 mx-2 p-2">
      <div className='place-self-center flex flex-col justify-center text-center items-center mx-2 px-1 pb-4'>
        <h1 className='text-[28px] xl:text-[40px] 2xl:text-[50px] font-bold text-balance leading-[32px] tracking-[-1.26px] xl:leading-[48px] xl:tracking-[-1.8px] 2xl:leading-[56px] 2xl:tracking-[-2.8px] pb-6'>
          Never lose access to your wallet</h1>
        <p className='text-[16px] font-normal text-customLightGrey text-balance leading-[22px] tracking-[.6px] px-2 pb-4'>Secure your peace of mind. Restore access to your crypto wallet in case of a lost or out of reach Secret Recovery Phrase.</p>
        <p className='text-[15px] font-normal text-left text-customOrangeRed text-balance leading-[22px] tracking-[1.9px] pb-6 px-8 relative'>
          <span className="absolute left-[0] bottom-[48px]  xl:left-[0] xl:bottom-[26px] "><GoPlus /></span>What is a Secret Recovery Phrase?</p>
      </div>

      {/* Image section */}

      {/* <div className="relative w-72 h-72 overflow-hidden place-self-center my-12 mx-2 p-2 ">
            {images.map((src, index) => (
                <img
                    key={index}
                    src={src}
                    alt={`Slide ${index}`}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${index === currentImage ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                />
            ))}
        </div> */}

      {/* Image section */}
      
       <div className='place-self-center flex flex-col justify-center text-center items-center mx-2 px-1 pb-4'>
          <h1 className='text-[28px] xl:text-[40px] 2xl:text-[50px] font-bold text-balance leading-[32px] tracking-[-1.26px] xl:leading-[48px] xl:tracking-[-1.8px] 2xl:leading-[56px] 2xl:tracking-[-2.8px] pb-6'>
            Restore access to your wallet whenever you need it</h1>
          <p className='text-[15px] font-normal text-left text-customOrangeRed text-balance leading-[22px] tracking-[.6px] pb-6 px-8 relative'>
          <span className="absolute left-[0] bottom-[48px]  xl:left-[0] xl:bottom-[26px] "><GoPlus /></span>What makes an encrypted backup secure?</p>
        </div>

  {/* video section */}
        <video autoPlay muted loop 
        className='place-self-center xl:w-[700] xl:h-[300] 2xl:w-[1216px] 2xl:h-[685] 3xl:w-[1356px] 3xl:h-[685] 3xl:m-8 2xl:p-[5rem]' width="auto" height="400" >
        <source src={video} type="video/mp4"/>
        </video>
{/* video section */}

        <div className='place-self-center'>
          <div className='flex flex-col xl:flex-row xl:justify-center xl:items-center gap-[20px] text-left mt-12 xl:py-6 px-2 
         border-b xl:border-customGrey  xl:border-t xl:pb-6 mb-8 py-8 2xl:w-[1000px] 3xl:w-[1300px]'>
          <h1 className='font-bold text-[24px] xl:text-[32px] 2xl:text-[38px] text-left xl:py-8 pb-6 leading-snug tracking-tight xl:relative xl:left-16 w-full'>
          Security</h1>
          <p className='font-semibold text-[17px] xl:text-[20px] 2xl:text-[18px] text-balance leading-[1.2] xl:w-[500px] xl:relative xl:right-16
           2xl:w-[500px] 2xl:relative 2xl:right-18 3xl:w-[1300px] tracking-tight'>
            No compromise on security. Your digital access is protected with end-to-end encryption protocol, safeguarding your data and keeping it secure.
          </p>
        </div>

        <div className='flex flex-col xl:flex-row xl:justify-center xl:items-center gap-[20px] text-left mt-12 xl:py-6 px-2 
          border-b xl:border-customGrey xl:pb-6 mb-8 py-8 2xl:w-[1000px] 3xl:w-[1300px]'>
          <h1 className='font-bold text-[24px] xl:text-[32px] 2xl:text-[38px] text-left xl:py-8 pb-6 leading-snug tracking-tight xl:relative xl:left-16 w-full'>
           Ease of use</h1>
           <p className='font-semibold text-[17px] xl:text-[20px] 2xl:text-[18px] text-balance leading-[1.2] xl:w-[500px] xl:relative xl:right-16
           2xl:w-[500px] 2xl:relative 2xl:right-18 3xl:w-[1300px] tracking-tight'>
            Your identity is the key to your wallet. Simply restore access to your wallet with Ledger Recover through Ledger Live with your identity.</p>
        </div>

          
          <div className='flex flex-col xl:flex-row xl:justify-center xl:items-center gap-[20px] text-left mt-12 xl:py-6 px-2 
           border-b xl:border-customGrey xl:pb-6 mb-8 py-8 2xl:w-[1000px] 3xl:w-[1300px]'>
          <h1 className='font-bold text-[24px] xl:text-[32px] 2xl:text-[38px] text-left xl:py-8 pb-6 leading-snug tracking-tight xl:relative xl:left-16 w-full'>
          Peace of mind</h1>
           <p className='font-semibold text-[17px] xl:text-[20px] 2xl:text-[18px] text-balance leading-[1.2] xl:w-[500px] xl:relative xl:right-16
           2xl:w-[500px] 2xl:relative 2xl:right-18 3xl:w-[1300px] tracking-tight'>
          Self-custody without anxiety. Restore access to your wallet wherever you need it, ensuring your digital assets are always within reach.</p>
          </div>

        </div>


    </div>
  );
};

export default Gallery;
