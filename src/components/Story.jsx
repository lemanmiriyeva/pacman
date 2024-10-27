import React from 'react';
import { TiArrowBack } from 'react-icons/ti';
import { Link } from 'react-router-dom';

function Story1() {
  return (
    <div className='story-body'>
       <Link to={"/"} className="back-story"><TiArrowBack style={{fontSize:"50px"}}/>Back</Link>
      <img className='story' src="/story1.jpeg" alt="Story 1" />
      <img className='story' src="/story2.jpeg" alt="Story 2" />
    </div>
  );
}

export default Story1;
