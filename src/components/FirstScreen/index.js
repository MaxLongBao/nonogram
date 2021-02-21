import React from 'react';

import './style.css';

const FirstScreen = (props) => {

  const { handleDifficulty } = props;

  return (
    <div className='difficulty-container' onClick={(e) => handleDifficulty(e)}>
      <div>
        <h1>Choose the difficulty:</h1>
      </div>
      <div className='difficulty-select'>
        <div className='difficulty'>Easy</div>
        <div className='difficulty'>Medium</div>
      </div>
    </div>
  )
}

export default FirstScreen;