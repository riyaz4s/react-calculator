import './Button.css';

import classname from 'classnames';
function Button({ text, value, onKeyClick, className}) {
  return (
    <div className={classname('key', className)} onClick={() => onKeyClick(value)}>
      {text}
    </div>
  )
}

export default Button;