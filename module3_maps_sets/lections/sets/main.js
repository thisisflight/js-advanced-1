"use strict";

const flights = [
  "Vladivostok",
  "Dubai",
  "Frankfurt",
  "Moscow",
  "Dubai",
  "Frankfurt",
  "Vladivostok",
];

const flightsSet = new Set(flights);
console.log(flightsSet); // Set(4) { 'Vladivostok', 'Dubai', 'Frankfurt', 'Moscow' }

const someString =
  "agahjhadgahgdghsdgasjhdasgdhjadadhsjhjdsgjsadghjdashgjgjhsdaghsdgsaghjshajghgjsadhgjshgdahgjashjdsjhagdhgsjadghjsadhja";
const someStringSet = new Set(someString);
console.log(someStringSet); // Set(6) { 'a', 'g', 'h', 'j', 'd', 's' }

const allInOne = [
  "string",
  "string",
  4,
  4,
  true,
  true,
  false,
  false,
  false,
  "abc",
  "abc",
  1.4,
  1,
  4,
];
const allInOneSet = new Set(allInOne);
console.log(allInOneSet); // Set(7) { 'string', 4, true, false, 'abc', 1.4, 1 }

console.log(allInOneSet.size); // 7
console.log(allInOneSet.has("4")); // false
allInOneSet.add("4");
console.log(allInOneSet.has("4")); // true
allInOneSet.delete("4");
console.log(allInOneSet.has("4")); // false
console.log([...allInOneSet]); // [ 'string', 4, true, false, 'abc', 1.4, 1 ]
