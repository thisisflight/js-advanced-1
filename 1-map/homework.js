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

const uniqueObjArray = [
  ...new Set(
    objArray.map((mapElement) =>
      objArray.find(
        (findElement) =>
          mapElement.id === findElement.id &&
          mapElement.name === findElement.name
      )
    )
  ),
];

console.log(uniqueObjArray);
