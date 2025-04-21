const inputEl = document.querySelector(".input-weight");
const resultEl = document.querySelector(".pound");
const errorEl = document.querySelector(".error");

let errorTime;

function displayError() {
  errorEl.style.display = "block";
}

function hideError() {
  errorEl.style.display = "none";
}

function clearFields(seconds) {
  errorTime = setTimeout(() => {
    inputEl.value = "";
    resultEl.innerText = "";
    hideError();
  }, seconds);
}

function convertWeight() {
  const enteredWeight = inputEl.value;
  if (enteredWeight < 0 || isNaN(enteredWeight)) {
    resultEl.innerText = "";
    displayError();
    clearTimeout(errorTime);
    clearFields(3000);
    return;
  }

  const weightInPounds = enteredWeight * 2.20462;
  resultEl.innerText = weightInPounds.toFixed(2);
  hideError();
  clearTimeout(errorTime);
  clearFields(10000);
}

inputEl.addEventListener("input", convertWeight);
