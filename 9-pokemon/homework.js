"use strict";

// пришлось поставить зависимость в package.json, без нее не взлетал на моей версии node v18.17.1

const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

const pokemonRequest = new XMLHttpRequest();
pokemonRequest.open(
  "GET",
  `https://pokeapi.co/api/v2/pokemon/ditto
`
);
pokemonRequest.send();
pokemonRequest.addEventListener("load", function () {
  const { abilities } = JSON.parse(this.responseText);
  const { ability } = abilities[0];
  const abilityRequest = new XMLHttpRequest();
  abilityRequest.open("GET", ability.url);
  abilityRequest.send();
  abilityRequest.addEventListener("load", function () {
    const effectEntries = JSON.parse(this.responseText).effect_entries;
    effectEntries.map((element) => {
      const { effect, language } = element;
      if (language.name == "en") {
        console.log(effect);
      }
    });
  });
});
