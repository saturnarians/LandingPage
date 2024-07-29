import React, { useState } from 'react';
import {
  FaUsb,
  FaApple,
  FaWindows,
  FaAndroid,
  FaCoins,
  FaBluetooth,
  FaLock
} from 'react-icons/fa';

const ProductCard = ({ product }) => {
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);

  // Function to render appropriate icons based on support type
  const renderIcon = (type) => {
    switch (type) {
      case 'USB-C':
        return <FaUsb className="h-5 w-5 inline-block mr-1" />;
      case 'macOS':
      case 'iOS':
        return <FaApple className="h-5 w-5 inline-block mr-1" />;
      case 'Windows':
        return <FaWindows className="h-5 w-5 inline-block mr-1" />;
      case 'Android':
        return <FaAndroid className="h-5 w-5 inline-block mr-1" />;
      case 'Bluetooth':
        return <FaBluetooth className="h-5 w-5 inline-block mr-1" />;
      case '5000+ coins supported':
        return <FaCoins className="h-5 w-5 inline-block mr-1" />;
      default:
        return null;
    }
  };

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 border">
      <img
        className={`w-full border-4 border-${selectedColor}-500`}
        src={product.image}
        alt={product.name}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{product.name}</div>
        <div className="flex items-center mb-2">
          <span className="text-orange-500 font-bold mr-2">{product.rating}</span>
          <span>({product.reviews} Reviews)</span>
        </div>
        <div className="mb-4">
          {product.support.map((item, index) => (
            <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              {renderIcon(item)} {item}
            </span>
          ))}
        </div>
        <div className="text-gray-700 text-base mb-4">
          {product.benefits.map((benefit, index) => (
            <p key={index}>{benefit}</p>
          ))}
        </div>
        <div className="mb-4">
          {product.colors.map((color, index) => (
            <span
              key={index}
              className={`inline-block w-6 h-6 rounded-full mr-2 cursor-pointer bg-${color}-500`}
              onClick={() => setSelectedColor(color)}
            ></span>
          ))}
        </div>
        <div className="text-xl font-bold mb-4 line-through">{product.originalPrice}</div>
        <div className="text-xl font-bold mb-4 text-orange-500">{product.discountedPrice}</div>
      </div>
      <div className="px-6 pb-4">
        <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded w-full">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
