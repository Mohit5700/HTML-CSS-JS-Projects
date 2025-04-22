"use strict";

// Selects the container element where the feedback will be displayed
const containerEl = document.querySelector(".container");
// Selects all rating elements
const ratingEls = document.querySelectorAll(".rating");
// Selects the button element
const btnEl = document.querySelector(".btn");

// Initializes the rating variable
let rating = "";

// Adds 'active' class to the clicked rating element and its parent
function addActive(event) {
  event.target.classList.add("active");
  event.target.parentNode.classList.add("active");
}

// Removes 'active' class from all rating elements
function removeActive() {
  ratingEls.forEach((ratingEl) => {
    ratingEl.classList.remove("active");
  });
}

// Retrieves the rating text from the clicked element or its parent
function getRating(event) {
  return event.target.innerText || event.target.parentNode.innerText;
}

// Displays the feedback message based on the selected rating
function showRatingText() {
  if (rating === "") return; // If no rating is selected, do nothing
  containerEl.innerHTML = `
        <strong>Thank you!</strong>
        <strong>Feedback: ${rating}</strong>
        <p>We'll use your feedback to improve our customer support.</p>    
    `;
}

// Adds event listeners to rating elements to handle clicks
ratingEls.forEach((ratingEl) => {
  ratingEl.addEventListener("click", (event) => {
    removeActive(); // Remove 'active' class from all rating elements
    addActive(event); // Add 'active' class to the clicked rating element
    rating = getRating(event); // Get the rating text from the clicked element
  });
});

// Adds event listener to the button to show the feedback message
btnEl.addEventListener("click", showRatingText);
