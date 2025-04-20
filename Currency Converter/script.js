"use strict";
const firstCurrencyEl = document.querySelector(".currency--first");
const secondCurrencyEl = document.querySelector(".currency--second");
const firstCurrencyValueEl = document.querySelector(".value--first");
const secondCurrencyValueEl = document.querySelector(".value--second");
const resultEl = document.querySelector(".result");

const apiUrl = "https://v6.exchangerate-api.com/v6/ff63ea15b4182ed8d94f5425";

async function convertCurrency() {
  try {
    const baseCurrency = firstCurrencyEl.value;
    const targetCurrency = secondCurrencyEl.value;
    const amount = firstCurrencyValueEl.value;

    const response = await fetch(
      `${apiUrl}/pair/${baseCurrency}/${targetCurrency}/${amount}`
    );
    const data = await response.json();

    const convertedAmount = data.conversion_result.toFixed(2);

    secondCurrencyValueEl.value = convertedAmount;

    resultEl.innerText = `${amount} ${baseCurrency} = ${convertedAmount} ${targetCurrency}`;
  } catch (err) {
    console.log(err);
  }
}

firstCurrencyEl.addEventListener("change", convertCurrency);
secondCurrencyEl.addEventListener("change", convertCurrency);
firstCurrencyValueEl.addEventListener("input", convertCurrency);

convertCurrency();
