'use strict';

let score = 20;
let highScore = 0;
let randomNumber = Math.trunc(Math.random() * 20) + 1;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const checkTheNumber = function (number) {
  if (number) {
    // when number is correct
    displayMessage('No Number');

    if (Number(number) === randomNumber) {
      document.querySelector('.number').textContent = randomNumber;
      displayMessage('you guessed the correct number 👏🙌');
      document.querySelector('body').style.backgroundColor = '#60b347';
      if (score > highScore) {
        highScore = score;
        document.querySelector('.highscore').textContent = highScore;
      } else {
        document.querySelector('.highscore').textContent = highScore;
      }
    } else if (number !== randomNumber) {
      if (score > 1) {
        displayMessage(
          number > randomNumber ? 'Number is too High' : 'Number is too low'
        );
        score--;
        document.querySelector('.score').textContent = score;
      } else {
        displayMessage('You Lost');
      }
    } else displayMessage('NO number ');
  }
};

const playAgain = function () {
  document.querySelector('.score').textContent = 20;
  randomNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  displayMessage('Start guessing...');
  document.querySelector('body').style.backgroundColor = '#222';
};
