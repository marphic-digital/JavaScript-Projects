'use strict';

const checkBtnEl = document.querySelector('.check');

const randomNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('#number').textContent = randomNumber;

checkBtnEl.addEventListener('click', function () {
  const inputEl = Number(document.querySelector('#input').value);

  if (!inputEl) {
    alert(`Please Enter a number between 1 to 20.`);
  } else if (inputEl < randomNumber) {
    document.querySelector('.low').textContent = '⬇ Too Low';
  } else if (inputEl > randomNumber) {
    document.querySelector('.low').textContent = '⬆ Too High';
  } else if (inputEl === randomNumber) {
    document.querySelector('.low').textContent = '🎉 Correct Number';
  }
});
