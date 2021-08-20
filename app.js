// game values
let min = 1,
  max = 10,
  winningNum = getRandomNum(min, max),
  guessLeft = 3;

// Ui elements
const game = document.querySelector('#game'),
  minNum = document.querySelector('.min-num'),
  maxNum = document.querySelector('.max-num'),
  guessBtn = document.querySelector('#guess-btn'),
  guessInput = document.querySelector('#guess-input'),
  message = document.querySelector('.message');

//Assign ui min max
minNum.textContent = min;
maxNum.textContent = max;

//play again listner
game.addEventListener('mousedown', function (e) {
  if (e.target.className === 'play-again') {
    window.location.reload();
  }
})

//listen for guess
guessBtn.addEventListener('click', function () {
  let guess = parseInt(guessInput.value);

  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please enter the number between ${min} and ${max}`, 'red');
  }
  //check if won
  if (guess === winningNum) {
    gameOver(true, `${winningNum} is corect!,YOU WIN`);
  }
  else {
    guessLeft -= 1;
    if (guessLeft === 0) {
      gameOver(false, `GAME OVER, you lost! the corect number was ${winningNum}`);

    }
    else {
      guessInput.style.borderColor = "red";
      guessInput.value = "";
      setMessage(`${guess} is not corect,${guessLeft} guesses left`, 'red');
    }

  }
});

//game over
function gameOver(won, msg) {
  let color;
  won === true ? color = 'green' : color = 'red'
  guessInput.disabled = true;
  guessInput.style.borderColor = color;
  message.style.color = color;
  setMessage(msg);
  guessBtn.value = 'Play Again';
  guessBtn.className += 'play-again';

}
//set message
function setMessage(msg, color) {
  message.style.color = color;
  message.textContent = msg;

}

///get wining number
function getRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}