'use strict';

// let hasDriversLicence = false;
// const passTest = true;

// if(passTest) hasDriversLicence = true;
// if(hasDriversLicence) console.log('siema');

function logger() {
    console.log('My name is Uwumwemwe');
}

function fruitProccessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges`;
    return juice;
}

// let newJuice = fruitProccessor(3, 2);
// console.log(newJuice);
console.log(fruitProccessor(2,3));

