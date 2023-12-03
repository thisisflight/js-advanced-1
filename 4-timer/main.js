"use strict";

const contentSelectorPrefix = ".timer-new-year__",
  valueSelector = ".timer-new-year__value",
  textSelector = ".timer-new-year__text",
  monthPlurals = ["месяц", "месяца", "месяцев"],
  daysPlurals = ["день", "дня", "дней"],
  hoursPlurals = ["час", "часа", "часов"],
  minutesPlurals = ["минута", "минуты", "минут"],
  secondsPlurals = ["секунда", "секунды", "секунд"],
  monthDurationInDays = new Map([
    [0, 31],
    [1, 28],
    [2, 31],
    [3, 30],
    [4, 31],
    [5, 30],
    [6, 31],
    [7, 31],
    [8, 30],
    [9, 31],
    [10, 30],
    [11, 31],
  ]),
  timerObj = {
    monthLeftValue: getQuerySelector("months", valueSelector),
    monthLeftText: getQuerySelector("months", textSelector),
    daysLeftValue: getQuerySelector("days", valueSelector),
    daysLeftText: getQuerySelector("days", textSelector),
    hoursLeftValue: getQuerySelector("hours", valueSelector),
    hoursLeftText: getQuerySelector("hours", textSelector),
    minutesLeftValue: getQuerySelector("minutes", valueSelector),
    minutesLeftText: getQuerySelector("minutes", textSelector),
    secondsLeftValue: getQuerySelector("seconds", valueSelector),
    secondsLeftText: getQuerySelector("seconds", textSelector),
  },
  newYearDate = new Date("January 1, 2024 00:00:00").getTime();

function getQuerySelector(postfix, selector) {
  return document.querySelector(
    `${contentSelectorPrefix}${postfix} ${selector}`
  );
}

function addZero(number) {
  if (number >= 10) {
    return number;
  }
  return `0${number}`;
}

function declOfNum(number, titles) {
  const cases = [2, 0, 1, 1, 1, 2];
  return titles[
    number % 100 > 4 && number % 100 < 20
      ? 2
      : cases[number % 10 < 5 ? number % 10 : 5]
  ];
}

function getMonthDurationInDays(dateObj) {
  if (dateObj.getDay() === 29 && dateObj.getMonth() === 1) {
    return 29;
  }
  return monthDurationInDays.get(dateObj.getMonth());
}

function setTimeValuesToPage() {
  const now = new Date();
  const timeNow = now.getTime();
  const timedelta = newYearDate - timeNow;
  const daysInMonth = getMonthDurationInDays(now);

  const monthsLeftValue = Math.floor(
      timedelta / (1000 * 60 * 60 * 24 * daysInMonth)
    ),
    daysLeftValue = Math.floor(
      (timedelta % (1000 * 60 * 60 * 24 * daysInMonth)) / (1000 * 60 * 60 * 24)
    ),
    hoursLeftValue = Math.floor(
      (timedelta % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    ),
    minutesLeftValue = Math.floor((timedelta % (1000 * 60 * 60)) / (1000 * 60)),
    secondsLeftValue = Math.floor((timedelta % (1000 * 60)) / 1000);

  timerObj.monthLeftValue.textContent = addZero(monthsLeftValue);
  timerObj.monthLeftText.textContent = declOfNum(monthsLeftValue, monthPlurals);

  timerObj.daysLeftValue.textContent = addZero(daysLeftValue);
  timerObj.daysLeftText.textContent = declOfNum(daysLeftValue, daysPlurals);

  timerObj.hoursLeftValue.textContent = addZero(hoursLeftValue);
  timerObj.hoursLeftText.textContent = declOfNum(hoursLeftValue, hoursPlurals);

  timerObj.minutesLeftValue.textContent = addZero(minutesLeftValue);
  timerObj.minutesLeftText.textContent = declOfNum(
    minutesLeftValue,
    minutesPlurals
  );

  timerObj.secondsLeftValue.textContent = addZero(secondsLeftValue);
  timerObj.secondsLeftText.textContent = declOfNum(
    secondsLeftValue,
    secondsPlurals
  );
}

setInterval(setTimeValuesToPage, 1000);
