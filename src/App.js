import { useState } from 'react';
import Grid from './components/Grid';
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

  const [matrix, setMatrix] = useState(generateMatrix(3));

  return (
    <div className="App">
      <Grid matrix={matrix} />
    </div>
  );
}

export default App;
