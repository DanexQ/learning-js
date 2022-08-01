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

Person.prototype.calcAge = function () {
  console.log(2036 - this.birthYear);
};

// const Student = function (firstName, birthYear, course) {
//   Person.call(this, firstName, birthYear);
//   this.course = course;
// };

// Student.prototype = Object.create(Person.prototype);

// Student.prototype.introduce = function () {
//   console.log(`Hi, my name is ${this.firstName} and I study ${this.course}`);
// };
// const mike = new Student('Mike', 1999, 'Computer Science');
// mike.introduce();
// mike.calcAge();

const daniel = new Person('Daniel', 1999);
// console.log(daniel);

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

class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    // always needs to happen first
    super(fullName, birthYear);
    this.course = course;
  }

  introduce() {
    console.log(`Hi my name is ${this.fullName}`);
  }

  calcAge() {
    console.log(`I'm ${2037 - this.birthYear}`);
  }
}

const martha = new StudentCl('Martha Jones', 2012, 'Computer Science');
martha.introduce();
martha.calcAge();
const jessica = new PersonCl('Jessica Davis', 1999);
// const walter = new PersonCl('Walter', 1239);
// console.log(jessica);
// jessica.calcAge();

PersonCl.prototype.greet = function () {
  console.log(`Hey ${this.fullName}`);
};
// jessica.greet();

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
// console.log(account.latest);
// console.log(jessica.age);
// console.log(jessica.fullName);

// can't have access to this from daniel object
Person.hey = function () {
  console.log(`SIEMANO SIEMANO`);
};

// can't have access from Person object
Person.prototype.siema = function () {
  console.log(`SIEMANECZKO`);
};
// console.dir(Person);
// Person.hey();
// daniel.siema();
// PersonCl.hey();

const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const StudentProto = Object.create(PersonProto);
StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};

StudentProto.introduce = function () {
  console.log(`My name is ${this.firstName}`);
};

const jay = Object.create(StudentProto);
jay.init('Jay', 2010, 'Computer Science');
jay.introduce();
jay.calcAge();
const steven = Object.create(PersonProto);
// steven.name = 'Steven';
// steven.birthYear = 2002;
// steven.calcAge();

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

class Account {
  locale = navigator.language;
  #movements = [];
  #pin;
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;
    // PROTECTED

    console.log(`Thanks for opening an account, ${this.owner}`);
  }

  // PUBLIC INTERFACE
  get getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
    return this;
  }

  withdraw(val) {
    this.deposit(-val);
    return this;
  }

  // private
  #approveLoan(val) {
    return true;
  }

  requestLoan(val) {
    if (this.#approveLoan(val)) {
      this.deposit(val);
      console.log(`LOAN APPROVED`);
      return this;
    }
  }
}

const acc1 = new Account('Daniel', 'PLN', 1111);
// acc1.movements.push(250);
// acc1.movements.push(-130);
acc1.deposit(555);
acc1.withdraw(222);
acc1.requestLoan(1000);
console.log(acc1);
console.log(acc1.getMovements);
console.log(acc1.movements);
console.log(acc1.pin);

acc1.deposit(200).deposit(300).withdraw(300).requestLoan(3000);
console.log(acc1);
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

// class Car {
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed;
//   }
//   accelerate() {
//     this.speed += 10;
//   }
//   break() {
//     this.speed -= 5;
//   }

//   get speedUS() {
//     return `${this.speed / 1.6} mil/h`;
//   }
//   set speedUS(speed) {
//     this.speed = speed * 1.6;
//   }
// }

// const ford = new Car('Ford', 120);
// ford.accelerate();
// ford.break();
// console.log(ford.speedUS);
// ford.speedUS = 150;
// console.log(ford.speed);
// console.log(ford.speedUS);

/////////////////////////////////////////
///////// CODING CHALLENGE #3 ///////////
/////////////////////////////////////////

// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// Car.prototype.break = function () {
//   this.speed -= 5;
//   console.log('BREAK', this.speed);
// };

// Car.prototype.accelerate = function () {
//   this.speed += 10;
// };

// const EV = function (make, speed, charge) {
//   Car.call(this, make, speed);
//   this.charge = charge;
// };

// EV.prototype = Object.create(Car.prototype);

// EV.prototype.chargeBattery = function (chargeTo) {
//   this.charge = chargeTo;
//   console.log(this.charge);
// };

// EV.prototype.accelerate = function () {
//   this.speed += 20;
//   this.charge -= 1;
//   console.log(
//     `${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}%`
//   );
// };

// const tesla = new EV('Tesla', 140, 90);
// console.log(tesla.__proto__);
// tesla.accelerate();
// tesla.break();
// tesla.chargeBattery(99);

/////////////////////////////////////////
///////// CODING CHALLENGE #3 ///////////
/////////////////////////////////////////

class Car {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  break() {
    this.speed -= 5;
    return this;
  }

  accelerate() {
    this.speed = 10;
  }
}

class EV extends Car {
  #charge;
  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }

  accelerate() {
    this.speed += 20;
    this.#charge--;
    console.log(
      `${this.make} is going ${this.speed} km/h with a charge of ${
        this.#charge
      }`
    );
    return this;
  }
}

const rivian = new EV('Rivian', 120, 23);
console.log(rivian);
rivian.accelerate().accelerate().break().chargeBattery(40);
console.log(rivian);
