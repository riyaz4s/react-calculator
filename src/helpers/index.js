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

const substitutePercent = (value) => {
  let result = value.replace(/%/g, '*1/100');
  if(value.slice(-1) === '%') {
    result = result.slice(0, result.length-1)
  }
  return result;
}

const handleEquals = (displayValue) => {
  let completed = false;
  const operation = displayValue;
  try {
    displayValue = eval(substitutePercent(displayValue));
    if(isFinite(displayValue)) {
      displayValue = displayValue.toString();
    } else {
      displayValue = 'Syntax error';
    }
  } catch(e) {
    displayValue = 'Syntax error';
  }
  if(operation !== displayValue) {
    completed = true;
    saveHistory(operation, displayValue)
  }
  return {
    displayValue,
    completed
  };
}

const handleValue = (value, displayValue, isNewOperation) => {
  let completed = isNewOperation;
  switch(value) {
    case 'equals':
      ({ displayValue, completed } = handleEquals(displayValue));
      break;
    case '%':
      ({ displayValue, completed } = handleEquals(`${displayValue}%`));
      break;
    case 'clear':
      displayValue = '0';
      break;
    case 'backspace':
      displayValue = displayValue.slice(0, displayValue.length-1);
      break;
    default:  // handles numbers
      if(displayValue === '0' || isNewOperation) { // checks if it is a new operation
        displayValue = value;
      } else {
        displayValue = `${displayValue}${value}`;
      }
      break;
  }
  return {
    displayValue,
    completed
  }
}

export {
  saveHistory,
  getHistory,
  substitutePercent,
  handleValue
}