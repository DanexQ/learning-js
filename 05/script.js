'use strict';

// // const restaurant = {
// //   name: 'Classico Italiano',
// //   location: 'Via Angelo Tavani 23, Firenze, Italy',
// //   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
// //   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
// //   mainMenu: ['Pizza', 'Pasta', 'Risotto'],
// //   openingHours: {
// //     thu: {
// //       open: 12,
// //       close: 22,
// //     },
// //     fri: {
// //       open: 11,
// //       close: 23,
// //     },
// //     sun: {
// //       open: 13,
// //       close: 20,
// //     },
// //   },

// //   order: function (starterIndex, mainIndex) {
// //     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
// //   },

// //   orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
// //     console.log(time, address, mainIndex, starterIndex);
// //   },

// //   orderPasta: function (ing1, ing2, ing3) {
// //     console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}.`);
// //   },

// //   orderPizza: function (mainIngredient, ...otherIngredients) {
// //     console.log(mainIngredient, otherIngredients);
// //   },
// // };

// // // const arr = [2, 3, 4];
// // // const a = arr[0];
// // // const b = arr[1];
// // // const c = arr[2];

// // // const [x, y, z] = arr;
// // // console.log(a, b, c);
// // // console.log(x, y, z);

// // // let [main, , secondary] = restaurant.categories;
// // // console.log(main, secondary);
// // // [secondary, main] = [main, secondary];
// // // console.log(main, secondary);

// // // const [starter, mainCourse] = restaurant.order(2, 0);
// // // console.log(starter, mainCourse);

// // // // nested destructuring
// // // const nested = [2, 4, [5, 6]];

// // // // const [i, , j] = nested;
// // // // console.log(i, j);

// // // const [i, , [j, k]] = nested;
// // // console.log(i, j, k);

// // // // default values

// // // const [p = 1, q = 1, r = 1] = [8, 9];
// // // console.log(p, q, r);

// // // next lesson

// // // // default variables in objects destructuring
// // // const { name, openingHours, categories } = restaurant;
// // // console.log(name, openingHours, categories);

// // // const {
// // //   name: restaurantName,
// // //   openingHours: hours,
// // //   categories: tags,
// // // } = restaurant;

// // // console.log(restaurantName, hours, tags);

// // // const { menu = [], starterMenu: starters = [] } = restaurant;
// // // console.log(menu, starters);

// // // // Mutating variables
// // // let a = 111;
// // // let b = 22;
// // // const obj = { a: 23, b: 6, c: 12 };
// // // console.log(a, b);

// // // ({ a, b } = obj);
// // // console.log(a, b);

// // // //nested objects
// // // const { fri: friday = 1 } = openingHours;
// // // console.log(friday);

// // // restaurant.orderDelivery({
// // //   time: '21:30',
// // //   address: 'Via del Sole, 21',
// // //   mainIndex: 2,
// // //   starterIndex: 1,
// // // });

// // // nest lesson

// // // const arr = [7, 8, 9];

// // // const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// // // const goodNewArr = [1, 2, ...arr];
// // // console.log(badNewArr, goodNewArr);
// // // console.log(...goodNewArr);

// // // const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// // // console.log(newMenu);

// // // const mainMenuCopy = [...restaurant.mainMenu];
// // // const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// // // const str = 'Daniel';
// // // const letters = [...str, ' ', 's.'];
// // // console.log(...str, 'Nowak');
// // // console.log(menu);

// // // const ingredients = [
// // //   prompt("Let's make pasta!\n\
// // // Ingredient 1?"),
// // //   prompt('Ingredient 2?'),
// // //   prompt('Ingredient 3?'),
// // // ];

// // // restaurant.orderPasta(...ingredients);

// // // objects
// // // const newRestaurant = { foundedIn: 1992, ...restaurant, founder: 'Guiseppe' };
// // // console.log(newRestaurant);
// // // console.log(restaurant);

// // // // arrays
// // // const arr = [1, 2, ...[3, 4]];
// // // console.log(arr);

// // // const [a, b, ...others] = [1, 2, 3, 4, 5];
// // // console.log(a, b, others);

// // // const [pizza, , risotto, ...otherFood] = [
// // //   ...restaurant.mainMenu,
// // //   ...restaurant.starterMenu,
// // // ];
// // // console.log(pizza, risotto, otherFood);

// // // //objects
// // // const { fri, ...weekdays } = restaurant.openingHours;
// // // console.log(fri, weekdays);

// // // // functions
// // // const add = function (...numbers) {
// // //   let sum = 0;
// // //   for (let i = 0; i < numbers.length; i++) sum += numbers[i];

// // //   console.log(...numbers, sum);
// // // };

// // // add(2, 3);
// // // add(5, 3, 7, 2);

// // // const x = [23, 5, 7];
// // // add(...x);

// // // restaurant.orderPizza('mushrooms', 'olive', 'onion');

// // //next lesson

// // // console.log(3 || 'Daniel');
// // // console.log('' || 'Daniel');
// // // console.log(null || undefined);
// // // console.log(true || 0);

// // // restaurant.numGuests = 0;
// // // const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// // // console.log(guests1);

// // // const guests2 = restaurant.numGuests || 10;
// // // const guests3 = 10 || 23;
// // // console.log(guests3);
// // // // short circuiting always true value or first true/falsy value if the same | for setting the default value if in condition is falsy one

// // // console.log(0 && 'Jonas');
// // // console.log(6 && 'Daniel');
// // // console.log('Hello' || 'Daniel' || 'Hi');
// // // //short circuitinh always falsy value or last falsy/true value if the same

// // // if (restaurant.orderPizza) {
// // //   restaurant.orderPizza('spinach', 'mushrooms');
// // // }

// // // restaurant.orderPizza || restaurant.orderPizza('mushrooms', 'spinach');

// // // const guestCorrect = restaurant.numGuests ?? 10;
// // // console.log(guestCorrect);

// // //next lesson

// // const rest1 = {
// //   name: 'Capri',
// //   numGuests: 0,
// // };

// // const rest2 = {
// //   name: 'La Piazza',
// //   owner: 'Giovanni Rossi',
// // };

// // // rest1.numGuests = rest1.numGuests || 10;
// // // rest2.numGuests = rest2.numGuests || 10;

// // // rest1.numGuests ||= 10;
// // // rest2.numGuests ||= 10;

// // rest1.numGuests ??= 10;
// // rest2.numGuests ??= 10;

// // rest1.owner &&= 'Anonymous';
// // rest2.owner &&= 'Anonymous';

// // console.log(rest1.numGuests, rest2.numGuests);
// // console.log(rest1.owner, '\n', rest2.owner);

// // CODING CHALLENGE

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
