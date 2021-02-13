import { useState } from 'react';
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

  const [matrix, setMatrix] = useState(generateMatrix(3));
  const [filled, setFilled] = useState(true);
  const [mistakes, setMistakes] = useState(0);

  const handleSwitch = () => {
    if (filled === true) {
      setFilled(false)
    } else {
      setFilled(true);
    }
  }

  return (
    <div className="App">
      <Grid matrix={matrix} filled={filled} />
      <Switch handleSwitch={handleSwitch} />
      <div>Mistakes = {mistakes}</div>
    </div>
  );
}

export default App;
