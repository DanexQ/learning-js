'use strict';

// // function calcAge(birthYear) {
// //   const age = 2037 - birthYear;
// //   console.log(firstName);

// //   function printAge() {
// //     let output = `${firstName}, you are ${age}, born in ${birthYear}.`;
// //     console.log(output);

// //     if (birthYear >= 1981 && birthYear <= 1996) {
// //       var millenial = true;
// //       const firstName = 'Steven';
// //       const str = `Oh, and you're a millenial, ${firstName}`;
// //       console.log(str);

// //       function add(a, b) {
// //         return a + b;
// //       }

// //       // completely new and different variable
// //       const output = 'NEW OUTPUT';

// //       // the same variable, but reassigned
// //       // output = 'NEW OUTPUT'
// //       console.log(output);
// //     }
// //     console.log(millenial);
// //     console.log(output);
// //   }

// //   printAge();
// //   return age;
// // }

// // const firstName = 'Daniel';
// // calcAge(1993);

// // next lesson

// // const calcAge = function (birthYear) {
// //   console.log(2037 - birthYear);
// //   console.log(this);
// // };

// // calcAge(1999);

// // const calcAgeArr = (birthYear) => {
// //   console.log(2037 - birthYear);
// //   console.log(this);
// // };

// // calcAgeArr(1999);

// // const jonas = {
// //   year: 1999,
// //   calcAge: function () {
// //     console.log(this);
// //     console.log(2037 - this.year);
// //   },
// // };

// // jonas.calcAge();

// // const matilda = {
// //   year: 2004,
// // };

// // matilda.calcAge = jonas.calcAge;
// // matilda.calcAge();

// // console.log(matilda, jonas);

// // const f = jonas.calcAge;
// // f();

// //next lesson

// console.log(firstName);
// // console.log(job);
// // console.log(year);

// var firstName = 'Daniel';
// let job = 'programmer';
// const year = 1999;

// //functions
// console.log(addDecl(3, 5));
// function addDecl(a, b) {
//   return a + b;
// }

// // console.log(addExpr(3, 5));
// const addExpr = function (a, b) {
//   return a + b;
// };

// // console.log(addArrow(3, 5));
// const addArrow = (a, b) => a + b;

// if (!numProducts) deleteShoppingCar();

// var numProducts = 10;

// // example
// function deleteShoppingCar() {
//   console.log(`All product deleted!`);
// }

// //next lesson

// var firstName = 'Jake';

// const daniel = {
//   firstName: 'Daniel',
//   year: 1982,
//   calcAge: function () {
//     this.age = 2037 - this.year;
//     console.log(this.age);

//     // // Solution 1
//     // const self = this;
//     // const isMillenial = function () {
//     //   console.log(self.year >= 1981 && self.year <= 1996);
//     // };

//     // Solution 2
//     const isMillenial = () => {
//       console.log(this);
//       console.log(this.year >= 1981 && this.year <= 1996);
//     };

//     isMillenial();
//   },

//   greet: () => console.log(`Hey ${this.firstName}!`),
// };

// daniel.greet();
// daniel.calcAge();

// const addExpr = function (a, b) {
//   console.log(arguments);
//   return a + b;
// };

// const addArrow = (a, b) => {
//   console.log(a + b);
//   return a + b;
// };

// addArrow(2, 3);
// addExpr(2, 4);

//next lesson

// let age = 30;
// let oldAge = age;
// age = 31;
// console.log(age, oldAge);

// const me = {
//   name: 'Daniel',
//   age: 22,
// };

// const friend = me;
// friend.age = 26;
// console.log(me.age, friend.age);

//primitive
let lastName = 'Julian';
let oldLastName = lastName;
lastName = 'Davis';

//reference
const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 24,
};

const marriedJessica = jessica;

marriedJessica.lastName = 'Davis';
console.log(jessica, marriedJessica);

//copy

const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 22,
  family: ['Alice', 'Bob'],
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Blacksmith';

jessicaCopy.family.push('Mary');
console.log(jessica2, jessicaCopy);
