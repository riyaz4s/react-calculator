import KeyboardRow from './keyboard-row/KeyboardRow';
import { keySet } from '../../../constants';
import './Keyboard.css';


function Keyboard({ onKeyClick }) {
  return (
    <div className="keyboard">
      {
        keySet.map((keys, index) => {
          return <KeyboardRow key={index} onKeyClick={onKeyClick} keys={keys}/>
        })
      }
    </div>
  )
}

export default Keyboard;