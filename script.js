'use strict';

let secretNumber = Math.trunc(Math.random()*20)+1;
let score = 20;
let highScore = 0;

const displayMessage = function(message)
{
  document.querySelector(`.message`).textContent = message
}

document.querySelector(`.check`).addEventListener(`click`,function() {
  const guess = (Number) (document.querySelector(`.guess`).value);

 // When there is no input
  if(!guess || guess<1 || guess >20)
  {
    displayMessage("⛔ No Valid Number Entered!");
  }

  //When Player wins
  else if(guess === secretNumber)
  {
    displayMessage(`🎉 Correct Number!`);
    document.querySelector(`body`).style.backgroundColor = `#60b347`;
    document.querySelector(`.number`).style.width = `30rem`;
    document.querySelector(`.number`).textContent = secretNumber;
    if(score > highScore)
    {
      highScore = score;
      document.querySelector(`.highscore`).textContent = highScore;
    }

  }

  //When the guess is too high or too low.
  else if(guess !== secretNumber)
  {
    if(score > 1)
    {
      displayMessage(guess > secretNumber ?`📈 Too High!`:`📉 Too Low!`);
      score--;
      document.querySelector(`.score`).textContent = score;
    }
    else
    {
      displayMessage(`👎 You lost the game!!`);
      score--;
      document.querySelector(`.score`).textContent = score;
      document.querySelector(`.number`).textContent = secretNumber;
      document.querySelector(`.number`).style.width = `30rem`;
      document.querySelector(`body`).style.backgroundColor = `darkRed`;
    }
  }
});

document.querySelector(`.again`).addEventListener(`click`,function() {
  secretNumber = Math.trunc(Math.random()*20)+1;
  score = 20;
  document.querySelector(`.guess`).value = "";
  document.querySelector(`.score`).textContent = score;
  document.querySelector(`.number`).textContent = `?`;
  displayMessage(`Start guessing...`);
  document.querySelector(`.number`).style.width = `15rem`;
  document.querySelector(`body`).style.backgroundColor = `#222`;
});