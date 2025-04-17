"use strict";

const quoteEl = document.querySelector(".quote-text");
const authorEl = document.querySelector(".author");
const btnEl = document.querySelector(".btn");

const apiUrl = "https://api.api-ninjas.com/v1/quotes";
const apiKey = "F5M2ZVow7eAvTQSHenrZAg==wzky3OjBsH1IjrRU";

async function generateQuote() {
  quoteEl.innerText = "Loading...";
  authorEl.innerText = "Loading...";
  btnEl.disabled = true;
  btnEl.innerText = "Generating...";
  try {
    const response = await fetch(apiUrl, {
      headers: {
        "X-Api-Key": apiKey,
      },
    });

    const data = await response.json();
    quoteEl.innerText = data[0].quote;
    authorEl.innerText = `~ ${data[0].author}`;
  } catch (err) {
    quoteEl.innerText = "An error occurred. Please try again later!";
    authorEl.innerText = "An error happened";
    console.log(err);
  } finally {
    btnEl.disabled = false;
    btnEl.innerText = "Get a Quote";
  }
}

btnEl.addEventListener("click", generateQuote);

generateQuote();
