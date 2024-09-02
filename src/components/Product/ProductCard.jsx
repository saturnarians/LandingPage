import React, { useState } from 'react';
import {FaUsb, FaCoins,} from 'react-icons/fa';
import { IoBluetoothOutline } from "react-icons/io5";
import { GoDeviceDesktop} from "react-icons/go";
import { HiOutlineShieldCheck } from "react-icons/hi2";
import { LuLock } from "react-icons/lu";
import { LiaShippingFastSolid } from "react-icons/lia";
import PropTypes from 'prop-types';

// Function to render appropriate icons based on support type
const renderIcon = (type) => {
  switch (type) {
    case 'USB-C':
      return <FaUsb className="h-[17px] w-[17px] inline-block mr-1" />;
    case 'Mobile & Desktop':
      return <GoDeviceDesktop className="h-[17px] w-[17px] inline-block mr-1" />;
    case 'Bluetooth':
      return <IoBluetoothOutline className="h-[17px] w-[17px] inline-block mr-1" />;
    case '5000+ coins supported':
      return <FaCoins className="h-[17px] w-[17px] inline-block mr-1" />;
    default:
      return null;
  }
};

const benefitsIcon = (type) => {
  switch (type) {
    case 'Secured wallet access':
      return <LuLock className="h-[17px] w-[17px] inline-block mr-1" />;
    case '1-year subscription':
      return <HiOutlineShieldCheck className="h-[17px] w-[17px] inline-block mr-1" />;
    default:
      return null;
  }
};

const ProductCard = ({ product }) => {
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);

  return (
    <>
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 xl:w-[446px] bg-customWhiteGrey hover:bg-white ring-1 ring-customLightGrey">
      <img
        className={`w-[290px] h-[330px]`}
        src={product.colorImages[selectedColor] || product.image} // Use image for selected color or default image
        alt={product.name}
      />
      <div className="px-6 py-4 grid">
        <div className="place-self-center font-bold text-[20px] mb-2">{product.name}</div>
        <div className="place-self-center font-bold text-[20px] mb-2">{product.subname}</div>
        <div className="place-self-center flex items-center mb-2">
          <span className="text-orange-500 font-bold mr-2">{product.rating}</span>
          <span className='text-[13px] font-semibold'>({product.reviews} Reviews)</span>
        </div>
        <div className=" w-[250px] flex flex-wrap mb-4">
          {product.support.map((item, index) => (
            <span
              key={index}
              className="inline-block bg-veryLightGrey rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            >
              {renderIcon(item)} {item}
            </span>
          ))}
        </div>
        <div className="p-4">
        <div className="relative">
        <hr className="absolute inset-x-0 top-1/2 border-t border-gray-300" />
        <span className="text-[10px] absolute px-3 font-normal bottom-[-7px] text-gray-900 bg-customWhiteGrey left-1/2 transform -translate-x-1/2">Ledger Recover benefits</span>
        </div>
        </div>

        <div className=" text-gray-700 text-[13px] mb-4">
          {product.benefits.map((benefit, index) => (
            <p key={index} className="inline-block bg-veryLightGrey mx-3 rounded-full mb-2" >{benefitsIcon(benefit)} {benefit}</p>
          ))}
        </div>
        <div className="mb-4">
          {product.colors.map((color, index) => (
            <span
              key={index}
              className={`inline-block w-6 h-6 rounded-full mr-2 ml-[10px] cursor-pointer ring-1 ring-gray-400 bg-${color}-500 ${selectedColor === color ? 'border-2 border-black' : ''}`}
              onClick={() => setSelectedColor(color)}
              title={`${color} color`}
            ></span>
          ))}
        </div>
        <div className='flex gap-2 ml-[30px] '>
        <div className="text-xl font-bold mb-4 line-through leading-tight tracking-tighter">{product.originalPrice}</div>
        <div className="text-xl font-bold mb-4 text-orange-500 leading-tight tracking-tighter">{product.discountedPrice}</div>
        </div>
        <p className='text-[11px] leading-tight tracking-tight ml-[30px]'>Save 2 months off Ledger Recover</p>
      </div>
      <div className="px-6 pb-4 grid">
        <button
          className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full w-full "
          onClick={() => alert('Added to cart')}
        >
          Add to cart
        </button>
        <p className='place-self-center text-[16px] font-semibold relative mt-6'><LiaShippingFastSolid className="absolute mx-2 h-[22px] w-[22px] top-[2px] right-[98px]" />Free shipping</p>
      </div>
    </div>
    </>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    subname:PropTypes.string.isRequired,
    rating: PropTypes.string.isRequired,
    reviews: PropTypes.number.isRequired,
    support: PropTypes.arrayOf(PropTypes.string).isRequired,
    benefits: PropTypes.arrayOf(PropTypes.string).isRequired,
    colors: PropTypes.arrayOf(PropTypes.string).isRequired,
    colorImages: PropTypes.objectOf(PropTypes.string).isRequired, // New prop for color images
    originalPrice: PropTypes.string.isRequired,
    discountedPrice: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProductCard;
