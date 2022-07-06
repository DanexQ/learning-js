// let marksWeight = 78;
// let marksHeight = 1.69;

// let johnsWeight = 92;
// let johnsHeight = 1.95;

// let markBMI = marksWeight / marksHeight ** 2;
// let johnBMI = johnsWeight / johnsHeight ** 2;
// console.log(markBMI, johnBMI);

// let markHeighterBMI = markBMI > johnBMI;

// if(markHeighterBMI) {
//     console.log(`Marks's BMI (${markBMI}) is higher than John's (${johnBMI})`);
// } else {
//     console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})`);
// }


// const firstName = 'Daniel';
// const job = 'teacher';
// const birthYear = 2003;
// const year = 2022;

// const daniel = "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job;

// console.log(daniel);

// const danielNew = `I'm ${firstName} a ${year-birthYear} years old ${job}`;
// console.log(danielNew);

// console.log(`String with 
// multiple
// lines`);

// const age = 17;
// const isOldEnough = age >= 18;

// if(isOldEnough) {
//     console.log(`Your old enough to start driving licence 😁`);
// } else {
//     const yearsLeft = 18 - age;
//     console.log(`You're too young. Wait another ${yearsLeft} years`);
// }  



// const birthYear = 1991;

// if(birthYear <= 2000) {
//     let century = 20;
// } else {
//     let century = 21;
// }


// const inputNumber = '1990';
// console.log(Number(inputNumber), inputNumber);
// console.log(inputNumber);
// console.log(String('23'), 23);
// console.log(Boolean(1), Boolean(0), Boolean(-1));


// console.log(Boolean(0));
// console.log(Boolean(NaN));
// console.log(Boolean(undefined));
// console.log(Boolean(''));
// console.log(Boolean(null));

// const money = 0;
// if(money) {
//     console.log(`Don't spend it all`);
// } else {
    // console.log('You should get a job!');
// }

// let height = 1;
// if(height) {
//     console.log(`Defined`);
// } else {
//     console.log(`Undefined`);
// }


// const age = '18';
// if(age === 18) console.log('You just became adult {strict}');
// if(age == 18) console.log("You just became adult {loose}");

// const fav = parseInt(prompt(`What's your favourite number?`));
// console.log(fav);


// const dolphinsFirstScore = 96;
// const dolphinsSecondScore = 108;
// const dolphinsThirdScore = 89;

// const koalasFirstScore = 88;
// const koalasSecondScore = 91;
// const koalasThirdScore = 110;

// const dolphinsAverage = (dolphinsFirstScore + dolphinsSecondScore + dolphinsThirdScore) / 3;
// const koalasAverage = (koalasFirstScore + koalasSecondScore + koalasThirdScore) / 3;

// if(dolphinsAverage > koalasAverage && dolphinsAverage > 100) {
//     console.log('Dolphins won!');
// } else if(koalasAverage > dolphinsAverage && koalasAverage > 100) {
//     console.log('Koalas won!');
// } else if(koalasAverage == dolphinsAverage){
//     console.log('Draw!');
// }

// const age = 21;

// age >= 18 ? console.log('I like to drink a wine') : console.log('I like to drink water');


const bill = 430;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value was ${bill + tip}`);