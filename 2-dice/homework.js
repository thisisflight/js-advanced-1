"use strict";

function randomDiceNumber(dice) {
  // получаем рандомное число в зависимости от переданного dice
  console.log(`Получен dice: ${dice}`);
  const min = 1,
    max = Number(dice.slice(1));
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// выполним несколько бросков
// получим рандомный индекс и выведем в консоль резуьтат броска

const diceArr = ["d4", "d6", "d8", "d10", "d12", "d16", "d20"];
for (let i = 0; i <= 10; i++) {
  const randomIndex = Math.floor(Math.random() * diceArr.length);
  console.log(randomDiceNumber(diceArr[randomIndex]));
}
