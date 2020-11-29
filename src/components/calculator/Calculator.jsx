import { useState } from 'react';
import Display from './display/Display';
import Keyboard from './keyboard/Keyboard';
import { handleValue } from '../../helpers/index'
import './Calculator.css'

function Calculator() {
  const [text, setText] = useState('0');
  const [completed, setCompleted] = useState(false);

  const keyClick = (value) => {
    let displayValue = text;
    let isNewOperation = completed;
    if(displayValue === 'Syntax error') {
      displayValue = '0'
    }
    if(isNewOperation) { // reset new operation flag
      setCompleted(false);
    }
    ({ completed: isNewOperation, displayValue } = handleValue(value, displayValue, isNewOperation));

    if(completed !== isNewOperation) { // if this is a completion operation reset completed value
      setCompleted(isNewOperation);
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