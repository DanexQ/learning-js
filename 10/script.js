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

const daniel = new Person('Daniel', 1999);
console.log(daniel);

// 1. New {} -empty object is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}

const matilda = new Person('Matilda', '1991');
const jack = new Person('Jack', '2000');
// console.log(matilda, jack);
// console.log(daniel instanceof Person);

/////////////////////////////////////////
/////////// CLASS EXPRESSION //////////// // ES6 CLASS
/////////////////////////////////////////

class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Methods are added to .prototype (__proto__) property automatically
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name`);
  }

  get fullName() {
    return this._fullName;
  }

  static hey() {
    console.log(`HEY`);
    console.log(this);
  }
}

const jessica = new PersonCl('Jessica Davis', 1999);
const walter = new PersonCl('Walter', 1239);
console.log(jessica);
jessica.calcAge();

PersonCl.prototype.greet = function () {
  console.log(`Hey ${this.fullName}`);
};
jessica.greet();

// 1. Classes are NOT hoisted
// 2. Classes are first-class citizes
// 3. Classes are executed in strict mode

const account = {
  owner: 'daniel',
  movements: [200, 300, 500, 250],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

const num = parseFloat(2.22);
const arr = Array.from(document.querySelectorAll('h1'));

account.latest = 700;
console.log(account.latest);
console.log(jessica.age);
console.log(jessica.fullName);

// can't have access to this from daniel object
Person.hey = function () {
  console.log(`SIEMANO SIEMANO`);
};

// can't have access from Person object
Person.prototype.siema = function () {
  console.log(`SIEMANECZKO`);
};
console.dir(Person);
Person.hey();
daniel.siema();
PersonCl.hey();

const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);
steven.name = 'Steven';
steven.birthYear = 2002;
steven.calcAge();

/////////////////////////////////////////
////////////// PROTOTYPES ///////////////
/////////////////////////////////////////

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

// console.log(Person.prototype);
// daniel.calcAge();
// matilda.calcAge();
// console.log(daniel.__proto__);
// console.log(Person.prototype.isPrototypeOf(Person));
// console.log(daniel.__proto__.isPrototypeOf(matilda));

// Person.prototype.species = 'Homo Sapiens';
// daniel.__proto__.species = 'ufo';
// console.log(daniel, matilda);
// console.log(daniel.__proto__.__proto__);

/////////////////////////////////////////
///////// CODING CHALLENGE #1 ///////////
/////////////////////////////////////////

// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// Car.prototype.accelerate = function () {
//   this.speed += 10;
// };

// Car.prototype.break = function () {
//   this.speed -= 5;
// };

// const bmw = new Car('BMW', 120);
// bmw.accelerate();
// console.log(bmw);

/////////////////////////////////////////
///////// CODING CHALLENGE #2 ///////////
/////////////////////////////////////////

class Car {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  accelerate() {
    this.speed += 10;
  }
  break() {
    this.speed -= 5;
  }

  get speedUS() {
    return `${this.speed / 1.6} mil/h`;
  }
  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

const ford = new Car('Ford', 120);
ford.accelerate();
ford.break();
console.log(ford.speedUS);
ford.speedUS = 150;
console.log(ford.speed);
console.log(ford.speedUS);
