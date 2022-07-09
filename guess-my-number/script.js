'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = `🎉 Correct number`;
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 22;
// document.querySelector('.guess').value = 5;
// console.log(document.querySelector('.guess').value);

// DRAW A NUMBER
const lotteryMachine = () => Math.trunc(Math.random() * 20) + 1;

// DISPLAY A MESSAGE
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

let secretNumber = lotteryMachine();
let score = 20;
let highscore = 0;

// FUNCTIONALITY OF A CHECK BUTTON
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    // when there is no input
    displayMessage(`🛑 No number`);
  } else if (guess === secretNumber) {
    // when the player wins
    displayMessage(`🎉 Correct number`);
    document.querySelector('.number').textContent = secretNumber;
    highscore = highscore < score ? score : highscore;
    document.querySelector('.highscore').textContent = highscore;
    document.querySelector('body').style.backgroundColor = '#60b347';
  } else if (guess !== secretNumber) {
    if (score > 0) {
      //when there is wrong answer
      score--;
      document.querySelector('.score').textContent = score;
      displayMessage(guess > secretNumber ? `👆 Too high!` : `👇 Too low!`);
    } else {
      displayMessage(`💀 You lost the game!`);
    }
  }
});

// FUNCTIONALITY OF A AGAIN BUTTON
document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('body').style.backgroundColor = '#222';
  displayMessage(`Start guessing...`);
  document.querySelector('.number').textContent = `?`;
  document.querySelector('.guess').value = ``;
  score = 20;
  document.querySelector('.score').textContent = score;
  secretNumber = lotteryMachine();
  console.log(secretNumber);
});
