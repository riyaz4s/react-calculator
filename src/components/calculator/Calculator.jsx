import { useState } from 'react';
import Display from './display/Display';
import Keyboard from './keyboard/Keyboard';
import { saveHistory } from '../../helpers/index'
import './Calculator.css'

function Calculator() {
  const [text, setText] = useState('0');
  const [completed, setCompleted] = useState(false);

  const handleEquals = (displayValue) => {
    const operation = displayValue;
    try {
      displayValue = eval(displayValue);
      if(isFinite(displayValue)) {
        displayValue = displayValue.toString();
      } else {
        displayValue = 'Syntax error';
      }
    } catch(e) {
      displayValue = 'Syntax error';
    }
    if(operation !== displayValue) {
      setCompleted(true);
      saveHistory(operation, displayValue)
    }
    return displayValue;
  }

  const keyClick = (value) => {
    let displayValue = text;
    const prevCompleted = completed;
    if(displayValue === 'Syntax error') {
      displayValue = '0'
    }
    if(completed) {
      setCompleted(false);
    }
    if(value === 'equals') {
      displayValue = handleEquals(displayValue);
    } else if(value === 'clear') {
      displayValue = '0';
    } else if(value === 'backspace') {
      displayValue = displayValue.slice(0, displayValue.length-1);
    } else { // handles numbers
      if(displayValue === '0' || prevCompleted) { // checks if it is a new operation
        displayValue = value;
      } else {
        displayValue = `${displayValue}${value}`;
      }
    }
    setText(displayValue === '' ? '0' : displayValue);
  }
  return (
  <div className='calculator'>
    <Display value={text}/>
    <Keyboard onKeyClick={keyClick}/>
  </div>
  );
}

export default Calculator;