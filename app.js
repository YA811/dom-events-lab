

/*-------------------------------- Constants --------------------------------*/
const buttons = document.querySelectorAll('.button');

const calculator = document.querySelector('#calculator');

const display = document.querySelector('.display');

/*----------------------------- Event Listeners -----------------------------*/
buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
      // This log is for testing purposes to verify we're getting the correct value
      appendToDisplay(event.target.innerText);
      // Future logic to capture the button's value would go here...
    });
  });

  calculator.addEventListener('click', (event) => {
    // This log is for testing purposes to verify we're getting the correct value
    // You have to click a button to see this log
  appendToDisplay(event.target.innerText);
    // Example
    if (event.target.classList.contains('number')) {
        const number = event.target.innerText;
        if (calculator.value === '0') {
          calculator.value = number;
        } else {
          calculator.value += number;
        }
    }
  
    // Example
    if (event.target.innerText === '*') {
        const a = parseFloat(calculator.value);
        const b = parseFloat(calculator.value);
        calculator.value = multiply(a, b);
      }
       if (event.target.innerText === '+') {
        const a = parseFloat(calculator.value);
        const b = parseFloat(calculator.value);
        calculator.value = add(a, b);
      }
       if (event.target.innerText === '-') {
        const a = parseFloat(calculator.value);
        const b = parseFloat(calculator.value);
        calculator.value = subtract(a, b);
      }
       if (event.target.innerText === '/') {
        const a = parseFloat(calculator.value);
        const b = parseFloat(calculator.value);
        calculator.value = divide(a, b);
      }
       if (event.target.innerText === 'C') {
        calculator.value = '0';
      }
  });
/*-------------------------------- Functions --------------------------------*/
function add(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    if(b === 0){
        return 'Error: Division by zero';
    }
    return a / b;
}

function appendToDisplay(){
display.value += calculator.value;
}

function clearDisplay(){
display.value = '';
}