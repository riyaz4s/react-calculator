import back from '../../../images/back.png';
import history from '../../../images/history.png';
import './Toggle.css';

function Toggle({ showHistory, toggle }) {
  return (<div className='image-container' onClick={() => toggle(!showHistory)}>
    <img src={showHistory ? back : history} alt={'showHistory.png'}/>
  </div>);
}

export default Toggle;