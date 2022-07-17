'use strict';

// const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// const openingHours = {
//   [weekdays[3]]: {
//     open: 12,
//     close: 22,
//   },
//   [weekdays[4]]: {
//     open: 11,
//     close: 23,
//   },
//   [weekdays[5]]: {
//     open: 0,
//     close: 20,
//   },
// };

// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavani 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],
//   openingHours,

//   order(starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },

//   orderDelivery({ starterIndex, mainIndex, time, address }) {
//     console.log(time, address, mainIndex, starterIndex);
//   },

//   orderPasta(ing1, ing2, ing3) {
//     console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}.`);
//   },

//   orderPizza(mainIngredient, ...otherIngredients) {
//     console.log(mainIngredient, otherIngredients);
//   },
// };

// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x, y, z] = arr;
// console.log(a, b, c);
// console.log(x, y, z);

// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);
// [secondary, main] = [main, secondary];
// console.log(main, secondary);

// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// // nested destructuring
// const nested = [2, 4, [5, 6]];

// // const [i, , j] = nested;
// // console.log(i, j);

// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// // default values

// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r);

// next lesson

// // default variables in objects destructuring
// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;

// console.log(restaurantName, hours, tags);

// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// // Mutating variables
// let a = 111;
// let b = 22;
// const obj = { a: 23, b: 6, c: 12 };
// console.log(a, b);

// ({ a, b } = obj);
// console.log(a, b);

// //nested objects
// const { fri: friday = 1 } = openingHours;
// console.log(friday);

// restaurant.orderDelivery({
//   time: '21:30',
//   address: 'Via del Sole, 21',
//   mainIndex: 2,
//   starterIndex: 1,
// });

// nest lesson

// const arr = [7, 8, 9];

// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// const goodNewArr = [1, 2, ...arr];
// console.log(badNewArr, goodNewArr);
// console.log(...goodNewArr);

// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);

// const mainMenuCopy = [...restaurant.mainMenu];
// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// const str = 'Daniel';
// const letters = [...str, ' ', 's.'];
// console.log(...str, 'Nowak');
// console.log(menu);

// const ingredients = [
//   prompt("Let's make pasta!\n\
// Ingredient 1?"),
//   prompt('Ingredient 2?'),
//   prompt('Ingredient 3?'),
// ];

// restaurant.orderPasta(...ingredients);

// objects
// const newRestaurant = { foundedIn: 1992, ...restaurant, founder: 'Guiseppe' };
// console.log(newRestaurant);
// console.log(restaurant);

// // arrays
// const arr = [1, 2, ...[3, 4]];
// console.log(arr);

// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);

// const [pizza, , risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(pizza, risotto, otherFood);

// //objects
// const { fri, ...weekdays } = restaurant.openingHours;
// console.log(fri, weekdays);

// // functions
// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) sum += numbers[i];

//   console.log(...numbers, sum);
// };

// add(2, 3);
// add(5, 3, 7, 2);

// const x = [23, 5, 7];
// add(...x);

// restaurant.orderPizza('mushrooms', 'olive', 'onion');

//next lesson

// console.log(3 || 'Daniel');
// console.log('' || 'Daniel');
// console.log(null || undefined);
// console.log(true || 0);

// restaurant.numGuests = 0;
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests1);

// const guests2 = restaurant.numGuests || 10;
// const guests3 = 10 || 23;
// console.log(guests3);
// || short circuiting always true value or first true/falsy value if the same | for setting the default value if in condition is falsy one

// console.log(0 && 'Jonas');
// console.log(6 && 'Daniel' && 0);
// console.log(0 || 'Hello' || 'Daniel' || 'Hi');

// && for falsy values / last value
// || for true values / first value
// ?? for not nullish (null, undefined) values
// console.log(undefined ?? null ?? 2);

// if (restaurant.orderPizza) {
//   restaurant.orderPizza('spinach', 'mushrooms');
// }

// restaurant.orderPizza || restaurant.orderPizza('mushrooms', 'spinach');

// const guestCorrect = restaurant.numGuests ?? 10;
// console.log(guestCorrect);

//next lesson

// const rest1 = {
//   name: 'Capri',
//   numGuests: 0,
// };

// const rest2 = {
//   name: 'La Piazza',
//   owner: 'Giovanni Rossi',
// };

// // rest1.numGuests = rest1.numGuests || 10;
// // rest2.numGuests = rest2.numGuests || 10;

// // rest1.numGuests ||= 10;
// // rest2.numGuests ||= 10;

// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;

// rest1.owner &&= 'Anonymous';
// rest2.owner &&= 'Anonymous';

// console.log(rest1.numGuests, rest2.numGuests);
// console.log(rest1.owner, '\n', rest2.owner);

// CODING CHALLENGE

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// const [players1, players2] = game.players;
// const [gk, ...fieldPlayers] = players1;
// const allPlayers = [...game.players[0], ...game.players[1]];
// const [...players1Final] = [
//   ...game.players[0],
//   'Thiago',
//   'Coutinho',
//   'Perisic',
// ];
// const { team1, x: draw, team2 } = game.odds;

