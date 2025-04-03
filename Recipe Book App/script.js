"use strict";

const API_KEY = "67f275e9d54b426996a0acc72d3903fc"; // API key for Spoonacular API
const recipeListEl = document.querySelector(".recipe-list"); // Selecting the HTML element where recipes will be displayed

/**
 * Fetches random recipes from Spoonacular API
 * @returns {Promise<Array>} A promise that resolves to an array of recipe objects
 */
async function getRecipes() {
  // Fetch data from the API
  const response = await fetch(
    `https://api.spoonacular.com/recipes/random?number=10&apiKey=${API_KEY}`
  );

  // Convert the response to JSON format
  const data = await response.json();

  // Return the array of recipes
  return data.recipes;
}

/**
 * Displays the fetched recipes on the webpage
 * @param {Array} recipes - List of recipe objects to be displayed
 */
function displayRecipes(recipes) {
  // Clear any existing recipe list before adding new items
  recipeListEl.innerHTML = "";

  // Loop through each recipe and create its HTML representation
  recipes.forEach((recipe) => {
    // Create a list item for each recipe
    const recipeItemEl = document.createElement("li");
    recipeItemEl.classList.add("recipe-item");

    // Create an image element for the recipe
    const recipeImgEl = document.createElement("img");
    recipeImgEl.src = recipe.image;
    recipeImgEl.alt = "recipe image";

    // Create an element for the recipe title
    const recipeNameEl = document.createElement("h2");
    recipeNameEl.innerText = recipe.title;

    // Create a paragraph element to display the list of ingredients
    const recipeIngredientsEl = document.createElement("p");
    recipeIngredientsEl.innerHTML = `
        <strong>Ingredients: </strong>
        ${recipe.extendedIngredients
          .map((ingredient) => ingredient.original) // Extract ingredient names
          .join(", ")} 
    `;

    // Create a link element for the full recipe
    const recipeLinkEl = document.createElement("a");
    recipeLinkEl.href = recipe.sourceUrl; // Set URL to the full recipe
    recipeLinkEl.innerText = "View Recipe"; // Set link text
    recipeLinkEl.target = "_blank"; // Open link in a new tab

    // Append all created elements to the list item
    recipeItemEl.appendChild(recipeImgEl);
    recipeItemEl.appendChild(recipeNameEl);
    recipeItemEl.appendChild(recipeIngredientsEl);
    recipeItemEl.appendChild(recipeLinkEl);

    // Append the list item to the main recipe list container
    recipeListEl.appendChild(recipeItemEl);
  });
}

/**
 * Initializes the application by fetching and displaying recipes
 */
async function init() {
  const recipes = await getRecipes(); // Fetch recipes from the API
  displayRecipes(recipes); // Display the fetched recipes
}

init(); // Call the init function to start the application
