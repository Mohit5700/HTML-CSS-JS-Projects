"use strict";

const monthEl = document.querySelector(".month");
const dayEl = document.querySelector(".day");
const dateEl = document.querySelector(".date");
const yearEl = document.querySelector(".year");

const date = new Date();

monthEl.innerText = date.toLocaleString("en", {
  month: "long",
});

dayEl.innerText = date.toLocaleString("en", {
  weekday: "long",
});

dateEl.innerText = date.getDate();

yearEl.innerText = date.getFullYear();
