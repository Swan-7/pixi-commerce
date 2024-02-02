import React from 'react';

const FeatureItem = ({ icon, header, text }) => {
  return (
    <div className="flex flex-col items-center -ml-2 h-56 mt-24 mb-16">
     <div className="bg-gray-300 w-20 p-3 flex items-center justify-center rounded-full">
       <img src={icon} alt="Feature Icon" className="bg-black p-3 w-16 rounded-full" />
      </div>
      <h3 className="text-xl font-semibold mb-2">{header}</h3>
      <p className="text-gray-600 text-sm font-medium">{text}</p>
    </div>
  );
};

export default FeatureItem;
