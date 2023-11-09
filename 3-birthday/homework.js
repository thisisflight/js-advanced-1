"use strict";

function isDateAtLeast14YearsOld(dateStr) {
  // проверить является ли переданная дата датой 14-летней давности
  // получим дату из строки, выведем параметры и пересоберем дату с учетом проверки
  const dateToCheck = new Date(dateStr);
  const year = dateToCheck.getFullYear(),
    month = dateToCheck.getMonth(),
    day = dateToCheck.getDate();
  return new Date(year + 14, month, day) <= new Date();
}

console.log(isDateAtLeast14YearsOld("2009-11-08"));
