import React from 'react';
const Ghost = ({ image,x,y }) => {
  return (
    <img
      src={image}
      alt="Ghost"
      className="ghost"
      style={{
        width: '100%',
        height: '100%',
        objectFit:"contain",
        transform: 'scale(1.4)', 
        position: 'absolute',
        top: 0,
        left: 0,
        transition: 'top 0.3s ease, left 0.3s ease',

        gridRowStart: y + 1,
        gridColumnStart: x + 1,
      }}
    />
  );
};


export default Ghost;
