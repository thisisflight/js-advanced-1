"use strict";

const carsMap = new Map([
  [10000, "Lada"],
  [30000, "BMW"],
  [100000, "Bugatti"],
]);

const invertedMap = new Map([...carsMap].map((elem) => elem.reverse()));
// деструктуризация мапа в массив массивов, далее переворот каждого массива в массиве
console.log(invertedMap);
