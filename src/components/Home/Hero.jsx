import React from 'react';
import { Link } from 'react-router-dom';
import apple from '../../assets/apple.png'
import heroImage from '../../assets/hero_image.png'
import arrow from '../../assets/arrow.svg'

const Hero = () => {
  return (
    <div className="flex gap-48 items-center bg-black text-white p-16 mt-8 h-[22rem] mx-auto">
      <div className="max-w-md">
        <div className="flex items-center gap-6">
          <img src={apple} alt="apple Icon" className="w-10 h-12 mr-2" />
          <h2 className="text-lg text-white/80 hover:text-white cursor-pointer">iPhone 14 Series</h2>
        </div>
        <div className="mt-6 text-left">
          <p className="text-5xl leading-snug text-wrap font-semibold w-72">Up to 10% off Voucher</p>
        </div>
        <div className='flex items-center align-middle mt-4'>
            <Link to="/product" className="inline-block text-white border-b-white py-2 hover:transform hover:-translate-y-0.5 transition-transform duration-300">
            Shop Now 
            </Link>
            <span className="ml-2">
                <img src={arrow} alt="" className='inline-flex'/>
            </span>
        </div>
        <div className="w-28">
         <hr />
        </div>
      </div>
      <div className="product-image">
        <img src={heroImage} alt="Product Image" className="w-[28rem]" />
      </div>
    </div>
  );
};

export default Hero;
