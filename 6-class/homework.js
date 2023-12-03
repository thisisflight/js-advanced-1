"use strict";

class Car {
  #brand;
  #model;
  #mileage = 0;

  constructor(brand, model) {
    this.#brand = brand;
    this.#model = model;
  }

  info() {
    console.log(`${this.#brand} ${this.#model}, mileage: ${this.#mileage} km`);
  }

  get mileage() {
    return this.#mileage;
  }

  set mileage(amount) {
    if (amount > 0) {
      this.#mileage = amount;
    }
  }
}

const car = new Car("BMW", "X30");
car.mileage = 100_000;
car.info();
