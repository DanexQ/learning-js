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

const calcAge = function(birthYear) {
    return 2037 - birthYear;
}

const yearsUntilRetirement = function(birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if(retirement > 0) { 
        return `${firstName} retires in ${retirement} years`;
    } else {
        return -1;
    }
}

console.log(yearsUntilRetirement(1999, 'Daniel'));


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