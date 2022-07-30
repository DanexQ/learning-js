'use script';

/////////////////////////////////////////
///////// CONSTRUCTOR FUNCTION //////////
/////////////////////////////////////////

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;

  // NEVER DO THIS, because every created Person contains a copy of this method = bad performance
  //   this.calcAge = function () {
  //     console.log(2037 - this.birthYear);
  //   };
  //   console.log(this);
};

const daniel = new Person('Daniel', '1999');
console.log(daniel);

// 1. New {} -empty object is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}

const matilda = new Person('Matilda', '1991');
const jack = new Person('Jack', '2000');
console.log(matilda, jack);
console.log(daniel instanceof Person);

/////////////////////////////////////////
////////////// PROTOTYPES ///////////////
/////////////////////////////////////////

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

console.log(Person.prototype);
daniel.calcAge();
matilda.calcAge();
console.log(daniel.__proto__);
console.log(Person.prototype.isPrototypeOf(Person));
console.log(daniel.__proto__.isPrototypeOf(matilda));

Person.prototype.species = 'Homo Sapiens';
daniel.__proto__.species = 'ufo';
console.log(daniel, matilda);
console.log(daniel.__proto__.__proto__);

/////////////////////////////////////////
///////// CODING CHALLENGE #1 ///////////
/////////////////////////////////////////

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
};

Car.prototype.break = function () {
  this.speed -= 5;
};

const bmw = new Car('BMW', 120);
bmw.accelerate();
console.log(bmw);
