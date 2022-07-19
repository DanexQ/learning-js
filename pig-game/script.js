'use strict';

// Selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const player0NameContainer = document.getElementById('name--0');
const player1NameContainer = document.getElementById('name--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const wins0El = document.querySelector('.win-streak--0');
const wins1El = document.querySelector('.win-streak--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let scores, currentScore, activePlayer, playing, player1Wins, player0Wins;

let gameNum = 0;

const player0Name = prompt('Enter a name of first player:');
const player1Name = prompt('Enter a name of second player:');

const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;
  gameNum++;

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  diceEl.classList.add('hidden');
  player0El.classList.remove('winner');
  player1El.classList.remove('winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
  player0NameContainer.textContent = 'Player 0' && player0Name;
  player1NameContainer.textContent = 'Player 1' && player1Name;
};

init();

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer ? 0 : 1;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

const winStreak = function (player) {
  const htmlE = `<div class="win win--${gameNum}">
  <h3>🏆 Game ${gameNum}: WIN</h3>
  </div>`;
  console.log(htmlE);
  const winner = player ? wins1El : wins0El;
  setTimeout(function () {
    win.classList.add('win--effect');
  }, 500);
  winner.insertAdjacentHTML('afterbegin', htmlE);
  const win = document.querySelector(`.win--${gameNum}`);
};

// Rolling dice functionality
btnRoll.addEventListener('click', function () {
  if (playing) {
    // generate random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;
    // display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;
    // check for rolled 1: if true, switch to next player
    if (dice !== 1) {
      // add dice to the current score
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      // switch to next player
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    // add current score to active player's score
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    // check if active player's score is >= 100
    if (scores[activePlayer] >= 20) {
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      console.log(activePlayer);
      diceEl.classList.add('hidden');
      winStreak(activePlayer);
    } else {
      // switch player
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', init);
