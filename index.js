
// Event handler to display digits/numbers
function digitBtnPressed(button) {
  // Store the current value
  // var currentValue = document.getElementById('inputBox').value;
  // document.getElementById("inputBox").value += button.textContent;
  const input = document.getElementById('inputBox');
  const currentValue = input.value;
  const newDigit = button.textContent;

  input.value = currentValue === '0' ? newDigit : currentValue + newDigit;
}

// AC button event handler to remove the 0 on the screen
function btnAcPressed () {
  document.getElementById('inputBox').value = 0;
  newDigit = true;
}

// Event handlers for the operators (+, -, *, /)
function operatorBtnPressed(button) {
  const input = document.getElementById('inputBox');
  const currentValue = input.value;
  const operator = button.textContent;
  const lastChar = currentValue.slice(-1);

  // Prevent adding an operator right after another operator
  if (!["+", "-", "*", "/"].includes(lastChar)) {
    input.value += operator;
  }
}

// The equals (=) operator

