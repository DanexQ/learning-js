'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2022-07-22T17:01:17.194Z',
    '2022-07-25T23:36:17.929Z',
    '2022-07-26T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
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

/////////////////////////////////////////////////
// Functions

const startLogOutTimer = function () {
  const tick = function () {
    const min = `${Math.floor(time / 60)}`.padStart(2, 0);
    const seconds = `${time % 60}`.padStart(2, 0);

    labelTimer.textContent = `${min}:${seconds}`;

    if (time === 0) {
      clearInterval(timer);
      labelWelcome.textContent = `Log in to get started!`;
      containerApp.style.opacity = 0;
    }
    time--;
  };
  let time = 10;
  tick();
  const timer = setInterval(tick, 1000);
  return timer;
};

const resetTimer = function () {
  if (timer) clearInterval(timer);
  timer = startLogOutTimer();
};

const formatCur = function (val, acc) {
  return new Intl.NumberFormat(acc.locale, {
    style: 'currency',
    currency: acc.currency,
  }).format(val);
};

function formatDate(isoDate, locale) {
  const calcDaysPassed = (day1, day2) =>
    Math.round(Math.abs(day2 - day1) / (1000 * 24 * 60 * 60));
  const daysPassed = calcDaysPassed(new Date(), new Date(isoDate));
  if (daysPassed === 0) return 'Today';
  if (daysPassed === 1) return 'Yesterday';
  if (daysPassed >= 2 && daysPassed <= 6) return `${daysPassed} days ago`;
  else {
    return new Intl.DateTimeFormat(locale).format(new Date(isoDate));
  }
}

const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;
  const dates = sort
    ? acc.movementsDates.slice().sort((a, b) => a - b)
    : acc.movementsDates;
  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const date = dates[i];

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
    <div class="movements__date">${formatDate(date, acc.locale)}</div>
        <div class="movements__value">${formatCur(mov, acc)}</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0).toFixed(2);
  labelBalance.textContent = `${formatCur(acc.balance, acc)}`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter((mov) => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${formatCur(incomes, acc)}`;

  const out = acc.movements
    .filter((mov) => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${formatCur(out, acc)}`;

  const interest = acc.movements
    .filter((mov) => mov > 0)
    .map((deposit) => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${formatCur(interest, acc)}`;
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
createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
  [...document.querySelectorAll('.movements__row')].forEach(function (row, i) {
    if (isEven(i)) {
      row.style.backgroundColor = 'lightgrey';
    }
  });

  resetTimer();
};

///////////////////////////////////////
// Event handlers
let currentAccount, timer;

btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    (acc) => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    // display current date
    const now = new Date();
    const options = {
      hour: 'numeric',
      minute: 'numeric',
      day: 'numeric',
      year: 'numeric',
      month: 'numeric',
      weekday: 'long',
    };
    labelDate.textContent = new Intl.DateTimeFormat(
      currentAccount.locale,
      options
    ).format(now);

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // timer
    if (timer) clearInterval(timer);
    timer = startLogOutTimer();

    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    (acc) => acc.username === inputTransferTo.value
  );
  const transactionDate = new Date().toISOString();
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    currentAccount.movementsDates.push(transactionDate);
    receiverAcc.movements.push(amount);
    receiverAcc.movementsDates.push(transactionDate);

    // Update UI
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value);
  const loanDate = new Date().toISOString();

  if (
    amount > 0 &&
    currentAccount.movements.some((mov) => mov >= amount * 0.1)
  ) {
    setTimeout(function () {
      // Add movement & date
      currentAccount.movements.push(amount);
      currentAccount.movementsDates.push(loanDate);
      // Update UI
      updateUI(currentAccount);
    }, 3000);
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      (acc) => acc.username === currentAccount.username
    );
    console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// console.log(Math.max(2, 5, 33, 64, 3));
// console.log(Math.max(2, 5, 3, '33', 3));
// console.log(Math.min(2, 5, 3, '33', 3));
// console.log(Math.PI);
// console.log(Math.PI * Number.parseFloat('10px') ** 2);
// console.log(Math.trunc(Math.random() * 8 + 1) + 1);

// const randomInt = (min, max) =>
//   Math.floor(Math.random() * (max - min) + 1) + min;

// console.log(randomInt(20, 30));
// console.log(Math.trunc(23.33));
// console.log(Math.floor(11.2));
// console.log(Math.floor(-11.2));
// console.log(Math.trunc(-11.6));
// console.log(Math.ceil(22.2));
// console.log(Math.ceil(-22.2));
// console.log(+(2.574326).toFixed(3));

const isEven = (n) => n % 2 === 0;
const isOdd = (n) => n % 2 === 1;

// console.log(isEven(22));
// console.log(isOdd(22));

// [...document.querySelectorAll('.movements__row')].forEach(function (row, i) {
//   if (isEven(i)) {
//     row.style.backgroundColor = 'blue';
//   }
// });

// const bigNumber = 254_938_985_000;
// console.log(bigNumber);
// const biggestNumber = 2 ** 53 + 1;
// console.log(biggestNumber);
// console.log(Number.MAX_SAFE_INTEGER);
// console.log(BigInt(2 ** 53) + 1n);
// console.log(20n > 19);
// console.log(typeof 20n, typeof 20);
// console.log(20n > '20');

// const date = new Date();
// console.log(date);
// console.log(new Date('July 26, 2022'));
// console.log(new Date(account1.movementsDates[0]));
// console.log(new Date(2037, 5, 29, 23, 54, 30));

const future = new Date(2037, 10, 19, 15, 10, 20);
// console.log(future);
// console.log(future.getFullYear());
// console.log(future.getMonth());
// console.log(future.getDate());
// console.log(future.getDay());
// console.log(future.getHours());
// console.log(future.getMinutes());
// console.log(future.getSeconds());
// console.log(future.toISOString()); // to store date somewhere
// console.log(future.getTime()); //timestamps
// console.log(Date.now().toISOString());
// const calcDaysPassed = (day1, day2) =>
//   Math.abs(day2 - day1) / (1000 * 24 * 60 * 60);
// const days = calcDaysPassed(new Date(2037, 10, 3), new Date(2037, 10, 6));
// console.log(days);

const options = {
  style: 'currency',
  currency: 'EUR',
  useGrouping: false,
};

console.log(navigator);
const n = 8_432_321.32;
console.log(`Poland: `, new Intl.NumberFormat('pl-PL', options).format(n));
console.log(`Germany`, new Intl.NumberFormat('de-DE', options).format(n));
console.log(`USA`, new Intl.NumberFormat('en-US', options).format(n));
console.log(`Syria`, new Intl.NumberFormat('ar-SY', options).format(n));

setTimeout(() => console.log('siema'), 2000);

const ingredients = ['spinach', 'salami'];
const pizzaTimer = setTimeout(
  (ing1, ing2) => console.log(`Here is your pizza with ${ing1} and ${ing2}.`),
  2000,
  ...ingredients
);

if (ingredients.includes('spinach')) clearTimeout(pizzaTimer);

const timerEnd = +new Date('July 26, 2022, 20:15:00');
console.log(timerEnd);

setInterval(() => {
  const now = +new Date();
  const siemanko = timerEnd - now;
  const siema = new Date(siemanko);
  console.log(
    `${siema.getHours()}:${siema.getMinutes()}:${siema.getSeconds()}`
  );
}, 1000);
