import React from 'react';
import './styled.css';

const Cell = (props) => {

  const { value } = props;

  console.log(value, 'value')
  return (
    <div className='cell'>
      {value}
    </div>
  );
};

export default Cell;