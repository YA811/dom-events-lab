

/*-------------------------------- Constants --------------------------------*/
const buttons = document.querySelectorAll('.button');

const calculator = document.querySelector('#calculator');

const display = document.querySelector('.display');

/*----------------------------- Event Listeners -----------------------------*/
buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
      // This log is for testing purposes to verify we're getting the correct value

      // Future logic to capture the button's value would go here...
    });
  });

  calculator.addEventListener('click', (event) => {
    // This log is for testing purposes to verify we're getting the correct value
    // You have to click a button to see this log
  
    // Example
    if (event.target.classList.contains('number')) {
        const number = event.target.innerText;
        if (calculator.value === '0') {
          calculator.value = number;
        } else {
          calculator.value += number;
        }
appendToDisplay(number);
   
    }
  
    // Example
    if (event.target.innerText === '*') {
        appendToDisplay('*');
      }
       if (event.target.innerText === '+') {
        appendToDisplay('+');
      }
       if (event.target.innerText === '-') {
        appendToDisplay('-');
      }
       if (event.target.innerText === '/') {
        appendToDisplay('/');
      }
      if (event.target.innerText === '=') {
        const expression = display.innerText;
        const numbers = expression.match(/\d+/g);
        const operators = expression.match(/[\+\-*/]/g);

        let result = numbers[0];
        for (let i = 0; i < operators.length; i++) {
          const operator = operators[i];
          const nextNumber = numbers[i + 1];

          switch (operator) {
            case '+':
              result = add(result, nextNumber);
              break;
            case '-':
              result = subtract(result, nextNumber);
              break;
            case '*':
              result = multiply(result, nextNumber);
              break;
            case '/':
              result = divide(result, nextNumber);
              break;
          }
        }
        display.innerText = result;
        calculator.value = result;
      }
       if (event.target.innerText === 'C') {
        clearDisplay();
      }
  });
/*-------------------------------- Functions --------------------------------*/
function add(a, b){
    return parseFloat(a) + parseFloat(b);
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

function appendToDisplay(event){
  display.innerText += event;
}

function clearDisplay(){
display.innerText = '';
}