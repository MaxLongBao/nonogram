import React from 'react';
import Cell from '../Cell';
import './styled.css';

const Grid = (props) => {

  const { matrix, filled } = props;

  console.log(matrix);

  const grid = matrix.map((row) => {
    let content = row.map((value) => {
      return (
        // unique key to fix
        <Cell value={value} filled={filled} />
      );
    })
    return (
      <div className='row'>{content}</div>
    )
  })

  return (
    <div className='grid'>
      {grid}
    </div>
  );
};

export default Grid;