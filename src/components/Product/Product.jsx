import React from 'react';
import ProductCard from './ProductCard';
import nano from '../../assets/nano_x_validation_from_top.png';

const products = [
  {
    name: 'Ledger Nano S Plus + 1 year of Ledger Recover',
    rating: '★★★★★',
    reviews: 1567,
    support: ['USB-C', 'macOS', 'Windows', 'Android', '5000+ coins supported'],
    benefits: ['Secured wallet access', '1-year subscription'],
    colors: ['black', 'blue', 'purple', 'white', 'orange'],
    originalPrice: 'NGN 140,913.50',
    discountedPrice: 'NGN 318,800.00',
    image: '/path/to/nano-s-plus-image.jpg', // Ensure the path is correct
  },
  {
    name: 'Ledger Nano X + 1 year of Ledger Recover',
    rating: '★★★★★',
    reviews: 11444,
    support: ['Bluetooth', 'USB-C', 'macOS', 'Windows', 'iOS', 'Android', '5000+ coins supported'],
    benefits: ['Secured wallet access', '1-year subscription'],
    colors: ['black', 'blue', 'purple', 'white', 'orange'],
    originalPrice: 'NGN 265,513.50',
    discountedPrice: 'NGN 443,400.00',
    image: '/path/to/nano-x-image.jpg', // Ensure the path is correct
  },
];

const Product = () => {
  return (
    <div className=" grid mx-2 pb-10 w-full mt-12">
      <h1 className="place-self-center text-[28px] xl:text-[40px] 2xl:text-[50px] font-bold text-center my-8">
      Save 2 months off on annual plans</h1>
      <p className='className=" place-self-center text-[16px] font-semibold text-center leading-relaxed tracking-tight text-balance my-8"'>
        when you get a Ledger Recover subscription with a Ledger Nano crypto wallet</p>
        <div className="place-self-center flex flex-col justify-center xl:flex-row xl:w-[750px] 2xl:w-full ">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>

      <div className='my-6 mx-2 p-4 place-self-center text-center xl:mb-20 '>
        <p className='text-[11px] text-center text-customGrey leading-relaxed tracking-tight text-balance mt-[46px] mb-16 xl:mb-[76px] xl:w-[730px] xl:tracking-wide xl:leading-relaxed 2xl:w-[896]'>
          Ledger Recover availability depends on the country/region where your identity document is issued. 
        <a href='#' className='underline cursor-pointer' onClick=''>Visit here</a> for country/region availability. Subscription requires a valid passport or national identity card. 
        Valid driver&apos;s licenses also accepted for Canadian and US users. Subscriptions are non-refundable except where statutory refund/cancellation rights apply. 
        Redeem codes are valid for 1 year from purchase4date. Subscriptions operate on an automatic renewal basis. Please note that while the redeem code purchase is charged in your local currency, any monthly renewal payment will be processed in EUR (Euros). 
        Due to fluctuating exchange rates, the price in your local currency may vary at the time of each payment and you may incur additional fees from your bank for currency conversion. 
        Cancel anytime to prevent future charges. By clicking ”Add to cart”, you agree to accept these terms and the <a href='#' className='underline cursor-pointer' onClick=''>Ledger Recover Redeem Code T&Cs here.</a>
        </p>
        <span className='mt-6 text-[15px] border border-customGrey rounded-[0.175rem] max-w-fit px-3 py-2 shadow-lg tracking-wide ]'>Service provided by Coincover</span>
      </div>
           

      <div className='place-self-center flex flex-col justify-between 2xl:flex-row border bg-customLightGrey w-auto text-[11px] relative
       text-customGrey leading-tight tracking-tighter text-balance mt-4 mx-4 p-2 h-[280px] xl:w-[720px] 2xl:w-[1020px] 2xl:h-[130px] rounded-[0.5rem] '>
           <div className='flex flex-col pt-[40px] xl:w-[400px] 2xl:w-full leading-[1.2rem] tracking-tight text-wrap 2xl:text-balance 2xl:absolute left-[] r-[] 2xl:bottom-[1px]  '>
           <div className='flex gap-[30px] '>
           <img src={nano} alt='' className='w-[80px] h-auto' ></img>
           <p className='text-[18px] font-semibold my-4 text-left'>Already have a Ledger Nano device?</p>
           </div>
           <p className='text-[18px] font-semibold mb-6 text-left ml-[110px] xl:mb-10 '>Try Ledger Recover today directly in Ledger Live!</p>
           </div>
           <button className='place-self-center bg-customBlack rounded-full text-white text-[16px] px-6  cursor-pointer w-full font-semibold h-[80px] 2xl:h-[60px] tracking-tighter 
           2xl:w-[185px] 2xl:ml-[40px] 2xl:absolute 2xl:left-[779px] r-[] 2xl:bottom-[35px]'>
            Start your free trial</button>
      </div>
    </div>
  );
};

export default Product;
