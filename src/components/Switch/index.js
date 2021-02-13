import React from 'react';
import './styled.css';

const Switch = (props) => {

  const { handleSwitch } = props;

  return (
    <div className='switch'>
      <div onClick={handleSwitch} >x</div>
      <div onClick={handleSwitch} >o</div>
    </div>
  );
};

export default Switch;