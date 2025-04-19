"use strict";

const celsiusEl = document.querySelector(".input-celsius");
const fahrenheitEl = document.querySelector(".input-fahrenheit");
const kelvinEl = document.querySelector(".input-kelvin");

function convertToFahrenheit(celsius) {
  return (9 / 5) * celsius + 32;
}

function convertToCelsius(fahrenheit) {
  return (fahrenheit - 32) * (5 / 9);
}

function convertToKelvin(celsius) {
  return celsius + 273.15;
}

function computeTemp(event) {
  const enteredUnit = event.target.name;
  const enteredValue = parseFloat(event.target.value);

  switch (enteredUnit) {
    case "celsius":
      const tempInFahrenheit = convertToFahrenheit(enteredValue);
      fahrenheitEl.value = tempInFahrenheit.toFixed(2);
      const tempInKelvin = convertToKelvin(enteredValue);
      kelvinEl.value = tempInKelvin.toFixed(2);
      break;
    case "fahrenheit":
      const tempInCelsius = convertToCelsius(enteredValue);
      celsiusEl.value = tempInCelsius.toFixed(2);
      kelvinEl.value = convertToKelvin(tempInCelsius).toFixed(2);
      break;
    case "kelvin":
      const tempInCelsiusFromKelvin = enteredValue - 273.15;
      celsiusEl.value = tempInCelsiusFromKelvin.toFixed(2);
      fahrenheitEl.value = convertToFahrenheit(tempInCelsiusFromKelvin).toFixed(
        2
      );
      break;
  }
}
