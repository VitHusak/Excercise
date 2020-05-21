'use strict';

class Product{
  constructor(name, price, quantity){
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  };

  sell() {
    this.quantity = this.quantity -1;
    alert(`We have now ${this.quantity} of ${this.name}.`)
  }
  store(count) {
    this.quantity = this.quantity + count;
    alert(`We have now ${this.quantity} of ${this.name}.`)
  }

};

const arrOfProducts = [
  new Product('iphone', 20000, 3),
  new Product('lux', 6000, 5),
  new Product('notebook', 26000, 2),
  new Product('marshall', 2000, 10),
];