"use strict";

const countersEl = document.querySelectorAll(".counter");

countersEl.forEach((counterEl) => {
  counterEl.innerText = "0";
  incrementCounter(counterEl);
});

function incrementCounter(counterEl) {
  const dataCeil = +counterEl.getAttribute("data-ceil");
  const increment = dataCeil / 15;

  function updateCounter() {
    let currentNum = +counterEl.innerText;
    currentNum = Math.ceil(currentNum + increment);

    if (currentNum < dataCeil) {
      counterEl.innerText = currentNum;
      setTimeout(updateCounter, 50); // Using setTimeout for the delay
    } else {
      counterEl.innerText = dataCeil;
    }
  }

  updateCounter();
}
