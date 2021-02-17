import React from 'react';
import './styled.css';

const Switch = (props) => {

  const { handleSwitch, filled } = props;

  let squareStyle;
  let toggleStyle;

  if (filled) {
    squareStyle = {
      backgroundColor: 'blue'
    }
    toggleStyle = {
      justifyContent: 'flex-end'
    }
  } else {
    squareStyle = {
      backgroundColor: 'red'
    }
    toggleStyle = {
      justifyContent: 'flex-start'
    }
  }

  return (
    <div className='switch' onClick={handleSwitch} style={toggleStyle}>
      <div className='toggle'>
        <div className='square' style={squareStyle}>
        </div>
      </div>
    </div>
  );
};

export default Switch;