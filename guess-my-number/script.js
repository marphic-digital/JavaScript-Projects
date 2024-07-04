'use strict';

const checkBtnEl = document.querySelector('.check');
const pEl = document.querySelector('.low');
const scoreEl = document.querySelector('.label-score');
let score = 20;

const randomNumber = Math.trunc(Math.random() * 20) + 1;

let secretNumber = document.querySelector('#number');
const guess = (secretNumber.textContent = randomNumber);

checkBtnEl.addEventListener('click', function () {
  const inputEl = Number(document.querySelector('#input').value);

  if (!inputEl) {
    alert(`Enter a number between 1 to 20`);
  } else if (inputEl < guess) {
    if (score > 1) {
      pEl.innerHTML = `⬇ Too Low`;
      score--;
      scoreEl.innerHTML = `Score: ${score}`;
    } else {
      pEl.innerHTML = `😢 You lost the game!`;
      scoreEl.innerHTML = `Score: 0`;
    }
  } else if (inputEl > guess) {
    if (score > 1) {
      pEl.innerHTML = `⬆ Too High`;
      score--;
      scoreEl.innerHTML = `Score: ${score}`;
    } else if ((score = 0)) {
      pEl.innerHTML = `😢 You lost the game!`;
      scoreEl.innerHTML = `Score: 0`;
    }
  } else if (inputEl === guess) {
    pEl.innerHTML = `🎉 Correct Number`;
  }
});
