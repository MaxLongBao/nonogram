import React, { useState } from 'react';
import Cell from '../Cell';
import './styled.css';

const Grid = (props) => {

  const {
    matrix,
    rows,
    columns,
    filled,
    handleMistakes
  } = props;

  const [clicked, setClicked] = useState(false);

  const handleMouseDown = () => {
    setClicked(true);
  }

  const handleMouseUp = () => {
    setClicked(false);
  }
  
  const grid = matrix.map((row) => {
    let content = row.map((value) => {
      return (
        // unique key to fix
        <Cell 
          value={value}
          filled={filled}
          handleMistakes={handleMistakes}
          handleMouseDown={handleMouseDown}
          handleMouseUp={handleMouseUp}
          clicked={clicked}
        />
      );
    })
    return (
      <div className='row'>{content}</div>
    )
  })
console.log(clicked)
  const rowsData = rows.map((value) => {
    let singleValue = value.map((v) => {
      return (
        <div className='single-value-row'>{v}</div>
      );
    })
    return (
      <div className='row-data'>{singleValue}</div>
    )
  })

  const columnsData = columns.map((value) => {
    let singleValue = value.map((v) => {
      return (
        <div>{v}</div>
        );
      })
    return (
      <div className='column-data'>{singleValue}</div>
    )
  })

  return (
    <div>
      <div className='columns'>{columnsData}</div>
      <div className='grid'>
        <div className='rows'>{rowsData}</div>
        <div>{grid}</div>
      </div>
    </div>
  );
};

export default Grid;