"use strict";

// Selecting DOM elements
const formEl = document.querySelector("form"); // The form element where the user submits the city
const cityInputEl = document.querySelector("#city"); // Input field where user enters the city name
const weatherDataEl = document.querySelector(".weather-data"); // Container to display weather info

// Your API key for OpenWeatherMap API
const API_KEY = "7d1f83bd48e251fb797bf97695be694e";

// Function to fetch and display weather data for the given city
async function getWeatherData(city) {
  try {
    // Fetching data from the OpenWeatherMap API
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );

    // If response is not successful (e.g. wrong city), throw an error
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    // Convert response to JSON
    const data = await response.json();

    // Extracting required data
    const temperature = Math.round(data.main.temp); // Current temperature
    const description = data.weather[0].description; // Weather condition text (e.g. clear sky)
    const icon = data.weather[0].icon; // Icon ID for weather condition

    // Create an array of additional weather details
    const details = [
      `Feels like: ${Math.round(data.main.feels_like)}`, // Feels like temperature
      `Humidity: ${data.main.humidity}%`, // Humidity percentage
      `Wind speed: ${data.wind.speed} m/s`, // Wind speed in meters per second
    ];

    // Update DOM with the weather icon
    weatherDataEl.querySelector(".icon").innerHTML = `
        <img src="http://openweathermap.org/img/wn/${icon}.png" 
        alt="Weather Icon"/>
    `;

    // Update DOM with temperature, description, and details
    weatherDataEl.querySelector(
      ".temperature"
    ).textContent = `${temperature}°C`;
    weatherDataEl.querySelector(".description").textContent = description;
    weatherDataEl.querySelector(".details").innerHTML = details
      .map((detail) => `<div>${detail}</div>`) // Convert details into HTML divs
      .join(""); // Join them as one string
  } catch (err) {
    // If any error occurs (e.g. city not found), clear UI and show error message
    weatherDataEl.querySelector(".icon").innerHTML = "";
    weatherDataEl.querySelector(".temperature").textContent = "";
    weatherDataEl.querySelector(".description").textContent =
      "Please enter a correct city name!";
    weatherDataEl.querySelector(".details").innerHTML = "";
  }
}

// Event listener to handle form submission
formEl.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent page reload
  const city = cityInputEl.value; // Get the value entered by the user
  getWeatherData(city); // Fetch and display weather for the entered city
  cityInputEl.value = ""; // Clear the input field
});
