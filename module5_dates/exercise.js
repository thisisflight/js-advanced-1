"use strict";

// проверка даты на день рождения

function isBirthday(dateToCheck) {
  const convertedDateToCheck = new Date(dateToCheck),
    now = new Date();
  if (
    convertedDateToCheck.getDate() == now.getDate() &&
    convertedDateToCheck.getMonth() === now.getMonth()
  ) {
    return true;
  }
  return false;
}

const today = new Date().toString();
const tomorrow = "2024/01/01";
console.log(isBirthday(today));
console.log(isBirthday(tomorrow));
