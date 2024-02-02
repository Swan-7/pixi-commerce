import React from 'react';

const Category = ({ name, icon }) => {
  const iconPath = `/src/assets/${icon}.svg`;

  return (
    <div className="flex flex-col rounded-md items-center cursor-pointer hover:bg-[#DB4444]">
      <div className="border border-slate-400 w-44 h-40 rounded-md flex flex-col justify-center items-center">
        <img src={iconPath} alt={name} className="w-14 h-14 mb-4" />
      <div className="text-md font-medium">{name}</div>
      </div>
    </div>
  );
};

export default Category;
