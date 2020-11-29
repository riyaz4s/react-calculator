import { useState } from 'react';
import Display from '../display/Display';
import Keyboard from '../keyboard/Keyboard';
import './Content.css'

function Content() {
  const [text, setText] = useState('0');

  const keyClick = (value) => {
    let displayValue = text;
    if(displayValue === 'Syntax error') {
      displayValue = ''
    }
    if(value === 'equals') {
      try {
        displayValue = eval(displayValue);
        if(isFinite(displayValue)) {
          displayValue = displayValue.toString();
        } else {
          displayValue = 'Syntax error';
        }
      } catch(e) {
        console.log(e, displayValue)
        displayValue = 'Syntax error';
      }
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
  <div className='content'>
    <Display value={text}/>
    <Keyboard onKeyClick={keyClick}/>
  </div>
  );
}

export default Content;