import React from 'react';

import './style.css';

const FirstScreen = (props) => {

  const { handleDifficulty } = props;

  return (
    <div className='difficulty-container' onClick={(e) => handleDifficulty(e)}>
      <div>
        <h2>Choose the difficulty:</h2>
      </div>
      <div className='difficulty-select'>
        <div className='difficulty'>Easy</div>
        <div className='difficulty'>Medium</div>
      </div>
    </div>
  )
}

export default FirstScreen;