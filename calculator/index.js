let num1 = 8
let num2 = 2
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2
let sum = document.getElementById("sum-el")

// create 4 functions: add(), subtract(), divide(), multiply()
// call the correct function when the user cicks on one of the buttons
// perform the given calculation using num1 and num2
// render the result of the calculation in the paragraph with id="sum-el"

function add() {
  const addResult = num1 + num2
  sum.textContent = "Sum: " + addResult
}

function subtract() {
  const subtractResult = num1 - num2
  sum.textContent = "Sum: " + subtractResult
}

function divide() {
  const divideResult = num1 / num2
  sum.textContent = "Sum: " + divideResult
}

function multiply() {
  const multiplyResult = num1 * num2
  sum.textContent = "Sum: " + multiplyResult
}
