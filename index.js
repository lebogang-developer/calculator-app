

// Event handler for digits/numbers
function digitBtnPressed(button) {
  // Store the current value
//   var currentValue = document.getElementById('inputBox').value;
  document.getElementById('inputBox').value += button.textContent;
}
