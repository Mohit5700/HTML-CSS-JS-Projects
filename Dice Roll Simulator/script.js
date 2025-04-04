"use strict";

// Get references to DOM elements
const diceEl = document.querySelector(".dice"); // Dice display element
const rollEl = document.querySelector(".roll-btn"); // Roll button element
const rollHistoryEl = document.querySelector(".roll-history"); // List to show roll history

let rollCount = 1; // Counter to track how many times the dice has been rolled

// Function to return corresponding dice face HTML entity based on number
function getDiceFace(diceNumber) {
  switch (diceNumber) {
    case 1:
      return "&#9856;"; // ⚀
    case 2:
      return "&#9857;"; // ⚁
    case 3:
      return "&#9858;"; // ⚂
    case 4:
      return "&#9859;"; // ⚃
    case 5:
      return "&#9860;"; // ⚄
    case 6:
      return "&#9861;"; // ⚅
  }
}

// Function to simulate a dice roll
function rollDice() {
  const diceNumber = Math.floor(Math.random() * 6 + 1); // Generate random number between 1 and 6
  const diceFace = getDiceFace(diceNumber); // Get the Unicode face for the number

  // Display the result on the main dice element
  diceEl.innerHTML = diceFace;

  // Create and display a new list item in the roll history
  const listItem = document.createElement("li");
  listItem.innerHTML = `Roll ${rollCount++}: <span>${diceFace}</span>`; // Add current roll count and face
  rollHistoryEl.appendChild(listItem);
}

// Add animation and trigger dice roll when button is clicked
rollEl.addEventListener("click", () => {
  diceEl.classList.add("roll-animation"); // Add roll animation class
  setTimeout(() => diceEl.classList.remove("roll-animation"), 1000); // Remove animation after 1 sec
  rollDice(); // Perform the dice roll
});
