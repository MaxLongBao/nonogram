import React, { useState, useEffect } from 'react';
import FirstScreen from './components/FirstScreen';
import Grid from './components/Grid';
import Switch from './components/Switch';
import Restart from './components/Restart';
import EndGame from './components/EndGame';
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
            number++;
            if (j === (length - 1)) {
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
            if (j === (length - 1)) {
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
      return columnsArray;
    }
    return
  }

  const [matrix, setMatrix] = useState(null);
  const [filled, setFilled] = useState(true);
  const [mistakes, setMistakes] = useState(3);
  const [rows, setRows] = useState(null);
  const [columns, setColumns] = useState(null);
  const [difficulty, setDifficulty] = useState(null);
  const [start, setStart] = useState(false);
  const [outcome, setOutcome] = useState(null);
  const [end, setEnd] = useState(false);
  const [restart, setRestart] = useState(0);

  useEffect(() => {
    setMatrix(generateMatrix(difficulty))
  }, [difficulty])
  
  useEffect(() => {
      setRows(findRows(matrix, difficulty))
      setColumns(findColumns(matrix, difficulty))
      setMistakes(3)
      setOutcome(null)
  }, [matrix])

  useEffect(() => {
    if (mistakes < 1) {
      callEndGame('lose');
    }
}, [mistakes])

useEffect(() => {
  setMatrix(null);
  setRows(null);
  setColumns(null);
  setStart(false);
  setDifficulty(null);
  setEnd(false);
  setOutcome(null);
}, [restart])

  const handleSwitch = () => {
    if (filled === true) {
      setFilled(false)
    } else {
      setFilled(true);
    }
  }

  const callEndGame = (outcome) => {
    setEnd(true)
    if (outcome === 'win') {
      setOutcome('won!');
    } else {
      setOutcome('lost!');
    }
  }

  const handleMistakes = () => {
    setMistakes(mistakes - 1);
  }

  const handleDifficulty = (e) => {
    switch (e.target.innerText) {
      case 'Easy':
        setDifficulty(5);
        setStart(true)
        break;

      case 'Medium':
        setDifficulty(10)
        setStart(true)
        break;

      default:
        break;
    }
  }

  const handleRestart = () => {
    setRestart(restart + 1)
  }

  return (
    <div className="App">
      <h1>NONOGRAM</h1>
      { end
      ? (<div>
          <EndGame outcome={outcome} />
          <Restart handleRestart={handleRestart} />
        </div>)
      : ( matrix && rows && columns && start
        ? <div>
            <Grid
              matrix={matrix}
              rows={rows}
              columns={columns}
              filled={filled} 
              difficulty={difficulty}
              handleMistakes={handleMistakes}
              callEndGame={callEndGame} 
            />
            <Switch handleSwitch={handleSwitch} filled={filled} />
            <div>Mistakes = {mistakes}</div>
            <Restart handleRestart={handleRestart} />
          </div>
        : <FirstScreen handleDifficulty={handleDifficulty} /> )
      }
    </div>
  );
}

export default App;
