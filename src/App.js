import { useState, useEffect } from 'react';
import './App.css';

function App() {

  const generateMatrix = (length) => {
    const fullOrEmpty = ['x', 'o'];
    const grid = [];

    for (let i = 0; i < length; i++) {
      const rows = [];

      for (let j = 0; j < length; j++) {
        const randomElement = fullOrEmpty[Math.floor(Math.random() * fullOrEmpty.length)];
        rows.push(randomElement);
      }
      grid.push(rows);
    }
    return grid;
  }

  const [matrix, setMatrix] = useState(generateMatrix(3));

  console.log(matrix, 'matrix')

  return (
    <div className="App">

    </div>
  );
}

export default App;
