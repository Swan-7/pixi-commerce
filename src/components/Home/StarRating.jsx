import React from 'react';

const StarRating = ({ rating }) => {
  const filledStars = Array.from({ length: rating }, (_, index) => index + 1);
  const emptyStars = Array.from({ length: 5 - rating }, (_, index) => index + 1);

  return (
    <div className="flex">
      {filledStars.map((star) => (
        <span key={star} className="text-yellow-500 ml-1">&#9733;</span> 
      ))}
      {emptyStars.map((star) => (
        <span key={star} className="text-gray-400/75 ml-1">&#9733;</span> // Unicode for a star
      ))}
    </div>
  );
};

export default StarRating;
