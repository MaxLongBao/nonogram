import React, { useState } from 'react';
import './styled.css';

const Cell = (props) => {

  const {
    value,
    filled,
    handleMistakes,
    handleMouseDown,
    handleMouseUp,
    clicked
  } = props;

  const [cellStyle, setCellStyle] = useState(null);
  const [locked, setLocked] = useState(false);

  const gameLogic = () => {
    if (!locked) {
      if (filled === true) {
        if (value === 'o') {
          setCellStyle({
            backgroundColor: 'blue',
          })
          setLocked(true)
        } else {
          handleMouseUp();
          handleMistakes();
        }
      } else {
        if (value === 'x') {
          setCellStyle({
            backgroundColor: 'red'
          })
          setLocked(true)
        } else {
          handleMouseUp();
          handleMistakes();
        }
      }
    }
  }

  const handleClick = () => {
    gameLogic();
    handleMouseDown();
  }

  const handleEnter = () => {
    if (clicked) {
      gameLogic();
    }
  }

  return (
    <div
      className='cell' 
      onMouseDown={handleClick}
      onMouseUp={handleMouseUp}
      onMouseEnter={handleEnter}
      style={cellStyle} 
    >
      {/* {value} */}
    </div>
  );
};

export default Cell;