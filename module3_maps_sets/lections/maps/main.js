"use strict";

const prices = [
  ["Javascript", 2500],
  ["Java", 4000],
  ["Python", 2500],
];

// объявление map и поэлементная запись значений из массива
const pricesMap = new Map();
prices.map((element) => {
  const [lang, price] = element;
  pricesMap.set(lang, price);
});
console.log(pricesMap); // Map(3) {  'Javascript' => 2500, 'Java' => 4000, 'Python' => 2500}

console.log(pricesMap.get("Java")); // 4000
console.log(pricesMap.has("C")); // false
console.log(pricesMap.size); // 3

// создание map in-place из массива
const distancesMap = new Map([
  ["Moscow", 1000],
  ["Samara", 2000],
  ["Berlin", 3000],
]);
console.log(distancesMap); // Map(3) { 'Moscow' => 1000, 'Samara' => 2000, 'Berlin' => 3000 }

const distanceObj = {
  Moscow: 4000,
  Samara: 5000,
  Berlin: 6000,
};

// создание map in-place из объекта
console.log(new Map(Object.entries(distanceObj))); // Map(3) { 'Moscow' => 4000, 'Samara' => 5000, 'Berlin' => 6000 }

const carsMap = new Map([
  ["Lada", 10000],
  ["BMW", 30000],
  ["Bugatti", 100000],
]);

for (const [brand, price] of carsMap) {
  console.log(brand, price);
  /* 
    Lada 10000
    BMW 30000
    Bugatti 100000
  */
}
