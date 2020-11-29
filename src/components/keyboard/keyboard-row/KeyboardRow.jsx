import Button from '../button/Button';
import './KeyboardRow.css';


function KeyboardRow({ keys, onKeyClick }) {
  return (
    <div className="keyboard-row">
      {
        keys.map(({ text, value, customClass }, index) => {
          return <Button key={index} onKeyClick={onKeyClick} text={text} value={value} className={customClass}/>
        })
      }
    </div>
  )
}

export default KeyboardRow;