// const printGoals = function (...players) {
//   console.log(`${players.length} goals were scored!`);
// };

// printGoals(...game.scored);

// console.log('1.', players1, players2);
// console.log('2.', gk, fieldPlayers);
// console.log('3.', allPlayers);
// console.log('4.', players1Final);
// console.log('5.', team1, draw, team2);

// team1 < team2 && console.log(`Team 1 is more likely to win`);
// team1 > team2 && console.log(`Team 2 is more likely to win`);

// next lesson
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (const item of menu) console.log(item);

// for (const [index, item] of menu.entries()) {
//   console.log(`${index + 1}: ${item}`);
// }

// console.log(...menu.entries());

// next lesson

// console.log(restaurant.openingHours.mon?.open);
// console.log(restaurant.openingHours.fri?.open);

// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// for (const day of days) {
//   //   console.log(day, restaurant.openingHours[day]?.open);
//   console.log(
//     `On ${day} we open at ${restaurant.openingHours[day]?.open ?? 'closed'}`
//   );
// }

//methods
// console.log(restaurant.order?.(0, 1) ?? 'Method does not exists');

// const users = [{ name: 'Daniel', email: 'hello@daniel.com' }];

// console.log(users[0]?.name ?? 'User empty');

// if (users.length > 0) {
//   console.log(`User's name: ${users[0].name}`);
// }

// const properties = Object.keys(openingHours);

// for (const day of properties) {
//   console.log(day);
// }

// let openStr = `We are open on ${properties.length} days: \n`;

// for (const day of properties) {
//   openStr += `${day} `;
// }
// console.log(openStr);

// const values = Object.values(openingHours);
// console.log(values);

// const entries = Object.entries(openingHours);
// console.log(entries);

// for (const [key, { open, close }] of entries) {
//   openStr += ` ${key} ${open} - ${close}\n`;
// }
// console.log(openStr);

// CODING CHALLENGE #2

// for (const [goal, player] of game.scored.entries()) {
//   console.log(`Goal ${goal + 1}: ${player}`);
// }

// let av = 0;
// for (const siem of Object.values(game.odds)) {
//   av += siem;
// }
// console.log(av / Object.values(game.odds).length);

// for (const [team, val] of Object.entries(game.odds)) {
//   console.log(`Odd of ${game[team] || 'draw'}: ${val} `);
// }

// let scorers = {};
// for (const x of game.scored) {
//   scorers[x] ? scorers[x]++ : (scorers[x] = 1);
// }
// console.log(scorers);

//next lesson SETS
// const orderSet = new Set(['Pasta', 'Pizza', 'Pizza', 'Risotto', 'Pasta']);

// console.log(orderSet);
// console.log(orderSet.size);
// console.log(orderSet.has('Pizza'));
// console.log(orderSet.has('Bread'));
// orderSet.add('Garlic Bread');
// orderSet.add('Garlic Bread');
// orderSet.delete('Risotto');
// console.log(orderSet);

// for (const order of orderSet) console.log(order);

// const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
// const staffUnique = [...new Set(staff)];
// console.log(staffUnique);

// next lesson MAPS
// const rest = new Map();
// rest.set('name', 'Classico Italiano');
// rest.set(1, 'Firenze, Italy');
// rest.set(2, 'Lisbon, Portugal');
// rest
//   .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
//   .set('open', 11)
//   .set('close', 23)
//   .set(true, 'We are open')
//   .set(false, 'We are closed');
// console.log(rest.get('name'));
// console.log(rest.get(1));

// const time = 21;
// console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

// console.log(rest.has('categories'));
// rest.delete(2);
// console.log(rest);
// console.log(rest.size);
// rest.clear();
// const arr = [1, 2];
// rest.set(arr, 'test');
// console.log(rest);
// console.log(rest.get(arr));

// const question = new Map([
//   ['question', 'What is the best programming language?'],
//   [1, 'C'],
//   [2, 'Java'],
//   [3, 'JavaScript'],
//   ['correct', 3],
//   [true, 'Correct!'],
//   [false, 'Try again!'],
// ]);

// console.log(question);
// const hoursMap = new Map(Object.entries(openingHours));
// console.log(hoursMap);

// console.log(question.get('question'));
// for (const [key, value] of question) {
//   if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
// }
// const answer = Number(prompt('Your answer'));
// console.log(question.get(question.get('correct') === answer));

// const gameEvents = new Map([
//   [17, '⚽️ GOAL'],
//   [36, '🔁 Substitution'],
//   [47, '⚽️ GOAL'],
//   [61, '🔁 Substitution'],
//   [64, '🔶 Yellow card'],
//   [69, '🔴 Red card'],
//   [70, '🔁 Substitution'],
//   [72, '🔁 Substitution'],
//   [76, '⚽️ GOAL'],
//   [80, '⚽️ GOAL'],
//   [92, '🔶 Yellow card'],
// ]);

// const events = [...new Set(gameEvents.values())];

// console.log(events);
// gameEvents.delete(64);
// console.log(gameEvents);

// console.log(
//   `An event happened, on average, every ${90 / gameEvents.size} minutes.`
// );

