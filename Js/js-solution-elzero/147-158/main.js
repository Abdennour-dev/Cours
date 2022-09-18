// ##############################################################################
console.log("%cActivity 01", "color:red;");

class Car {
  constructor(name, model, price) {
    this.n = name;
    this.m = model;
    this.p = price;
  }
  carRun() {
    return "Car Is Running Now";
  }
}

let carOne = new Car("mg", 2022, 420000);

console.log(
  `Car One Name Is ${carOne.n} And Model Is ${carOne.m} And Price Is ${
    carOne.p
  } ${carOne.carRun()}`
);

// // Needed Output

// "Car One Name Is MG And Model Is 2022 And Price Is 420000"
// "Car Is Running Now"

// ##############################################################################
console.log("%cActivity 02", "color:red;");

class Phone {
  constructor(name, serial, price) {
    this.name = name;
    this.serial = serial;
    this.price = price;
  }
}

// Write Tablet Class Here
class Tablet {}
let TabletOne = new Tablet("iPad", 100200300, 1500, 12.9);
let TabletTwo = new Tablet("Nokia", 350450650, 800, 10.5);
let TabletThree = new Tablet("LG", 250450650, 650);

console.log(`${TabletOne.fullDetails()}`);
// iPad Serial is 100200300 And Size Is 12.9

console.log(`${TabletTwo.fullDetails()}`);
// Nokia Serial is 350450650 And Size Is 10.5

console.log(`${TabletThree.fullDetails()}`);
// LG Serial is 250450650 And Size Is Unknown
