import React, { useState, useEffect } from 'react';
import cross from '../../assets/cancel.svg';
import './styled.css';

const Cell = (props) => {

  const { value, filled } = props;

  console.log(value, 'value')

  const [cellStyle, setCellStyle] = useState(null);

  const handleClick = (e) => {
    if (filled === true) {
      if (value === 'o') {
        setCellStyle({
          backgroundColor: 'blue',
         })
      } else {
        console.log('bad')
      }
    } else {
      if (value === 'x') {
        setCellStyle({
          backgroundColor: 'red'
        })
      } else {
        console.log('bad x')
      }
    }
  }

  return (
    <div className='cell' onClick={handleClick} style={cellStyle} >
      {value}
    </div>
  );
};

export default Cell;