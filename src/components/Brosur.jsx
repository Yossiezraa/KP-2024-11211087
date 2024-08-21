import React from 'react';

const Brosur = ({ imageSrc, altText }) => {
  return (
    <div className="flex justify-center my-8">
      <img 
        src={imageSrc} 
        alt={altText} 
        className="w-full max-w-7xl h-auto" // Increased max width
      />
    </div>
  );
};

export default Brosur;
