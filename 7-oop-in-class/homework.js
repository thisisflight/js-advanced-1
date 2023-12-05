"use strict";

class Character {
  constructor(race, name, language) {
    this.race = race;
    this.name = name;
    this.language = language;
  }

  speak() {
    console.log(`язык: ${this.language}, имя: ${this.name}`);
  }
}

class Orc extends Character {
  constructor(race, name, language, weapon) {
    super(race, name, language);
    this.weapon = weapon;
  }

  speak() {
    console.log(`${this.name} сказал что-то и прорычал`);
  }

  hit() {
    console.log(`нанесен удар при помощи ${this.weapon}`);
  }
}

class Elf extends Character {
  constructor(race, name, language, spell) {
    super(race, name, language);
    this.spell = spell;
  }

  speak() {
    console.log(`${this.name} сказал(а) что-то и пошёл дождь`);
  }

  makeSpell() {
    console.log(`создано заклинание ${this.spell}`);
  }
}

const orc = new Orc("орк", "тралл", "оркский", "топор");
const elf = new Elf("эльф", "галадриэль", "эльфийский", "заморозить");
orc.speak();
orc.hit();
elf.speak();
elf.makeSpell();
