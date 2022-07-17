'use strict';

const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  //   numPassengers = numPassengers || 1;
  //   price = price || 199;
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123', 2);
createBooking('LH123', 1000);

const flight = 'LH234';
const daniel = {
  name: 'Daniel Szcz',
  passport: 125515231,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr.' + passenger.name;
  if (passenger.passport === 12551531) {
    alert('Check in!');
  } else {
    alert('Wrong passport');
  }
};

checkIn(flight, daniel);

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 10000000000000);
};

newPassport(daniel);
console.log(daniel);
