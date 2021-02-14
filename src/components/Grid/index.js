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
    let singleValue = value.map((v) => {
      return (
        <div className='single-value-row'>{v}</div>
      );
    })
    return (
      <div className='rowData'>{singleValue}</div>
    )
  })

  const columnsData = columns.map((value) => {
    let singleValue = value.map((v) => {
      return (
        <div>{v}</div>
        );
      })
    return (
      <div className='columnData'>{singleValue}</div>
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