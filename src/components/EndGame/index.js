import React from 'react';
import Restart from '../Restart';

const EndGame = (props) => {

  const {outcome} = props;

  return (
    <div>
      <h2>You {outcome}</h2>
    </div>
  );
};

export default EndGame;