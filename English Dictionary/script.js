"use strict";

// Get references to DOM elements
const inputEl = document.querySelector(".input");
const infoTextEl = document.querySelector(".info-text");
const wordDetailsEl = document.querySelector(".word-details");
const titleEl = document.querySelector(".title");
const meaningEl = document.querySelector(".meaning");
const audioEl = document.querySelector(".audio");

// Utility functions to show/hide elements
function showInfoText() {
  infoTextEl.style.display = "block";
}

function hideInfoText() {
  infoTextEl.style.display = "none";
}

function showWordDetails() {
  wordDetailsEl.style.display = "block";
}

function showAudio() {
  audioEl.style.display = "inline-block";
}

function hideAudio() {
  audioEl.style.display = "none";
}

// Fetch word details from dictionary API
async function fetchDetails(word) {
  if (word.trim() === "") return; // Ignore empty input

  // Show loading message
  infoTextEl.innerText = `Searching the meaning of ${word}`;
  showInfoText();

  try {
    // Fetch data from API
    const response = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    );
    const data = await response.json();

    // Extract definition and audio URL
    const meaning = data[0].meanings[0].definitions[0].definition;
    const audioUrl = data[0].phonetics[0].audio;

    // Update UI with word info
    titleEl.innerText = word;
    meaningEl.innerText = meaning;
    audioEl.src = audioUrl;
    showAudio();
    showWordDetails();
    hideInfoText(); // Hide loading message
  } catch (err) {
    // Show fallback info if word not found or API fails
    titleEl.innerText = word;
    meaningEl.innerText = "N/A";
    hideAudio();
    showWordDetails();
    hideInfoText();
  }
}

// Trigger search on "Enter" key press
inputEl.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    const word = inputEl.value;
    fetchDetails(word);
  }
});
