"use strict";

// Unsplash API access key
const accessKey = "RZEIOVfPhS7vMLkFdd2TSKGFBS4o9_FmcV1Nje3FSjw";

// Selecting DOM elements
const formEl = document.querySelector("form"); // Form element
const searchInputEl = document.getElementById("search-img"); // Input field for image search
const searchResultsEl = document.querySelector(".search-results"); // Container to display image results
const showMoreEl = document.querySelector(".show-more"); // "Show more" button

// Variables to track user input and pagination
let inputData;
let page;

// Function to fetch and display images from Unsplash API
async function searchImages() {
  // Get user input value
  inputData = searchInputEl.value;

  // Build Unsplash API URL with query and page number
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`;

  // Fetch data from the API
  const response = await fetch(url);
  const data = await response.json();

  // Clear previous results if it's the first page
  if (page === 1) {
    searchResultsEl.innerHTML = "";
  }

  // Extract image results from the response
  const results = data.results;

  // Loop through each image result and display it
  results.map((result) => {
    // Create a container div for each image result
    const resultEl = document.createElement("div");
    resultEl.classList.add("search-result");

    // Create an img element and set its source and alt text
    const image = document.createElement("img");
    image.src = result.urls.small;
    image.alt = result.alt_description;

    // Create a link to the original image on Unsplash
    const imageLink = document.createElement("a");
    imageLink.href = result.links.html;
    imageLink.target = "_blank"; // Open link in new tab
    imageLink.textContent = result.alt_description;

    // Append image and link to the result container
    resultEl.appendChild(image);
    resultEl.appendChild(imageLink);

    // Append the result to the search results container
    searchResultsEl.appendChild(resultEl);
  });

  // Increment page number for next search
  page++;

  // Show "Show More" button if more than one page is available
  if (page > 1) {
    showMoreEl.style.display = "inline-block";
    showMoreEl.style.textAlign = "center";
  }
}

// Handle form submission (search button click)
formEl.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent page reload
  page = 1; // Reset to first page
  searchImages(); // Trigger image search
});

// Handle "Show More" button click
showMoreEl.addEventListener("click", searchImages);
