"use strict";

const btnEl = document.querySelector(".btn");
const birthdayEl = document.getElementById("birthday");
const resultEl = document.querySelector(".result");

function getAge(dateOfBirth) {
  const birthDate = new Date(dateOfBirth);
  const today = new Date();

  let age = today.getFullYear() - birthDate.getFullYear();

  const isBirthDayPassed =
    today.getMonth() > birthDate.getMonth() ||
    (today.getMonth() === birthDate.getMonth() &&
      today.getDate() >= birthDate.getDate());

  if (!isBirthDayPassed) age--;

  return age;
}

function calculateAge() {
  const dateOfBirth = birthdayEl.value;
  if (!dateOfBirth) {
    alert("Please enter some value");
    return;
  }
  const age = getAge(dateOfBirth);
  resultEl.innerText = `Your age is ${age} ${age > 1 ? "years" : "year"} old`;
}

btnEl.addEventListener("click", calculateAge);
