const saveHistory = (operation, displayValue) => {
  let currentHistory = getHistory();
  let currentVal = `${operation} = ${displayValue}`;
  currentHistory = pushHistory(currentHistory, currentVal);
  try {
    currentHistory = JSON.stringify(currentHistory)
  } catch(e) {
    currentHistory = JSON.stringify([currentVal])
  }
  localStorage.setItem('history', currentHistory);  
}

const getHistory = () => {
  let currentHistory;
  try {
    const history = JSON.parse(localStorage.getItem('history'));
    currentHistory = Array.isArray(history) ? history : [];
  } catch(e) {
    currentHistory = [];
  }
  return currentHistory
}

const pushHistory = (currentHistory, value) => {
  const length = currentHistory.push(value);
  if(length > 10) {
    currentHistory = currentHistory.slice(length - 10);
  }
  return currentHistory;
}

export {
  saveHistory,
  getHistory,
}