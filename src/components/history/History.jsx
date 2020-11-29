import { getHistory } from '../../helpers/index';
import ListRow from './list-row/ListRow';
import './History.css';

function History() {
  const historyList = getHistory();
  return  <div className='history'>
    {historyList.length ? historyList.reverse().map( history =>  <ListRow content={history}/>) : <div className='no-entry'>No entries</div> }
  </div>;
}

export default History;