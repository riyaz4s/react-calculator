import { useState } from 'react';
import Display from './display/Display';
import Keyboard from './keyboard/Keyboard';
import { saveHistory } from '../../helpers/index'
import './Calculator.css'

function Calculator() {
  const [text, setText] = useState('0');

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
      saveHistory(operation, displayValue)
    }
    return displayValue;
  }

  const keyClick = (value) => {
    let displayValue = text;
    if(displayValue === 'Syntax error') {
      displayValue = ''
    }
    if(value === 'equals') {
      displayValue = handleEquals(displayValue);
    } else if(value === 'clear') {
      displayValue = '0';
    } else if(value === 'backspace') {
      displayValue = displayValue.slice(0, displayValue.length-1);
    } else if(displayValue === '0') {
      displayValue = value;
    } else {
      displayValue = `${displayValue}${value}`;
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