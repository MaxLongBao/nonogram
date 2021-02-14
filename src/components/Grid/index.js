import React from 'react';
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

  console.log(matrix, 'matrix grid')
  
  const grid = matrix.map((row) => {
    let content = row.map((value) => {
      return (
        // unique key to fix
        <Cell value={value} filled={filled} handleMistakes={handleMistakes} />
      );
    })
    return (
      <div className='row'>{content}</div>
    )
  })

  const rowsData = rows.map((value) => {
    return (
      <div className='rowData'>{value}</div>
    )
  })

  const columnsData = columns.map((value) => {
    return (
      <div className='columnData'>{value}</div>
    )
  })

  // let styleRows;
  
  // if (rows) {
  //   styleRows = {
  //     height: `${rows * 30}px`
  //   }
  // }

  // console.log(styleRows)

  return (
    <div>
      <div className='columns'>{columnsData}</div>
      <div className='grid'>
        <div className='rows' >{rowsData}</div>
        <div>{grid}</div>
      </div>
    </div>
  );
};

export default Grid;