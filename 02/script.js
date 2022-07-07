'use strict';

// let hasDriversLicence = false;
// const passTest = true;

// if(passTest) hasDriversLicence = true;
// if(hasDriversLicence) console.log('siema');


// function logger() {
//     console.log('My name is Uwumwemwe');
// }

// function fruitProccessor(apples, oranges) {
//     console.log(apples, oranges);
//     const juice = `Juice with ${apples} apples and ${oranges} oranges`;
//     return juice;
// }

// let newJuice = fruitProccessor(3, 2);
// console.log(newJuice);
// console.log(fruitProccessor(2,3));

//function declaration can be called everywhere in the code
// function calcAge1(birthYear) {
//     return 2037 - birthYear;
// }

// console.log(calcAge1(1991));

// //function expression can't be called before it is defined
// const calcAge2 =  function (birthYear) { 
//     return 2037 - birthYear;
// }

// console.log(calcAge2(1991));


//arrow function
// const calcAge3 = birthYear => 2037 - birthYear;

// console.log(calcAge3(1991));

// const calcAge = function(birthYear) {
//     return 2037 - birthYear;
// }

// const yearsUntilRetirement = function(birthYear, firstName) {
//     const age = calcAge(birthYear);
//     const retirement = 65 - age;

//     if(retirement > 0) { 
//         return `${firstName} retires in ${retirement} years`;
//     } else {
//         return -1;
//     }
// }

// console.log(yearsUntilRetirement(1999, 'Daniel'));


// function cutFruitPieces(fruit) {
//     return fruit * 4;
// }

// const fruitProcessor = function (apples, oranges) {
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);
//     console.log(apples, oranges);
//     const juice = `Juice made with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
//     return juice;
// }

// console.log(fruitProcessor(2,3));


// const average = (firstScore, secondScore, thirdScore) => (firstScore + secondScore + thirdScore) / 3;
// const dolphinsAverage = average(44, 23, 71);
// const koalasAverage = average(65, 54, 49);

// const checkWinner = function(avgDolphing, avgKoalas) {
//     if(avgDolphing >= avgKoalas * 2) {
//         console.log(`Dolphins win (${avgDolphing} vs ${avgKoalas})`);
//     } else if (avgKoalas >= avgDolphing * 2) {
//         console.log(`Koalas win (${avgKoalas} vs ${avgDolphing})`);
//     } else {
//         console.log(`No one win`);
//     }
// }
// checkWinner(dolphinsAverage, koalasAverage);


// const friend1 = 'Michael';
// const friend2 = 'Steven';
// const friend3 = 'Peter';

// const friends = ['Michael', 'Steven', 'Peter'];
// console.log(friends);

// const y = new Array(1991, 1984, 2008, 2020);
// console.log(friends[0]);
// console.log(friends.length);
// console.log(friends[friends.length - 1]);
// friends[2] = 'Jay';

// console.log(friends);

// const daniel = ['Daniel', 'Szczep', 2036 - 1999, friends];
// console.log(daniel);

// const calcAge = function (birthYear) {
//     return 2037 - birthYear;
// }

// const age1 = calcAge(y[0]);
// const age2 = calcAge(y[1]);
// const age3 = calcAge(y[y.length - 1]);
// console.log(age1, age2, age3);

// const ages = [calcAge(y[0]), calcAge(y[1]), calcAge(y[y.length - 1])];
// console.log(ages);


// const friends = ['Michael', 'Steven', 'Peter'];

// // add elements
// const friendsLenght = friends.push('Jay');
// console.log(friends, friendsLenght);

// friends.unshift('John');
// console.log(friends);

// // remove elements
// friends.pop();
// console.log(friends);
// const popped = friends.pop();
// console.log(popped);
// console.log(friends);

// const shifted = friends.shift();
// console.log(friends);
// console.log(shifted);

// console.log(friends.indexOf('Steven'));
// console.log(friends.includes('Steven'));
// console.log(friends.includes('bob'));


//coding challenge
// const calcTip = function(bill) {
//     return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// }

// console.log(calcTip(100));

// const bills = new Array(125, 555, 44);
// const tips = new Array(calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2]));
// const total = new Array(bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]);

// console.log(bills,
// tips,
// total);


// const daniel = {
//     firstName: 'Daniel',
//     lastName: 'Szcz',
//     birthYear: 1999,
//     job: 'driver',
//     friends: ['Michael', 'Peter', 'Steven'],
//     hasDriversLicence: false,

//     // calcAge: function() {
//     //     return 2037 - this.birthYear;
//     // }

//     calcAge: function() {
//         this.age = 2037 - this.birthYear;
//         return this.age;
//     }
// }

// // console.log(daniel);
// // console.log(daniel.lastName);

// // const keyName = 'Name';
// // console.log(daniel['first' + keyName]);

// // const interestedIn = prompt('Enter what do you want to know about Daniel');
// // console.log(daniel[interestedIn] ? daniel[interestedIn] : `Wrong choice`);

// // console.log(`${daniel.firstName} has ${daniel.friends.length} friends and his best friend is ${daniel['friends'][0]}.`);

// console.log(daniel.calcAge());

// console.log(daniel.age);
// console.log(`${daniel.firstName} is a ${daniel.age} years old ${daniel.job} and he ${daniel.hasDriversLicence ? "has " : "hasn't "} got drivers licence.`);


const mark = {
    firstName: 'Mark',
    lastName: 'Miller',
    height: 1.68,
    weight: 78,

    calcBMI: function() {
        this.BMI = this.weight / this.height ** 2; 
        return this.BMI
    }
}

const john = {
    firstName: 'John',
    lastName: 'Smith',
    height: 1.95,
    weight: 92,

    calcBMI: function() {
        this.BMI = this.weight / this.height ** 2; 
        return this.BMI
    }
}

console.log(john.calcBMI());
console.log(mark.calcBMI());

console.log(john.BMI > mark.BMI ? `John's BMI (${john.BMI}) is higher than Mark's BMI (${mark.BMI})` : 
`Mark's BMI (${mark.BMI}) is higher than John's BMI (${john.BMI})`);