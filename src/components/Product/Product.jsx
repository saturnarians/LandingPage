import React from 'react';
import ProductCard from './ProductCard';
import nano from '../../assets/nano_x_validation_from_top.png';
//NanoSPlus
import SMatteBlack from '../../assets/SPlus/Ledger_Nano_S_Plus_Matte_Black.png';
import SRetrogaming from '../../assets/SPlus/LNSP-Retrogaming.png';
import SAmethystpurple from '../../assets/SPlus/LNSP-amethystpurple.png';
import SPastalGreen from '../../assets/SPlus/LNSP-pastelgreen.png';
import SBtcOrange from '../../assets/SPlus/Ledger_Nano_LNSP_BTC_Transparent_Background.png';
//NanoX
import XMatteBlack from '../../assets/x/Ledger_Nano_X_Onyx_Black.png';
import XRetrogaming from '../../assets/x/LNX-Retrogaming.png';
import XAmethystpurple from '../../assets/x/LNX-Amethystpurple.png';
import XPastalGreen from '../../assets/x/LNX-Pastelgreen.webp';
import XBtcOrange from '../../assets/x/Ledger_Nano_LNX_BTC_White_Transparent_Background.png';

const products = [
  {
    name: 'Ledger Nano S Plus ',
    subname: '+ 1 year of Ledger Recover',
    rating: '★★★★★',
    reviews: 1567,
    support: ['Bluetooth', 'USB-C', 'Mobile & Desktop','5000+ coins supported'],
    benefits: ['Secured wallet access', '1-year subscription'],
    colors: ['black', 'blue', 'purple', 'white', 'orange'],
    colorImages: {
      black: SMatteBlack,
      blue: SPastalGreen,
      purple: SAmethystpurple,
      white: SRetrogaming,
      orange: SBtcOrange
    },
    originalPrice: 'USD 88',
    discountedPrice: 'USD 199.25',
    image: '/path/to/default-image.jpg', // Default image if needed
  },
  {
    name: 'Ledger Nano X Plus ',
    subname: '+ 1 year of Ledger Recover',
    rating: '★★★★★',
    reviews: 1567,
    support: ['Bluetooth', 'USB-C', 'Mobile & Desktop','5000+ coins supported'],
    benefits: ['Secured wallet access', '1-year subscription'],
    colors: ['black', 'blue', 'purple', 'white', 'orange'],
    colorImages: {
      black: XMatteBlack,
      blue: XPastalGreen,
      purple: XAmethystpurple,
      white: XRetrogaming,
      orange: XBtcOrange
    },
    originalPrice: 'USD 88',
    discountedPrice: 'USD 199.25',
    image: '/path/to/default-image.jpg', // Default image if needed
  },
];

const Product = () => {
  return (
    <div className="grid mx-2 pb-10 w-full mt-12">
      <h1 className="place-self-center text-[28px] xl:text-[40px] 2xl:text-[50px] font-bold text-center my-8">
        Save 2 months off on annual plans
      </h1>
      <p className='place-self-center text-[16px] font-semibold text-center leading-relaxed tracking-tight text-balance my-8'>
        when you get a Ledger Recover subscription with a Ledger Nano crypto wallet
      </p>
      <div className="place-self-center flex flex-col justify-center xl:flex-row xl:w-[750px] 2xl:w-full ">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>

      <div className='my-6 mx-2 p-4 place-self-center text-center xl:mb-20'>
        <p className='text-[11px] text-center text-customGrey leading-relaxed tracking-tight text-balance mt-[46px] mb-16 xl:mb-[76px] xl:w-[730px] xl:tracking-wide xl:leading-relaxed 2xl:w-[896]'>
          Ledger Recover availability depends on the country/region where your identity document is issued. 
          <a href='#' className='underline cursor-pointer'>Visit here</a> for country/region availability. Subscription requires a valid passport or national identity card. 
          Valid driver&apos;s licenses also accepted for Canadian and US users. Subscriptions are non-refundable except where statutory refund/cancellation rights apply. 
          Redeem codes are valid for 1 year from purchase date. Subscriptions operate on an automatic renewal basis. Please note that while the redeem code purchase is charged in your local currency, any monthly renewal payment will be processed in EUR (Euros). 
          Due to fluctuating exchange rates, the price in your local currency may vary at the time of each payment and you may incur additional fees from your bank for currency conversion. 
          Cancel anytime to prevent future charges. By clicking ”Add to cart”, you agree to accept these terms and the <a href='#' className='underline cursor-pointer'>Ledger Recover Redeem Code T&Cs here.</a>
        </p>
        <span className='mt-6 text-[15px] border border-customGrey rounded-[0.175rem] max-w-fit px-3 py-2 shadow-lg tracking-wide'>Service provided by Coincover</span>
      </div>
      
      <div className='place-self-center flex flex-col justify-between 2xl:flex-row border bg-veryLightGrey w-[300px] text-[11px] relative border-customLightGrey
       text-customGrey leading-tight tracking-tight text-balance mt-4 mx-1 p-2 h-[280px] xl:h-[200px] xl:w-[720px] 2xl:w-[1020px] 2xl:h-[130px] rounded-[0.5rem]'>
        <div className='relative flex pt-[40px] w-[100%] xl:w-[400px] 2xl:w-full leading-[1.2rem] tracking-tighter text-balance 2xl:text-balance 2xl:absolute left-0 right-0 2xl:bottom-[1px]'>
            <img src={nano} alt='Ledger Nano device' className='w-[80px] h-[96px] xl:mt-[-20px] 2xl:ml-8 2xl:mb-6 xl:ml-[50px]' />
            <div className=' px-6 xl:text-center xl:ml-[50px] tracking-tighter flex flex-col 2xl:gap-[30px] w-[300px] mb-6 xl:mb-[4px] text-[18px] font-semibold 2xl:absolute 2xl:top-[39px] 2xl:right-[370px] text-wrap xl:text-nowrap'>
            <p className=' ml-[10px] 2xl:ml-6 my-2 text-left 2xl:text-center'>Already have a Ledger Nano device?</p>
            <p className='text-left 2xl:text-center ml-[10px] 2xl:ml-[110p1]'>Try Ledger Recover today directly in Ledger Live!</p>
            </div>
        </div>
        <button className='place-self-center bg-customBlack rounded-full text-white text-[16px] px-6 cursor-pointer w-auto font-semibold h-[40px] 2xl:h-[60px] tracking-tighter 
           2xl:w-[185px] 2xl:ml-[40px] 2xl:absolute 2xl:left-[779px] 2xl:bottom-[35px]'>
          Start your free trial
        </button>
      </div>
    </div>
  );
};

export default Product;
