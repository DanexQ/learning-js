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

const displayMovements = function (acc, sort = false) {
  const movs = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;
  containerMovements.innerHTML = '';
  movs.forEach(function (mov, i) {
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
  });
};

const calcDisplayBalance = function (acc) {
  const balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  acc.balance = balance;
  labelBalance.textContent = `${acc.balance} €`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter((mov) => mov > 0)
    .reduce((acc, mov) => acc + mov);
  labelSumIn.textContent = `${incomes} €`;

  const out = acc.movements
    .filter((mov) => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)} €`;

  const interest = acc.movements
    .filter((mov) => mov > 0)
    .map((mov) => (mov * acc.interestRate) / 100)
    .reduce((acc, mov) => acc + mov);
  labelSumInterest.textContent = `${interest} €`;
};
let htmlMovs;
const htmlMovements = function () {
  htmlMovs = Array.from(document.querySelectorAll('.movements__value'), (el) =>
    el.textContent.replace(' €', '')
  );
  console.log(htmlMovs);
};

const updateUI = function (acc) {
  // DISPLAY SUMMARY
  calcDisplaySummary(acc);
  // DISPLAY MOVEMENTS
  displayMovements(acc);
  // DISPLAY BALANCE
  calcDisplayBalance(acc);
  htmlMovements();
};

const user = `Steven Thomas Williams`;
createUsernames(accounts);

///////////////////////////////
// EVENT HANDLERS
let currentAccount;

// LOGIN
btnLogin.addEventListener('click', function (e) {
  e.preventDefault();
  currentAccount = accounts.find(
    (acc) => acc.username === inputLoginUsername.value
  );
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = '1';
    updateUI(currentAccount);
    // CLEAR INPUT FIELDS
    inputLoginPin.value = inputLoginUsername.value = '';
    inputLoginPin.blur();
    inputCloseUsername.blur();
  }
});

// TRANSFER MONEY
btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const accountTo = accounts.find(
    (acc) => acc.username === inputTransferTo.value
  );
  const amount = Number(inputTransferAmount.value);

  // clear input fields
  inputTransferAmount.value = inputTransferTo.value = '';
  inputTransferAmount.blur();
  inputTransferTo.blur();

  if (
    amount <= currentAccount.balance &&
    accountTo &&
    currentAccount.username !== accountTo?.username &&
    amount > 0
  ) {
    // do the transfer
    currentAccount.movements.push(-amount);
    accountTo.movements.push(amount);

    // update UI
    updateUI(currentAccount);
  }
});

// CLOSE ACCOUNT

btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  const givenPIN = Number(inputClosePin.value);
  const givenUsername = inputCloseUsername.value;
  if (
    givenPIN === currentAccount?.pin &&
    givenUsername === currentAccount?.username
  ) {
    const index = accounts.findIndex(
      (acc) => acc.username === currentAccount.username
    );
    accounts.splice(index, 1);
    containerApp.style.opacity = 0;
    inputClosePin.value = inputCloseUsername.value = '';
    inputClosePin.blur();
    inputCloseUsername.blur();
  }
});

// LOAN REQUEST
btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);
  if (
    amount > 0 &&
    currentAccount.movements.some((mov) => mov >= amount * 0.1)
  ) {
    currentAccount.movements.push(amount);
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});

// SORT
let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount, !sorted);
  sorted = !sorted;
});
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

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

// const eurToUsd = 1.1;

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

// movements.find((mov) => mov < 0);
// console.log(movements.find((mov) => mov < 0));
// console.log(movements.some((mov) => mov > 2999));
// console.log(movements.every((mov) => mov > -1000));

// const arr = [[1, [2, 3]], 4, [5, 6, [7, 8]], 9];

// console.log(arr.flat(3));
// const allMovements = accounts
//   .flatMap((acc) => acc.movements)
//   .reduce((acc, mov) => acc + mov, 0);
// console.log(`All accounts balance: ${allMovements}`);

// const accsMovements = accounts.flatMap((acc) => acc.movements);
// console.log(accsMovements.sort((a, b) => a - b));

// const arr = new Array(5);
// console.log(arr);
// arr.fill(1, 2, 4);
// const x = Array.from({ length: 5 }, () => 2);
// console.log(x);

// const diceRolls = Array.from({ length: 100 }, () =>
//   Math.trunc(Math.random() * 100)
// );
// console.log(diceRolls);

// some practise
const bankDepositSum = accounts
  .flatMap((acc) => acc.movements)
  .reduce((acc, mov) => (mov > 0 ? acc + mov : acc), 0);
console.log(bankDepositSum);

const numDeposits1000 = accounts
  .flatMap((acc) => acc.movements)
  .reduce((count, curr) => (curr >= 1000 ? ++count : count), 0);
console.log(numDeposits1000);

const sums = accounts
  .flatMap((acc) => acc.movements)
  .reduce(
    (sums, curr) => {
      // curr > 0 ? (sums.deposits += curr) : (sums.withdrawals += curr);
      sums[curr > 0 ? 'deposits' : 'withdrawals'] += curr; // better | more professional
      return sums;
    },
    { deposits: 0, withdrawals: 0 }
  );

console.log(sums);

const convertCaseTitle = function (title) {
  const expections = ['a', 'an', 'but', 'the', 'or', 'on', 'in', 'with'];
  const newTitle = title
    .split(' ')
    .reduce(
      (all, curr) =>
        expections.includes(curr)
          ? all + curr + ' '
          : all + curr[0].toUpperCase() + curr.slice(1).toLowerCase() + ' ',
      ''
    );
  console.log(newTitle);
};

convertCaseTitle('this is a NICE title');
convertCaseTitle('taco hemingway');
convertCaseTitle('i am a plumber');
