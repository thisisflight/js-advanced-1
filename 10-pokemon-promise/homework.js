"use strict";

fetch("https://pokeapi.co/api/v2/pokemon/ditto")
  .then((response) => response.json())
  .then(({ abilities }) => {
    const { ability } = abilities[0];
    return fetch(ability.url);
  })
  .then((response) => response.json())
  .then((data) => {
    const effectEntries = data.effect_entries;
    effectEntries.map((element) => {
      const { effect, language } = element;
      if (language.name == "en") {
        console.log(effect);
      }
    });
  });
