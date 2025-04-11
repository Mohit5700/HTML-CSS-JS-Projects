"use strict";

// Get references to button and joke display elements from the DOM
const btnEl = document.querySelector(".btn");
const jokeEl = document.querySelector(".joke");

// API details
const API_KEY = "4kqGcJx8uDXo3XIskcbzokAz7rN8nWJs3PL9Mcll";
const API_URL = "https://api.api-ninjas.com/v1/dadjokes";

// Configuration for the API request
const options = {
  method: "GET",
  headers: {
    "X-Api-Key": API_KEY, // API key required for authorization
  },
};

// Function to fetch and display a new joke
async function generateJoke() {
  // Show loading state in the UI
  jokeEl.innerText = "Updating...";
  btnEl.disabled = true;
  btnEl.innerText = "Loading...";

  try {
    // Fetch a joke from the API
    const response = await fetch(API_URL, options);
    const data = await response.json(); // Parse the JSON response

    const joke = data[0].joke; // Extract the joke text from the first result
    jokeEl.innerText = joke; // Display the joke on the page
  } catch (err) {
    // If there's an error, show a fallback message
    jokeEl.innerText = "An error happened, try again later!";
  } finally {
    // Re-enable the button and restore its original text
    btnEl.innerText = "Tell me a joke";
    btnEl.disabled = false;
  }
}

// Attach the joke generator to the button click event
btnEl.addEventListener("click", generateJoke);
