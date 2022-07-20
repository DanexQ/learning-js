'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movement) {
  containerMovements.innerHTML = '';
  movement.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `<div class="movements__row">
    <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
    <div class="movements__date">3 days ago</div>
    <div class="movements__value">${mov} €</div>
  </div>`;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map((name) => name[0])
      .join('');
    console.log(acc);
  });
};

const calcDisplayBalance = function (movements) {
  const balance = movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${balance} €`;
};

const calcDisplaySummary = function (movements) {
  const incomes = movements
    .filter((mov) => mov > 0)
    .reduce((acc, mov) => acc + mov);
  labelSumIn.textContent = `${incomes} €`;

  const out = movements
    .filter((mov) => mov < 0)
    .reduce((acc, mov) => acc + mov);
  labelSumOut.textContent = `${Math.abs(out)} €`;

  const interest = movements
    .filter((mov) => mov > 0)
    .map((mov) => (mov * account1.interestRate) / 100)
    .reduce((acc, mov) => acc + mov);
  labelSumInterest.textContent = `${interest} €`;
};

calcDisplaySummary(account1.movements);
displayMovements(account1.movements);

const user = `Steven Thomas Williams`;
createUsernames(accounts);
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
calcDisplayBalance(account1.movements);

/////////////////////////////////////////////////

// let arr = ['a', 'b', 'c', 'd'];

// // SLICE
// console.log(arr.slice(2));

// // SPLICE THE SAME AS SLICE BUT MUTATES THE ARRAY | IT'S REMOVING ITEMS || MUTATE
// console.log(arr.splice(2));

// // REVERSE | AS THE NAME SUGGEST IT'S REVERSING ARR || MUTATE
// const arr2 = ['g', 'h', 'i', 'j', 'k'];
// console.log(arr2.reverse());

// // CONCAT
// const letters = arr.concat(arr2);
// const letters2 = [...arr, ...arr2];
// console.log(letters);

// // JOIN
// console.log(letters.join(' - '));

// // AT | WE CAN USE NEGATIVE VALUES
// console.log(arr.at(-1));
// console.log(arr[0]);

// for (const [i, movement] of movements.entries()) {
//   if (movement > 0) {
//     console.log(`Movement ${i}: You deposited ${movement}`);
//   } else {
//     console.log(`Movement ${i}: You withdrew ${Math.abs(movement)}`);
//   }
// }

// movements.forEach(function (mov, i, arr) {
//   if (mov > 0) {
//     console.log(`Movement ${i}: You deposited ${mov}`);
//   } else {
//     console.log(`Movement ${i}: You withdrew ${Math.abs(mov)}`);
//   }
// });

// currencies.forEach(function (value, key, map) {
//   console.log(`${key}: ${value}`);
// });

// const currenciesUnique = new Set(['USD', 'EUR', 'GBP', 'EUR']);

// currenciesUnique.forEach(function (value, _, map) {
//   console.log(`${value}: ${value}`);
// });

// CODING CHALLENGE #1

// const dogsJulia = [9, 16, 6, 8, 3];
// const dogsKate = [10, 5, 6, 1, 4];

// const checkDogs = function (dogsJulia, dogsKate) {
//   const dogsJuliaCopy = dogsJulia.slice(1, -2);
//   const dogsAge = [...dogsJuliaCopy, ...dogsKate]; // dogsJuliaCopy.
//   dogsAge.forEach(function (dogAge, i) {
//     if (dogAge > 3) {
//       console.log(
//         `Dog number ${i + 1} is an adult, and is ${dogAge} years old`
//       );
//     } else {
//       console.log(`Dog number ${i + 1} is still a puppy 🐶`);
//     }
//   });
// };

// checkDogs(dogsJulia, dogsKate);

// CODING CHALLENGE #2

// const calcAverageHumanAge = function (dogsAge) {
//   const humanAge = dogsAge.map(function (dogAge) {
//     if (dogAge <= 2) return 2 * dogAge;
//     else return 16 + dogAge * 4;
//   });
//   const adults = humanAge.filter((age) => age >= 18);
//   const averageAge = adults.reduce((acc, age) => acc + age / adults.length, 0);
//   console.log(humanAge, adults, averageAge);
// };

// calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
// calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);

const eurToUsd = 1.1;

// const movementsUSD = movements.map(function (mov) {
//   return Math.trunc(mov * eurToUsd);
// });

// console.log(movementsUSD);
// const movementsUSDArrow = movements.map((mov) => Math.trunc(mov * eurToUsd));
// console.log(movementsUSDArrow);

// const movementDescriptions = movements.map(
//   (mov, i) =>
//     `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(
//       mov
//     )}`
// );

// console.log(movementDescriptions);

// const deposits = movements.filter(function (mov) {
//   return mov > 0;
// });
// console.log(deposits);

// const withdrawals = movements.filter((mov) => mov < 0);
// console.log(withdrawals);

// const balance = movements.reduce((acc, curr) => acc + curr);
// console.log(balance);

// const totalDepositsUSD = Math.trunc(
//   movements
//     .filter((mov) => mov > 0)
//     .map((mov) => mov * eurToUsd)
//     .reduce((acc, mov) => acc + mov, 0)
// );
// console.log(totalDepositsUSD);
// const calcAverageHumanAge = (dogsAge) => {
//   const adultDogs = dogsAge
//     .map((age) => (age <= 2 ? 2 * age : 16 + age * 4))
//     .filter((age) => age >= 18)
//     .reduce((acc, age, i, arr) => acc + age / arr.length, 0);
//   console.log(adultDogs);
// };

// calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
// calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);

movements.find((mov) => mov < 0);
console.log(movements.find((mov) => mov < 0));
