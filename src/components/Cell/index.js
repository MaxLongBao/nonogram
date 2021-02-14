import React, { useState } from 'react';
import './styled.css';

const Cell = (props) => {

  const { value, filled, handleMistakes } = props;

  const [cellStyle, setCellStyle] = useState(null);

  const handleClick = () => {
    if (filled === true) {
      if (value === 'o') {
        setCellStyle({
          backgroundColor: 'blue',
         })
      } else {
        handleMistakes();
      }
    } else {
      if (value === 'x') {
        setCellStyle({
          backgroundColor: 'red'
        })
      } else {
        handleMistakes();
      }
    }
  }

  return (
    <div className='cell' onClick={handleClick} style={cellStyle} >
      {/* {value} */}
    </div>
  );
};

export default Cell;