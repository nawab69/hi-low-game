'use strict';

const balance = document.querySelector('#balance');
const bidAmount = document.querySelector('#bid_amount');
const option = document.querySelector('#option');
const play = document.querySelector('#play');
const scoreNumber = document.querySelector('#score');

const reset = function () {
  bidAmount.value = 0;
};

const generate = () => Math.floor(Math.random() * 100 + 1);

const playGame = function () {
  const score = generate();
  scoreNumber.textContent = score;
  let result = score >= 50 ? 'hi' : 'low';
  return option.value === result ? true : false;
};

const game = function () {
  if (parseInt(balance.textContent) >= bidAmount.value && bidAmount.value > 0) {
    const result = playGame();
    if (result == false) {
      balance.textContent = parseInt(balance.textContent) - bidAmount.value;
      if (scoreNumber.classList.contains('text-green-600')) {
        scoreNumber.classList.remove('text-green-600');
        scoreNumber.classList.add('text-red-600');
      }
      reset();
    } else {
      balance.textContent =
        parseInt(balance.textContent) + parseInt(bidAmount.value);
      if (scoreNumber.classList.contains('text-red-600')) {
        scoreNumber.classList.remove('text-red-600');
        scoreNumber.classList.add('text-green-600');
      }
      reset();
    }
  } else {
    reset();
    alert('Insufficient Balance !');
  }
};

play.addEventListener('click', game);
