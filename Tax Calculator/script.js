"use strict";

const btnEl = document.querySelector(".btn");
const billEl = document.getElementById("bill");
const taxEl = document.getElementById("tax");
const totalEl = document.querySelector(".total-amt");

function calculateTotal() {
  const bill = Number(billEl.value.trim());
  const tax = Number(taxEl.value.trim());

  if (!bill) return alert("Bill Amount can't be empty or zero!");
  if (!tax && tax !== 0) return alert("Tax Percentage can't be empty!");
  if (bill <= 0)
    return alert("Bill Amount is invalid. Please enter a valid value.");
  if (tax < 0)
    return alert("Tax Percentage is invalid. Please enter a valid value.");

  const total = bill + bill * (tax / 100);
  totalEl.innerText = total.toFixed(2);
}
btnEl.addEventListener("click", calculateTotal);
