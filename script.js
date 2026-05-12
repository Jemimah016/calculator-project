const display = document.getElementById("display");

const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");

const equalsButton = document.querySelector(".equals");
const clearButton = document.querySelector(".clear");

let firstNumber = "";
let secondNumber = "";
let operator = "";
let isSecondNumber = false;

// Math functions
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) return "Error";
  return a / b;
}

// Operate function
function operate(operator, a, b) {
  a = Number(a);
  b = Number(b);

  switch (operator) {
    case "+":
      return add(a, b);

    case "-":
      return subtract(a, b);

    case "*":
      return multiply(a, b);

    case "/":
      return divide(a, b);
  }
}

// NUMBER BUTTONS
numberButtons.forEach((button) => {

  button.addEventListener("click", () => {

    if (!isSecondNumber) {

      firstNumber += button.textContent;

      display.textContent = firstNumber;

    } else {

      secondNumber += button.textContent;

      display.textContent =
        firstNumber + " " + operator + " " + secondNumber;
    }

  });

});

// OPERATOR BUTTONS
operatorButtons.forEach((button) => {

  button.addEventListener("click", () => {

    if (firstNumber === "") return;

    operator = button.textContent;

    isSecondNumber = true;

    display.textContent =
      firstNumber + " " + operator;

  });

});

// EQUALS BUTTON
equalsButton.addEventListener("click", () => {

  if (
    firstNumber === "" ||
    secondNumber === "" ||
    operator === ""
  ) {
    return;
  }

  let result = operate(operator, firstNumber, secondNumber);

  result = Math.round(result * 1000) / 1000;

  display.textContent = result;

  firstNumber = result.toString();
  secondNumber = "";
  operator = "";
  isSecondNumber = false;

});

// CLEAR BUTTON
clearButton.addEventListener("click", () => {

  firstNumber = "";
  secondNumber = "";
  operator = "";
  isSecondNumber = false;

  display.textContent = "0";

});