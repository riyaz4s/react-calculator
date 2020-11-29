import Toggle from './toggle/Toggle';
import './Header.css';

function Header({ showHistory, toggle }) {
  return <div className='header'>
    <Toggle showHistory={showHistory} toggle={toggle}/>
    <div className='title'>{showHistory ? 'Last 10 operations': 'Calculator'}</div>
  </div>
}

export default Header;