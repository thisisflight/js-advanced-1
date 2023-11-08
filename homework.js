"use strict";
/*

сделать с помощью Set уникализацию массива объектов

*/

const objArray = [
  { id: 1, name: "Louis" },
  { id: 1, name: "Louis" },
  { id: 2, name: "Herda" },
  { id: 2, name: "Herda" },
  { id: 3, name: "Amos" },
  { id: 3, name: "Amos" },
  { id: 4, name: "Dummy" },
  { id: 4, name: "Dummy" },
  { id: 1, name: "Louis" },
];

/*
1. JSON.stringify(elem) - привели к строке
2. objArray.map((elem) => JSON.stringify(elem)) - применили приведение к строке к каждому объекту
3. new Set(objArray.map((elem) => JSON.stringify(elem))) - создали Set строк с приведенными объектами
4. [...new Set(objArray.map((elem) => JSON.stringify(elem)))].map((elem) => JSON.parse(elem)); - спарсили строки с объектами из деструктурированного Set с уникальными строками
*/

const uniqueObjArray1 = [
  ...new Set(objArray.map((elem) => JSON.stringify(elem))),
].map((elem) => JSON.parse(elem));
console.log(uniqueObjArray1);
