const display = document.getElementById("display");

//function to append numbers
function appendNumber(number) {
  display.value += number;
}

//function to append operator
function appendOperator(operator) {
  const lastChar = display.value.slice(-1);
  //prevent multiple operator at the end
  if (isNaN(lastChar) && operator !== ".") return;
  display.value += operator;
}

//function to clear entire display
function clearDisplay() {
  display.value = "";
}

//function to delete the last character
function deleteLast() {
  display.value = display.value.slice(0, -1);
}

//function to calculate the result
function calculate() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
}

//function to calculate squareRoot
function calculateSquareRoot() {
  if (display.value === "") return;
  const result = Math.sqrt(eval(display.value));
  display.value = result.toFixed(4);
}

//function to calculate square
function calculatePower() {
  if (display.value === "") return;
  const result = Math.pow(eval(display.value), 2);
  display.value = result.toFixed(4);
}
