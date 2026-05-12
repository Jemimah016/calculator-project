const display = document.getElementById("display");

const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");

const equalsButton = document.querySelector(".equals");
const clearButton = document.querySelector(".clear");

let firstNumber = "";
let operator = "";
let secondNumber = "";

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
  if (b === 0) {
    return "Error";
  }

  return a / b;
}

// Operate
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

// Number buttons
numberButtons.forEach((button) => {

  button.addEventListener("click", () => {

    if (display.textContent === "0") {
      display.textContent = "";
    }

    display.textContent += button.textContent;
  });

});

// Operator buttons
operatorButtons.forEach((button) => {

  button.addEventListener("click", () => {

    firstNumber = display.textContent;

    operator = button.textContent;

    display.textContent = "";
  });

});

// Equals button
equalsButton.addEventListener("click", () => {

  secondNumber = display.textContent;

  const result = operate(operator, firstNumber, secondNumber);

  display.textContent = result;
});

// Clear button
clearButton.addEventListener("click", () => {

  firstNumber = "";
  secondNumber = "";
  operator = "";

  display.textContent = "0";
});