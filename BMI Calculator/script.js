"use strict";

const heightEl = document.querySelector(".input-height");
const weightEl = document.querySelector(".input-weight");
const computeEl = document.querySelector(".compute");
const resultEl = document.querySelector(".bmi-result");
const weightConditionEl = document.querySelector(".weight-condition");

function getCategory(bmi) {
  if (bmi < 18.5) return "Underweight";
  if (bmi >= 18.5 && bmi <= 24.9) return "Normal Weight";
  if (bmi >= 25 && bmi <= 29.9) return "Overweight";
  if (bmi > 30) return "Obesity";
}

function calculateBMI() {
  const height = heightEl.value;
  const weight = weightEl.value;

  if (!height || !weight) {
    alert("Please enter both height and weight");
    return;
  }

  if (height <= 0) {
    alert("Please enter a valid height");
    return;
  }

  if (weight <= 0) {
    alert("Please enter a valid weight");
    return;
  }
  const heightInMetre = height / 100;
  const bmi = (weight / heightInMetre ** 2).toFixed(2);
  resultEl.value = bmi;

  const category = getCategory(bmi);
  weightConditionEl.innerText = category;
}
computeEl.addEventListener("click", calculateBMI);
