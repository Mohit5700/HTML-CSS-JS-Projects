"use strict";

const btnEl = document.querySelector(".btn");
const animeContainerEl = document.querySelector(".anime-container");
const animeImageEl = document.querySelector(".anime-image");
const animeNameEl = document.querySelector(".anime-name");

async function generateImage() {
  try {
    const id = Math.floor(Math.random() * 40 + 1);
    btnEl.disabled = true;
    btnEl.innerText = "Loading...";
    animeImageEl.src = "spinner.svg";
    animeNameEl.innerText = "Updating...";
    const respone = await fetch(
      `https://dragonball-api.com/api/characters/${id}`
    );
    const data = await respone.json();
    btnEl.disabled = false;
    btnEl.innerText = "Get Anime";
    animeContainerEl.style.display = "block";
    animeImageEl.src = data.image;
    animeNameEl.innerText = data.name;
  } catch (err) {
    btnEl.disabled = false;
    btnEl.innerText = "Get Anime";
    animeNameEl.innerText = "An error occurred. Please try again!";
  }
}

btnEl.addEventListener("click", generateImage);
