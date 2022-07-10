'use strict';

function calcAge(birthYear) {
  const age = 2037 - birthYear;
  console.log(firstName);

  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}.`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      const firstName = 'Steven';
      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }

      // completely new and different variable
      const output = 'NEW OUTPUT';

      // the same variable, but reassigned
      // output = 'NEW OUTPUT'
      console.log(output);
    }
    console.log(millenial);
    console.log(output);
  }

  printAge();
  return age;
}

const firstName = 'Daniel';
calcAge(1993);
