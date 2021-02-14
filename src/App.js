import React, { useState, useEffect } from 'react';
import Grid from './components/Grid';
import Switch from './components/Switch';
import './App.css';

function App() {

  const generateMatrix = (length) => {
    const fullOrEmpty = ['x', 'o'];
    const grid = [];

    for (let i = 0; i < length; i++) {
      const cell = [];
      for (let j = 0; j < length; j++) {
        const randomElement = fullOrEmpty[Math.floor(Math.random() * fullOrEmpty.length)];
        cell.push(randomElement);
      }
      grid.push(cell);
    }
    return grid;
  }

  const findRows = (array, length) => {
    if (array) {
      const rowsArray = [];
      for (let i = 0; i < length; i++) {
        const rowsArrayGroup = [];
        let number = 0;
        for (let j = 0; j < length; j++) {
          if (array[i][j] === 'o') {
            number++
            if (j === (9)) {
              rowsArrayGroup.push(number)
              number = 0
            }
          } else if (array[i][j] === 'x' || j === (9)) {
            if (number > 0) {
              rowsArrayGroup.push(number);
              number = 0
            }
          }
        }
        rowsArray.push(rowsArrayGroup);
      }
      console.log(rowsArray, 'rowsArray')
      return rowsArray;
    }
    return
  }

  const findColumns = (array, length) => {
    if (array) {
      const columnsArray = [];
      for (let i = 0; i < length; i++) {
        const columnsArrayGroup = [];
        let number = 0;
        for (let j = 0; j < length; j++) {
          if (array[j][i] === 'o') {
            number++
            if (j === (9)) {
              columnsArrayGroup.push(number)
              number = 0
            }
          } else if (array[j][i] === 'x' || j === (9)) {
            if (number > 0) {
              columnsArrayGroup.push(number);
              number = 0
            }
          }
        }
        columnsArray.push(columnsArrayGroup);
      }
      console.log(columnsArray, 'columnsArray')
      return columnsArray;
    }
    return
  }

  const [matrix, setMatrix] = useState(null);
  const [filled, setFilled] = useState(true);
  const [mistakes, setMistakes] = useState(0);
  const [rows, setRows] = useState(null);
  const [columns, setColumns] = useState(null);

  useEffect(() => {
    setMatrix(generateMatrix(10))
  }, [])
  
  useEffect(() => {
      setRows(findRows(matrix, 10))
      setColumns(findColumns(matrix, 10))
  }, [matrix])

  console.log(rows, 'rows')
  console.log(columns, 'columns')

  const handleSwitch = () => {
    if (filled === true) {
      setFilled(false)
    } else {
      setFilled(true);
    }
  }

  const handleMistakes = () => {
    setMistakes(mistakes + 1);
  }

  return (
    <div className="App">
      { matrix && rows && columns
      ? <Grid matrix={matrix} rows={rows} columns={columns} filled={filled} handleMistakes={handleMistakes} />
      : null }
      <Switch handleSwitch={handleSwitch} filled={filled} />
      <div>Mistakes = {mistakes}</div>
    </div>
  );
}

export default App;
