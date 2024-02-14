'use strict';
/*
//to select a HTML element using it's class and then selecting it's content.
console.log(document.querySelector('.message').textContent);

//to select a HTML element using it's class, then selecting and changing it's content
document.querySelector('.message').textContent = '🎉 Correct Number!!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 40;

document.querySelector('.guess').value = 20;
console.log(document.querySelector('.guess').value);
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displayMessage('⛔ No Number entered!!');
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!!');
    document.querySelector('.number').textContent = secretNumber;

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too High!!' : '📉 Too Low!!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You lost the game!!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage('Start guessing...');
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

/*
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //when there is no input
  if (!guess) {
    //document.querySelector('.message').textContent = '⛔ No Number';
    displayMessage('⛔ No Number');

    //when player wins
  } else if (guess === secretNumber) {
    //document.querySelector('.message').textContent = '🎉 Correct Number!';

    displayMessage('🎉 Correct Number!');
    document.querySelector('.number').textContent = secretNumber;

    //manipulating css
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    //for implementing highscore
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    //Refactoring to avoid code duplication found in the conditions when the guess is too high and too low
  } else if (guess !== secretNumber) {
    if (score > 1) {
      //document.querySelector('.message').textContent = guess > secretNumber ? '📈 Too High!' : '📉 Too Low!';

      displayMessage(guess > secretNumber ? '📈 Too High!' : '📉 Too Low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      //document.querySelector('.message').textContent = ' You lost the game!';
      displayMessage(' You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }

  //when guess is too high
  //  else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📈 Too High!';
  //     score--; //score-- same as (score = score - 1)
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = ' You lost the game!';
  //     document.querySelector('.score').textContent = 0;
  //   }

  //   //when guess is too low
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📉 Too Low!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = ' You lost the game!';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});

//Coding Challenge #1

/*
Implement a game reset functionality, so that the player can make a new guess! Here is how:

1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the score and number variables
3. Restore the initial conditions of the message, number, score and guess input fields
4. Also restore the original background color (#222) and number width (15rem)

*/

//Solution
/*
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  //document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');

  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = ''; //has value not textcontent, because it is an input element.

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
*/
