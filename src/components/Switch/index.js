import React from 'react';
import './styled.css';

const Switch = (props) => {

  const { handleSwitch, filled } = props;

  return (
    <div className='switch'>
      { filled
      ? <div onClick={handleSwitch} >o</div>
      : <div onClick={handleSwitch} >x</div>
      }
    </div>
  );
};

export default Switch;