"use strict";

// Get the input element where the result will be displayed
const inputEl = document.getElementById("result");

// Get all the button elements (numbers, operators, C, =)
const buttonsEl = document.querySelectorAll("button");

// Function to clear the input field
function clearResult() {
  inputEl.value = "";
}

// Function to evaluate the mathematical expression in the input field
function calculateResult() {
  inputEl.value = eval(inputEl.value); // ⚠️ Uses eval: make sure inputs are trusted!
}

// Function to append the clicked button's value to the input field
function appendValue(btnValue) {
  inputEl.value += btnValue;
}

// Add click event listeners to all buttons
for (let i = 0; i < buttonsEl.length; i++) {
  buttonsEl[i].addEventListener("click", () => {
    const btnValue = buttonsEl[i].textContent; // Get the text of the clicked button

    // Perform action based on button value
    if (btnValue === "C") {
      clearResult(); // Clear input if 'C' is clicked
    } else if (btnValue === "=") {
      calculateResult(); // Calculate result if '=' is clicked
    } else {
      appendValue(btnValue); // Append number/operator to input for other buttons
    }
  });
}
