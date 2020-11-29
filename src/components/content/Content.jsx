import { useState } from 'react';
import Calculator from '../calculator/Calculator';
import Header from '../header/Header';
import History from '../history/History';
import './Content.css'

function Content() {
  const [showHistory, setShowHistory] = useState(false);
  return (
  <div className='content'>
    <Header showHistory={showHistory} toggle={setShowHistory}/>
    {
      showHistory ? <History/> : <Calculator/>
    }
  </div>
  );
}

export default Content;