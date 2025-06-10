// Event handler for digits/numbers
function digitBtnPressed(button) {
  // Store the current value
  // var currentValue = document.getElementById('inputBox').value;
  // document.getElementById("inputBox").value += button.textContent;
  const input = document.getElementById('inputBox');
  const currentValue = input.value;
  const newDigit = button.textContent;

  input.value = currentValue === '0' ? newDigit : currentValue + newDigit;
}
