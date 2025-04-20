"use strict";

const loanAmonuntEl = document.querySelector(".input-loan");
const interestRateEl = document.querySelector(".input-interest");
const yearsEl = document.querySelector(".input-years");
const emiAmountEl = document.querySelector(".emi-amt");

function calculateEMI() {
  const amount = loanAmonuntEl.value;
  const rate = interestRateEl.value;
  const years = yearsEl.value;
  const months = years * 12;
  const interest = (amount * (rate * 0.01)) / months;
  const total = Math.round(amount / months + interest);
  emiAmountEl.innerText = `₹${total}`;
}

loanAmonuntEl.addEventListener("change", calculateEMI);
interestRateEl.addEventListener("change", calculateEMI);
yearsEl.addEventListener("change", calculateEMI);