// for (const [time, event] of gameEvents) {
//   console.log(`${time < 45 ? '[FIRST' : '[SECOND'} HALF] ${time}: ${event}`);
// }

// const airline = 'TAP Air Portugal';
// const plane = 'A320';

// console.log('B823'[0]);
// console.log(airline.length);
// console.log(airline.indexOf('r'));
// console.log(airline.lastIndexOf('r'));
// console.log(airline.indexOf('Portugal'));
// console.log(airline.slice(4));
// console.log(airline.slice(4, 7));
// console.log(airline.slice(0, airline.indexOf(' ')));
// console.log(airline.slice(airline.lastIndexOf(' ') + 1));
// console.log(airline.slice(1, -1));

// const checkMiddleSeat = function (seat) {
//   const isMiddle = seat.slice(-1) === 'B' || seat.slice(-1) === 'E';
//   console.log(`${isMiddle ? "It's in middle" : "It's not in the middle"}`);
// };

// checkMiddleSeat('11A');

// console.log(airline.toLowerCase());
// console.log(airline.toUpperCase());

// const passenger = 'DaNiEl';
// const passengerLower = passenger.toLowerCase();
// const passengerCorrect =
//   passengerLower[0].toUpperCase() + passengerLower.slice(1);

// console.log(passenger, passengerLower, passengerCorrect);

// const email = 'hello@daniel.com';
// const loginEmail = '   Hello@Daniel.Com \n';
// const emailLower = loginEmail.toLowerCase();
// const emailCorrect = emailLower.trim();
// console.log(email, loginEmail, emailLower, emailCorrect);
// console.log(email === emailCorrect);

// const normalizedEmail = loginEmail.toLowerCase().trim();
// console.log(normalizedEmail, email === normalizedEmail);

// const priceGB = '288,98£';
// const priceUS = priceGB.replace('£', '$').replace(',', '.');
// console.log(priceUS);
// const announcement =
//   'All passengers come to boarding door 23. Boarding door 23';
// console.log(announcement);
// console.log(announcement.replaceAll('door', 'gate')); // it's working :D

// const plane = 'Airbus A320neo';
// console.log(plane.includes('A320'));
// console.log(plane.startsWith('Air'));

// if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
//   console.log('Part of the new airbus family');
// }

// const checkBaggage = function (items) {
//   const itemsLower = items.toLowerCase();
//   if (itemsLower.includes('knife') || itemsLower.includes('gun')) {
//     console.log(`You're not allowed on board`);
//   } else {
//     console.log(`Welcome abroad!`);
//   }
// };

// checkBaggage('I have a laptop, some Food and a pocket Knife');
// checkBaggage('Socks and camera');
// checkBaggage('Got some snacks and a gun for protection');

// console.log('a+very+nice+string'.split('+'));
// console.log('Daniel Nowak'.split(' '));

// const [firstName, lastName] = 'Daniel Szcz'.split(' ');
// const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
// console.log(newName);

// const passenger = 'jessica ann smith davis';

// const capitalizeName = function (name) {
//   const names = name.split(' ');
//   const namesUpper = [];
//   for (const name of names) {
//     // namesUpper.push(name[0].toUpperCase() + name.slice(1));
//     namesUpper.push(name.replace(name[0], name[0].toUpperCase()));
//   }
//   console.log(namesUpper.join(' '));
// };

// capitalizeName('jessica ann smith davis');
// capitalizeName('daniel szcz');

// const message = 'Go to gate 23!';
// console.log(message.padStart(25, '+'));
// console.log('Daniel'.padEnd(25, '+'));

// const maskCreditCard = function (number) {
//   const str = number + '';
//   const last = str.slice(-4);
//   return last.padStart(str.length, '*');
// };

// console.log(maskCreditCard(4378182437284218));
// console.log(maskCreditCard('3829482700004392'));

// const message2 = 'Bad weather... All departures delayed\n';
// console.log(message2.repeat(5));

// const planesInLine = function (n) {
//   console.log(`There are ${n} planes in line ${'✈'.repeat(n)}`);
// };

// planesInLine(4);

//underscore_case
//  first_name
// Some_Variable
//   calculate_AGE
// delayed_departure

// document.body.append(document.createElement('textarea'));
// document.body.append(document.createElement('button'));

// document.querySelector('button').addEventListener('click', function () {
//   const names = document.querySelector('textarea').value;
//   const rows = names.split('\n');
//   for (const name of rows) {
//     let [first, second] = name.trim().toLowerCase().split('_');
//     second = second.replace(second[0], second[0].toUpperCase());
//     const arr = [first, second];
//     console.log(arr.join(''));
//   }
// });

// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// for (const row of flights.split('+')) {
//   const [type, from, to, time] = row.split(';');
//   const str = `${type.startsWith('_Delayed') ? '🔴' : ' '}${type
//     .split('_')
//     .join(' ')} from ${from.slice(0, 3).toUpperCase()} to ${to
//     .slice(0, 3)
//     .toUpperCase()} (${time.replace(':', 'h')})`.padStart(45);
//   console.log(str);
// }
