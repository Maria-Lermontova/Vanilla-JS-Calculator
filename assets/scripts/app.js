const usrInput = document.getElementById('input');

const addButton = document.getElementById('btn-add');
const subtractButton = document.getElementById('btn-subtract');
const divideButton = document.getElementById('btn-divide');
const multiplyButton = document.getElementById('btn-multiply');
const equalButton = document.getElementById('btn-equal');

const currentResultOutput = document.getElementById('current-result');
const currentCalculationOutput = document.getElementById('current-calculation');

const defaultResult = 0;
let currentResult = defaultResult;

let currentCalculations = {
  firstInput: '',
  mathOperator: '',
  currentResult: ''
}

function getUserInput() {
  return parseInt(usrInput.value);
}

function clearInput() {
    usrInput.value = '';
  }

function outputResult(result, text) {
  currentResultOutput.textContent = result;
  currentCalculationOutput.textContent = text;
}

function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription);
}



// function calculateResult(calculationType) {
//   const enteredNumber = getUserInput();
//   if (
//     calculationType !== 'ADD' &&
//     calculationType !== 'SUBTRACT' &&
//     calculationType !== 'DIVIDE' &&
//     calculationType !== 'MULTIPLY' ||
//     !enteredNumber
//   ) {
//     return;
//   }
//   const initialResult = currentResult;
//   let mathOperator;
//   if (calculationType === 'ADD') {
//     currentResult += enteredNumber;
//     mathOperator = '+';
//   } else if (calculationType === 'SUBTRACT') {
//     currentResult -= enteredNumber;
//     mathOperator = '-';
//   } else if (calculationType === 'DIVIDE') {
//     currentResult /= enteredNumber;
//     mathOperator = '/';
//   } else if (calculationType === 'MULTIPLY') {
//     currentResult *= enteredNumber;
//     mathOperator = '*';
//   }

//   createAndWriteOutput(mathOperator, initialResult, enteredNumber);
//   console.log(`${initialResult} ${mathOperator} ${enteredNumber} = ${currentResult}`);
// }

// function add() {
//   calculateResult('ADD');
// }

// function subtract() {
//   calculateResult('SUBTRACT');
// }

// function divide() {
//   calculateResult('DIVIDE');
// }

// function multiply() {
//   calculateResult('MULTIPLY');
// }

function add() {
  const firstInput = getUserInput();
  currentCalculations.firstInput = firstInput;
  currentCalculations.mathOperator = '+';
  clearInput();
  console.log(currentCalculations);
  }

function subtract() {
  const firstInput = getUserInput();
  currentCalculations.firstInput = firstInput;
  currentCalculations.mathOperator = '-';
  clearInput();
  console.log(currentCalculations);
}

function divide() {
  const firstInput = getUserInput();
  currentCalculations.firstInput = firstInput;
  currentCalculations.mathOperator = '/';
  clearInput();
  console.log(currentCalculations);
}

function multiply() {
  const firstInput = getUserInput();
  currentCalculations.firstInput = firstInput;
  currentCalculations.mathOperator = '*';
  clearInput();
  console.log(currentCalculations);
}

function calculateResult(calculationType, firstInput) {
  calculationType = currentCalculations.mathOperator;
  firstInput = currentCalculations.firstInput;
  const secondInput = getUserInput();
  if (
    calculationType !== '+' &&
    calculationType !== '-' &&
    calculationType !== '/' &&
    calculationType !== '*' ||
    !firstInput ||
    !secondInput
  ) {
    return;
  }
  let mathOperator;
  if (calculationType === '+') {
    currentResult = firstInput + secondInput;
    mathOperator = '+';
    currentCalculations.currentResult = currentResult;
    console.log(currentCalculations);
  } else if (calculationType === '-') {
    currentResult = firstInput - secondInput;
    mathOperator = '-';
    currentCalculations.currentResult = currentResult;
    console.log(currentCalculations);
  } else if (calculationType === '/') {
    currentResult = firstInput / secondInput;
    mathOperator = '/';
    currentCalculations.currentResult = currentResult;
    console.log(currentCalculations);
  } else if (calculationType === '*') {
    currentResult = firstInput * secondInput;
    mathOperator = '*';
    currentCalculations.currentResult = currentResult;
    console.log(currentCalculations);
  }

  createAndWriteOutput(mathOperator, firstInput, secondInput);
  console.log(`${firstInput} ${mathOperator} ${secondInput} = ${currentResult}`);
}

addButton.addEventListener('click', add);
subtractButton.addEventListener('click', subtract);
divideButton.addEventListener('click', divide);
multiplyButton.addEventListener('click', multiply);
equalButton.addEventListener('click', calculateResult);

usrInput.addEventListener('click', clearInput);