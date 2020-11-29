import { useEffect, useRef } from 'react';
import './Display.css';


function Display({value}) {
  const displayEl = useRef(null);

  useEffect(() => {
    displayEl.current.scrollLeft = displayEl.current.scrollWidth;
  })
  return (
    <div ref={displayEl} className="content-display">
      {value}
    </div>
  )
}

export default Display;