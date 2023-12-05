"use strict";

/*  родительский класс */

class Billing {
  constructor(amount) {
    this.amount = amount;
  }

  calculateTotal() {
    console.log(this.amount);
  }
}

/* дочерние классы */

class FixBilling extends Billing {
  constructor(amount) {
    super(amount);
  }
}

class HourBilling extends Billing {
  constructor(amount, hours) {
    super(amount);
    this.hours = hours;
  }

  calculateTotal() {
    console.log(this.amount * this.hours);
  }
}

class ItemBilling extends Billing {
  constructor(amount, items) {
    super(amount);
    this.items = items;
  }

  calculateTotal() {
    console.log(this.amount * this.items);
  }
}

const fixBilling = new FixBilling(300),
  hourBilling = new HourBilling(300, 4),
  itemBilling = new ItemBilling(300, 9);
fixBilling.calculateTotal();
hourBilling.calculateTotal();
itemBilling.calculateTotal();
