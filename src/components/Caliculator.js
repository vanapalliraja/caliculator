import React, { useState } from 'react';
import './Calculator.css'

function Calculator() {
  const [display, setDisplay] = useState('');

  const addToDisplay = (value) => {
    setDisplay(display + value);
  };

  const clearDisplay = () => {
    setDisplay('');
  };

  const calculateResult = () => {
    try {
      const result = eval(display);
      setDisplay(result.toString());
    } catch (error) {
      setDisplay('Error');
    }
  };

  return (
    <div className="calculator">
      <input type="text" className="display" value={display} readOnly />
      <div className="buttons">
        {[7, 8, 9, '+', 4, 5, 6, '-', 1, 2, 3, '*', 0].map((value) => (
          <button key={value} onClick={() => addToDisplay(value)}>
            {value}
          </button>
        ))}
        <button onClick={calculateResult}>=</button>
        <button onClick={() => addToDisplay('/')}>/</button>
        <button onClick={clearDisplay}>C</button>
      </div>
    </div>
  );
}

export default Calculator;
