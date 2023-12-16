"use strict";

const buttonGroup = document.querySelector(".btn-group");
buttonGroup.addEventListener("click", (event) => {
  const currentBtn = event.target,
    counter = document.getElementById("counter");
  const buttons = document.querySelectorAll(".btn-success");

  buttons.forEach((element) => {
    element.classList.remove("btn-success");
    element.classList.add("btn-primary");
    element.textContent = "Нажми меня!";
  });

  let currentCounterValue = +counter.textContent;
  currentBtn.textContent = "Нажата!";
  currentBtn.classList.remove("btn-primary");
  currentBtn.classList.add("btn-success");
  counter.textContent = ++currentCounterValue;
});
