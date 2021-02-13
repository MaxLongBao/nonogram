import React from 'react';
import Cell from '../Cell';

const Grid = (props) => {

  const { matrix } = props;

  console.log(matrix);

  const cells = matrix.map((row) => {
    let content = row.map((value) => {
      return (
        <div>{value}</div>
      );
    })
    return (
      <Cell content={content} />
    )
  })

  return (
    <div>
      {cells}
    </div>
  );
};

export default Grid;