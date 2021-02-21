import React from 'react';

const Restart = (props) => {

  const { handleRestart } = props;

  return (
    <div>
      <button onClick={handleRestart}>Restart</button>
    </div>
  );
};

export default Restart;