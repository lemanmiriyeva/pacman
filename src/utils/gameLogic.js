import { BOARD_SIZE, MAZE } from './constants';
import { getDotsFromMaze } from './constants';
import { GHOSTS } from './constants'; 

export const initializeGame = () => {
  const startingPosition = { x: 1, y: 1 };

  const initialDots = getDotsFromMaze();
  
  const dotsWithoutStartingDot = initialDots.filter(dot => !(dot.x === startingPosition.x && dot.y === startingPosition.y));

  return {
    pacmanPosition: startingPosition,
    initialPacmanPosition: startingPosition, 
    dots: dotsWithoutStartingDot, 
    ghosts: GHOSTS,
    score: 0,
    gameOver: false,
    lives: 3 
  };
};



export const isInRestrictedArea = (x, y) => {
  return x >= 8 && x <= 12 && y >= 8 && y <= 12;
};


export const collectDot = (position, dots) => {
  return dots.filter(dot => !(dot.x === position.x && dot.y === position.y));
};


export const checkGameOver = (pacmanPosition, ghosts, lives, isInvincible) => {
  if (isInvincible) return lives; 


  const collisionDetected = ghosts.some(ghost => 
    ghost.x === pacmanPosition.x && ghost.y === pacmanPosition.y 
  );

  if (collisionDetected) {
    return 0;
  }

  return lives;
};

export const movePacman = (position, direction, ghosts, lives, isInvincible) => {
  let newPosition = { ...position };

  switch (direction) {
    case 'UP':
      newPosition.y -= 1;
      break;
    case 'DOWN':
      newPosition.y += 1;
      break;
    case 'LEFT':
      newPosition.x -= 1;
      break;
    case 'RIGHT':
      newPosition.x += 1;
      break;
    default:
      break;
  }

  if (MAZE[newPosition.y][newPosition.x] === 1) {
    return position; 
  }

  if (isInRestrictedArea(newPosition.x, newPosition.y)) {
    return position;
  }

  const updatedLives = checkGameOver(newPosition, ghosts, lives, false);

  if (updatedLives <= 0) {
    console.log("Game Over!");
    return position; 
  }

  return newPosition;
};
