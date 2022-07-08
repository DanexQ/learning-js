'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = `🎉 Correct number`;
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 22;
// document.querySelector('.guess').value = 5;
// console.log(document.querySelector('.guess').value);

const secretNumber = String(Math.trunc(Math.random() * 20) + 1);
console.log(secretNumber);
let score = 20;

const x = function () {
  console.log(23);
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = document.querySelector('.guess').value;
  console.log(score);

  if (!guess) {
    document.querySelector('.message').textContent = `🛑 No number`;
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = `🎉 Correct number`;
    document.querySelector('.number').textContent = secretNumber;
  } else if (guess > secretNumber) {
    if (score > 0) {
      score--;
      document.querySelector('.score').textContent = score;
      document.querySelector('.message').textContent = `👆 Too high!`;
    } else {
      document.querySelector('.message').textContent = `💀 You lost the game!`;
    }
  } else if (guess < secretNumber) {
    if (score > 0) {
      score--;
      document.querySelector('.score').textContent = score;
      document.querySelector('.message').textContent = `👇 Too low!`;
    } else {
      document.querySelector('.message').textContent = `💀 You lost the game!`;
    }
  }
});
