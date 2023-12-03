"use strict";

const Character = function (race, name, language) {
  this.race = race;
  this.name = name;
  this.language = language;
};

Character.prototype.speak = function () {
  console.log(`язык: ${this.language}, имя: ${this.name}`);
};

const Orc = function (race, name, language, weapon) {
  Character.call(this, race, name, language);
  this.weapon = weapon;
};

Orc.prototype = Object.create(Character.prototype);
Orc.prototype.constructor = Orc;
Orc.prototype.hit = function () {
  console.log(`нанесен удар при помощи ${this.weapon}`);
};

const Elf = function (race, name, language, spell) {
  Character.call(this, race, name, language);
  this.spell = spell;
};

Elf.prototype = Object.create(Character.prototype);
Elf.prototype.constructor = Elf;
Elf.prototype.makeSpell = function () {
  console.log(`создано заклинание ${this.spell}`);
};

const orc = new Orc("орк", "тралл", "оркский", "топор");
const elf = new Elf("эльф", "галадриэль", "эльфийский", "заморозить");
orc.speak();
orc.hit();
elf.speak();
elf.makeSpell();
