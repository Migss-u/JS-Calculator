const display = document.getElementById("display");

let firstNumber = "";
let secondNumber = "";
let operator = "";
let result = 0;

function buttonInput(value) {
  if (value == "+" || value == "-" || value == "*" || value == "/") {
    if (firstNumber == "") {
      return;
    }
    operator = value;
  }
  else {
    if (operator == "") {
      firstNumber += value;
    }
    else {
      secondNumber += value;
    }
  }

  display.value = firstNumber + operator + secondNumber;
}

function clearInput() {
  display.value = ""
  firstNumber = ""
  secondNumber = ""
  operator = ""
}

function calculate() {
  let a = Number(firstNumber);
  let b = Number(secondNumber);
  
  if (operator == "+") result = a + b;
  if (operator == "-") result = a - b; 
  if (operator == "*") result = a * b; 
  if (operator == "/") result = a / b; 

  display.value = result
}
