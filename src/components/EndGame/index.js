import React from 'react';
import Restart from '../Restart';

const EndGame = (props) => {

  const {outcome} = props;

  return (
    <div>
      <h1>You {outcome}</h1>
      <Restart />
    </div>
  );
};

export default EndGame;