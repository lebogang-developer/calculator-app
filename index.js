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
function btnAcPressed() {
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
  if (!['+', '-', '*', '/'].includes(lastChar)) {
    input.value += operator;
  }
}

// The equals (=) operator. This function uses JavaScript’s built-in eval() to calculate the result of the expression

function btnEqualsPressed() {
  const input = document.getElementById('inputBox');
  const expression = input.value;

  try {
    // Evaluate the mathematical express
    const result = eval(expression);

    // Display the result, or 0 if result is undefined/null
    input.value = result ?? '0';
  } catch (error) {
    // Show an error message if the evaluation fails
    input.value = Error;
  }
}

// Backspace operation
function btnBackspacePressed() {
  const input = document.getElementById('inputBox');
  const currentValue = input.value;

  // Reset to "0" if only one character left
  if (
    currentValue.length === 1 ||
    (currentValue.length === 2 && currentValue.startsWith('-'))
  ) {
    input.value = '0';
  } else {
    // Remove the last character
    input.value = currentValue.slice(0, -1);
  }
}

// The decimal function
function btnDecimalPressed() {
  const input = document.getElementById('inputBox');
  const currentValue = input.value;

  // Split by operators to get the current number being typed
  const lastNumber = currentValue.split(/[\+\-\*\/]/).pop();

  // Add decimal only if current number doesn’t already have one
  if (!lastNumber.includes('.')) {
    input.value += '.';
  }
}
