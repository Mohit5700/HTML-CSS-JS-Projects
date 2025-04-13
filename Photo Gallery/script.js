"use strict";

// Get DOM elements for input, error message, button, and gallery container
const inputEl = document.getElementById("number");
const errorMessageEl = document.querySelector(".error-msg");
const btnEl = document.querySelector(".btn");
const galleryEl = document.querySelector(".gallery");

// Helper function to show an element
function show(el) {
  el.style.display = "block";
}

// Helper function to hide an element
function hide(el) {
  el.style.display = "none";
}

// Main function to generate images from Unsplash API
async function generateImages() {
  // Clear the gallery content before new results
  galleryEl.innerHTML = "";

  const inputVal = inputEl.value;

  // Validate input: must be a number between 1 and 10
  if (inputVal < 1 || inputVal > 10) {
    errorMessageEl.innerText = "Number should be from 1 to 10";
    show(errorMessageEl); // Show validation error
    return;
  }

  try {
    // Hide error message and button while loading
    hide(errorMessageEl);
    hide(btnEl);

    // Show loading spinner
    const loader = document.createElement("img");
    loader.src = "spinner.svg";
    galleryEl.appendChild(loader);

    // Make API request to Unsplash for random images
    const response = await fetch(
      `https://api.unsplash.com/photos?per_page=${inputVal}&page=${Math.round(
        Math.random() * 1000 // Get a random page number to mix up results
      )}&client_id=B8S3zB8gCPVCvzpAhCRdfXg_aki8PZM_q5pAyzDUvlc` // Access key
    );

    // Parse JSON response
    const imageData = await response.json();

    // Clear loader
    galleryEl.innerHTML = "";

    // Handle case where no images are returned
    if (imageData.length === 0) {
      errorMessageEl.innerText = "No images found. Try again!";
      show(errorMessageEl);
      return;
    }

    // Loop through the returned image data and display images in the gallery
    imageData.forEach((img) => {
      const imageEl = document.createElement("img");
      imageEl.src = img.urls.small; // Use small size for thumbnails
      imageEl.alt = img.alt_description || "Unsplash image"; // Fallback alt text
      galleryEl.appendChild(imageEl);
    });

    // Show gallery once images are loaded
    show(galleryEl);
  } catch (err) {
    // Display error message if API fails or another error occurs
    errorMessageEl.innerText = "An error happened! Please try again later.";
    show(errorMessageEl);
  } finally {
    // Re-enable button whether or not the API call was successful
    show(btnEl);
  }
}

// Attach click event to button to trigger image generation
btnEl.addEventListener("click", generateImages);
