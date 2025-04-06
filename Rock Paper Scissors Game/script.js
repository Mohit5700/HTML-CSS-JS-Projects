"use strict";

// Get all button elements (rock, paper, scissors)
const buttons = document.querySelectorAll("button");

// Get elements for displaying result and scores
const resultEl = document.querySelector(".result");
const userScoreEl = document.querySelector(".score-us");
const computerScoreEl = document.querySelector(".score-comp");

// Initialize scores
let userScore = 0;
let computerScore = 0;

// Add click event listeners to each button
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    // Get user's choice from the clicked button's class name
    const userChoice = button.className;

    // Generate computer's choice randomly
    const computerChoice = computerPlay();

    // Determine the winner
    const winner = findWinner(userChoice, computerChoice);

    // Display result message
    resultEl.textContent = winner;
  });
});

/**
 * Generates a random choice for the computer: rock, paper, or scissors
 */
function computerPlay() {
  const choices = ["rock", "paper", "scissors"];
  const computerChoice = Math.floor(Math.random() * choices.length);
  return choices[computerChoice];
}

/**
 * Determines the winner based on user and computer choices
 * Updates the scores accordingly and returns a message
 */
function findWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return "It's a tie!";
  }

  // User wins conditions
  if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    userScore++; // Increment user score
    userScoreEl.textContent = userScore; // Update user score display
    return `You win! ${userChoice.toUpperCase()} beats ${computerChoice.toUpperCase()}`;
  }

  // Otherwise, computer wins
  computerScore++; // Increment computer score
  computerScoreEl.textContent = computerScore; // Update computer score display
  return `You lose! ${computerChoice.toUpperCase()} beats ${userChoice.toUpperCase()}`;
}
