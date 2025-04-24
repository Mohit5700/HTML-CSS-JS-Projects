"use strict";

const colorContainerEl = document.querySelector(".color-container");

for (let index = 0; index < 30; index++) {
  const colorEl = document.createElement("div");
  colorEl.classList.add("color");
  const newColor = randomColor();
  colorEl.innerText = newColor;
  colorEl.style.backgroundColor = newColor;
  colorContainerEl.appendChild(colorEl);
}

function randomColor() {
  const chars = "0123456789abcdef";
  const colorCodeLength = 6;
  let color = "";
  for (let index = 0; index < colorCodeLength; index++) {
    const randomNum = Math.floor(Math.random() * chars.length);
    color += chars[randomNum];
  }
  return "#" + color;
}
