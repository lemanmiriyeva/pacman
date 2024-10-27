import React from 'react';
const Pacman = ({ position, isInvincible, direction }) => {
  const rotation = {
    UP: 'rotate(-90deg)',
    DOWN: 'rotate(90deg)',
    LEFT: 'scaleX(-1)',
    RIGHT: 'rotate(0deg)',
  };

  return (

     <img
      src="/game.png"
      alt="Pacman"
      style={{
        width: '100%',
        height: '100%',
        position: 'relative',
        transition: 'top 0.2s, left 0.2s', 
        opacity: isInvincible ? 0.5 : 1,  
        filter: isInvincible ? 'brightness(0.8)' : 'none',  
           opacity: isInvincible ? 0.5 : 1,
      transform: rotation[direction], 
      gridRowStart: position.y + 1,
      gridColumnStart: position.x + 1,
      zIndex:"1000"
      }}
    />
  );
};


export default Pacman;
    // <div className="pacman" style={{
    //   width: '100%',
    //   height: '100%',
    //   position: 'relative',
    //   borderRadius: '50%',
    //   backgroundColor: 'yellow',
    //   opacity: isInvincible ? 0.5 : 1, // Transparent when invincible
    //   transform: rotation[direction], // Apply rotation based on direction
    //   transition: 'top 0.3s ease, left 0.3s ease'
    // }}>
    //   <div className="pacman__eye" style={{ top: '4px', left: '8px' }}></div>
    //   <div className="pacman__mouth"></div>
    // </div>
