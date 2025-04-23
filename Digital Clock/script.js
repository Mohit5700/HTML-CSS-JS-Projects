"use strict";

const hoursEl = document.querySelector(".hours");
const minutesEl = document.querySelector(".minutes");
const secondsEl = document.querySelector(".seconds");
const ampmEl = document.querySelector(".am-pm");

function updateClock() {
  const now = Date.now();
  let h = new Date().getHours();
  const m = new Date().getMinutes();
  const s = new Date().getSeconds();
  let ampm = "AM";

  if (h > 12) {
    h -= 12;
    ampm = "PM";
  }

  hoursEl.innerText = h < 10 ? "0" + h : h;
  minutesEl.innerText = m < 10 ? "0" + m : m;
  secondsEl.innerText = s < 10 ? "0" + s : s;
  ampmEl.innerText = ampm;
}

setInterval(updateClock, 1000);
updateClock();
