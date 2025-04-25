"use strict";

const inputEl = document.querySelector(".textarea");
const totalEl = document.querySelector(".total");
const remainingEl = document.querySelector(".remaining");

let currentCount = 0;
let remainingCount = 50;

inputEl.addEventListener("input", () => {
  let count = inputEl.value.length;
  totalEl.innerText = count + currentCount;
  remainingEl.innerText = remainingCount - count;
});
