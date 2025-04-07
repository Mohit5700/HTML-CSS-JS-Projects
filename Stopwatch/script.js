"use strict";

// Selecting DOM elements
const timerEl = document.querySelector(".timer");
const startEl = document.querySelector(".btn--start");
const pauseEl = document.querySelector(".btn--pause");
const resetEl = document.querySelector(".btn--reset");

// Variables to track timing
let startTime = 0; // Time when stopwatch started (adjusted for pauses)
let elapsedTime = 0; // Time already counted before pause (in ms)
let timerInterval; // Reference to the setInterval for updating the timer

// Function to format time from milliseconds to hh:mm:ss:ms
function formatTime(elapsedTime) {
  let milliseconds = Math.floor((elapsedTime % 1000) / 10);
  let seconds = Math.floor((elapsedTime / 1000) % 60);
  let minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
  let hours = Math.floor((elapsedTime / (1000 * 60 * 60)) % 24);

  // Ensure all values are 2-digit formatted
  milliseconds = milliseconds < 10 ? "0" + milliseconds : milliseconds;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  hours = hours < 10 ? "0" + hours : hours;

  return `${hours}:${minutes}:${seconds}:${milliseconds}`;
}

// Starts the stopwatch
function startTimer() {
  // Adjust start time to continue from where it left off (in case of resume after pause)
  startTime = Date.now() - elapsedTime;

  // Update timer display every 10ms
  timerInterval = setInterval(() => {
    elapsedTime = Date.now() - startTime; // Calculate current elapsed time
    timerEl.textContent = formatTime(elapsedTime); // Update display
  }, 10);

  // Disable start, enable pause button
  startEl.disabled = true;
  pauseEl.disabled = false;
}

// Pauses the stopwatch
function pauseTimer() {
  clearInterval(timerInterval); // Stop the interval
  startEl.disabled = false; // Allow resuming
  pauseEl.disabled = true; // Disable pause (already paused)
}

// Resets the stopwatch
function resetTimer() {
  clearInterval(timerInterval); // Stop timer
  elapsedTime = 0; // Reset time
  timerEl.textContent = "00:00:00"; // Reset display
  startEl.disabled = false; // Enable start
  pauseEl.disabled = true; // Disable pause
}

// Event listeners for the buttons
startEl.addEventListener("click", startTimer);
pauseEl.addEventListener("click", pauseTimer);
resetEl.addEventListener("click", resetTimer);
