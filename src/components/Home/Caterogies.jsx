import React from 'react';
import Category from './Category';
import categoryRectangle from '../../assets/categoryRectangle.svg'
import { Link } from 'react-router-dom';
import ellipse from '../../assets/Ellipse23.png'
import jbl from '../../assets/JBL_BOOMBOX.png'

const categoriesData = [
  { name: 'Phones', icon: 'phones' },
  { name: 'Computers', icon: 'computers' },
  { name: 'SmartWatch', icon: 'smartwatch' },
  { name: 'Camera', icon: 'camera' },
  { name: 'Headphones', icon: 'headphones' },
  { name: 'Gaming', icon: 'gaming' },
];

const Categories = () => {
  return (
   <div>
    <div className=''>
        <div className='flex gap-4 items-center mb-6'>
            <img src={categoryRectangle} alt="" />
            <h3 className='text-orange-600 font-medium'>Categories</h3>
        </div>
        <h1 className='text-4xl font-semibold text-left'>Browse By Category</h1>
    </div>
     <div className="flex justify-around max-w-screen-lg mx-auto my-12 gap-6">
      {categoriesData.map((category, index) => (
        <Category key={index} name={category.name} icon={category.icon} />
      ))}
    </div>
    
    <div className="flex gap-48 items-center bg-black text-white p-16 mt-8 h-[22rem] mx-auto">
      <div className="max-w-md">
        <div className="flex items-center gap-6">
            <h3 className='text-[#0F6] font-medium'>Categories</h3>
        </div>
        <div className="mt-6 text-left">
          <p className="text-5xl leading-snug text-wrap font-semibold">Enhance Your Music Experience</p>
        </div>
        <div className='flex items-center align-middle mt-4'>
            <Link to="/product" className="bg-[#0F6] text-xs text-white py-3 px-10 rounded-sm hover:transform hover:-translate-y-0.5 transition-transform duration-300">
            Buy Now!
            </Link>
        </div>
      </div>
      <div className="relative">
      {/* <div className="bg-gray-400 z-0 opacity-50 rounded-full"></div> */}
        <img src={jbl} alt="JBL Image" className="w-[28rem] absolute h-auto rounded-md inset-0 top-12"/>
        <img src={ellipse} alt="" className=' inset-0 z-0  h-[22rem]'/>
      </div>
    </div>
   </div>
  );
};

export default Categories;
