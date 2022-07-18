'use strict';

// const bookings = [];

// const createBooking = function (
//   flightNum,
//   numPassengers = 1,
//   price = 199 * numPassengers
// ) {
//   numPassengers = numPassengers || 1;
//   price = price || 199;
//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };

// createBooking('LH123', 2);
// createBooking('LH123', 1000);

// const flight = 'LH234';
// const daniel = {
//   name: 'Daniel Szcz',
//   passport: 125515231,
// };

// const checkIn = function (flightNum, passenger) {
//   flightNum = 'LH999';
//   passenger.name = 'Mr.' + passenger.name;
//   if (passenger.passport === 12551531) {
//     alert('Check in!');
//   } else {
//     alert('Wrong passport');
//   }
// };

// checkIn(flight, daniel);

// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random() * 10000000000000);
// };

// newPassport(daniel);
// console.log(daniel);

// functions accepting callback functions

// const oneWord = function (str) {
//   return str.replaceAll(' ', '').toLowerCase();
// };

// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(' ');
//   return [first.toUpperCase(), ...others].join(' ');
// };

// const transformer = function (str, fn) {
//   console.log(`Original string: ${str}`);
//   console.log(`Transformed string: ${fn(str)}`);
//   console.log(`Transformed by: ${fn.name}`);
// };

// transformer('Javascript is the best!', upperFirstWord);
// transformer('Javascript is the best!', oneWord);

// const high5 = function () {
//   console.log(`siema`);
// };

//callback function are functions that js will call later in the other funcion for example:
// document.body.addEventListener('click', high5);

// ['Daniel', 'Jonas', 'Adam'].forEach(high5);

// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

// const greeterHey = greet('Hey');
// greeterHey('Daniel');

// greet('Hello')('Daniel');

// const greetArrow = (greeting) => (name) => console.log(`${greeting} ${name}`);

// const greeting = greetArrow('hello');
// greeting('DANIEL');

// const lufthansa = {
//   airline: 'Lufthansa',
//   iataCode: 'LH',
//   bookings: [],
//   book(flightNum, passName) {
//     console.log(
//       `${passName} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
//     );
//     this.bookings.push({
//       flight: `${this.iataCode}${flightNum}`,
//       name: passName,
//     });
//   },
// };

// lufthansa.book('241', 'Daniel');
// console.log(lufthansa.bookings);

// const eurowings = {
//   airline: 'Eurowings',
//   iataCode: 'EW',
//   bookings: [],
// };

// const book = lufthansa.book;

// // book(23,'Sarah Williams');
// book.call(eurowings, 23, 'Sarah Williams');

// book.call(lufthansa, 232, 'Daniel');

// const flightData = [421, 'George Davis'];

// // it's the same result
// book.apply(eurowings, flightData);
// book.call(eurowings, ...flightData);

// const bookEW = book.bind(eurowings);
// const bookLH = book.bind(lufthansa);
// bookEW('997', 'Steven Williams');

// const bookEW23 = book.bind(eurowings, 23);
// bookEW23('Daniel Danel');

// console.log(lufthansa);
// console.log(eurowings);
// lufthansa.planes = 300;
// lufthansa.buyPlane = function () {
//   this.planes++;
//   console.log(this.planes);
// };

// document
//   .querySelector('.button')
//   .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.1, 200));

// const addVAT = addTax.bind(null, 0.23);
// console.log(addVAT(1000));

// const addTax = (rate) => (value) => value + value * rate;

// const addVAT = addTax(0.23);
// console.log(addVAT(100));
// const poll = {
//   question: 'What is your favourite programming language?',
//   options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
//   // This generates [0, 0, 0, 0]. More in the next section 😃
//   answers: new Array(4).fill(0),
//   registerNewAnswer() {
//     const answer = Number(
//       prompt(`${this.question}\n${this.options.join('\n')}`)
//     );
//     console.log(answer);
//     // answer > 0 && answer < 4 ? this.answers[answer]++ : 'Wrong input';
//     typeof answer &&
//       answer < this.answers.length &&
//       answer >= 0 &&
//       this.answers[answer]++;
//     this.displayResults('');
//     this.displayResults('string');
//   },
//   displayResults(type = 'array') {
//     if (type === 'array') {
//       console.log(this.answers);
//     } else if (type === 'string') {
//       console.log(`Poll results are ${this.answers.join(', ')}`);
//     }
//   },
// };

// poll.displayResults.call({ answers: [5, 2, 3] });
// poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] });

// document
//   .querySelector('.poll')
//   .addEventListener('click', poll.registerNewAnswer.bind(poll));

// const runOnce = function () {
//   console.log(`This will never run again`);
// };

// (function () {
//   console.log(`This will never run again`);
//   const isPrivate = 23;
// })();

// (() => console.log(`Imediately invoked function expression`))();
// runOnce();

// const secureBooking = function () {
//   let passengerCount = 0;

//   return function () {
//     passengerCount++;
//     console.log(`${passengerCount} passengers`);
//   };
// };

// const booker = secureBooking();

// booker();
// booker();
// booker();
// booker();

// let f;
// const g = function () {
//   const a = 23;
//   f = function () {
//     console.log(a * 2);
//   };
// };

// const h = function () {
//   const b = 111;
//   f = function () {
//     console.log(b * 2);
//   };
// };

// g();
// f();
// h();
// f();

// const boardPassengers = function (n, wait) {
//   const perGroup = n / 3;
//   setTimeout(function () {
//     console.log(`We are now boarding all ${n} passengers`);
//     console.log(`There are 3 groups, each with ${perGroup} passengers`);
//   }, wait * 1000);
//   console.log(`Will start boarding in ${wait} seconds`);
// };

// const perGroup = 1000;
// boardPassengers(perGroup, 3);

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';
  document.body.addEventListener('click', function () {
    header.style.color = 'blue';
  });
})();
