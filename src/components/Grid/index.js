import React, { useState, useEffect } from 'react';
import Cell from '../Cell';
import './styled.css';

const Grid = (props) => {

  const {
    matrix,
    rows,
    columns,
    filled,
    handleMistakes,
    callEndGame
  } = props;

  const [clicked, setClicked] = useState(false);
  const [lockedCell, setLockedCell] = useState(0);
  const [blueSquares, setBlueSquares] = useState(null);
  
  const blueSquaresCount = () => {
    let counter = 0;
    rows.forEach((array) => {
      array.forEach((item) => {
        counter += item;
      })
    })
    setBlueSquares(counter)
  }

  useEffect(() => {
    blueSquaresCount()
  }, [rows]);

  useEffect(() => {
    if (lockedCell === blueSquares) {
      callEndGame('win');
    }
  }, [lockedCell])
  
  const handleMouseDown = () => {
    setClicked(true);
  }

  const handleMouseUp = () => {
    setClicked(false);
  }



  const lockCell = () => {
    setLockedCell(lockedCell + 1);
  }

  const grid = matrix.map((row) => {
    let content = row.map((value) => {
      return (
        // unique key to fix
        <Cell 
          value={value}
          filled={filled}
          lockCell={lockCell}
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