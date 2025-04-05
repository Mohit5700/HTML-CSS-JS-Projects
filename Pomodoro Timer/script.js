"use strict";

// Get references to DOM elements
const timerEl = document.querySelector(".timer");
const startEl = document.querySelector(".btn-start");
const pauseEl = document.querySelector(".btn-pause");
const resetEl = document.querySelector(".btn-reset");

// Initial timer value set to 25 minutes (1500 seconds)
let timeLeft = 1500;

// Store the interval ID for clearing later
let interval = null;

// Track whether the timer is currently running
let isRunning = false;

/**
 * Updates the timer display on the page.
 * Converts timeLeft into mm:ss format and updates the HTML.
 */
function updateTimer() {
  let minutes = Math.floor(timeLeft / 60);
  let seconds = timeLeft % 60;

  // Format minutes and seconds as two-digit strings
  const formattedTime = `${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}`;

  timerEl.innerHTML = formattedTime;
}

/**
 * Starts the countdown timer.
 * Prevents multiple intervals from running using isRunning flag.
 */
function startTimer() {
  if (isRunning) return; // Prevent multiple intervals

  isRunning = true;

  interval = setInterval(() => {
    if (timeLeft > 0) {
      timeLeft--;
    } else {
      // When timer reaches 0, stop the interval, show alert, and reset
      clearInterval(interval);
      isRunning = false;
      alert("Time's up!!");
      resetTimer();
      return;
    }

    // Update the timer display every second
    updateTimer();
  }, 1000);
}

/**
 * Pauses the timer without resetting the time.
 */
function pauseTimer() {
  clearInterval(interval);
  isRunning = false;
}

/**
 * Resets the timer back to 25 minutes and stops it.
 */
function resetTimer() {
  clearInterval(interval);
  isRunning = false;
  timeLeft = 1500; // Reset to 25 minutes
  updateTimer();
}

// Event listeners for button clicks
startEl.addEventListener("click", startTimer);
pauseEl.addEventListener("click", pauseTimer);
resetEl.addEventListener("click", resetTimer);
