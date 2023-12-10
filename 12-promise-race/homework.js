"use strict";

// имплементация race
function race(promises) {
  return new Promise((resolve, reject) => {
    promises.forEach((promise) => promise.then(resolve).catch(reject));
  });
}

// асинхронная функция получения имени покемона
async function getPokemonName(id) {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
    if (!response.ok) {
      throw new Error(response.status);
    }
    const data = await response.json();
    return data.name;
  } catch (e) {
    throw new Error(e);
  }
}

const promisesArray = [
  getPokemonName(1),
  getPokemonName(2),
  getPokemonName(3),
  getPokemonName(4),
];

race(promisesArray)
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
