'use strict';

const numberElm = document.querySelector('.number');

const displayElm = document.querySelector('.display');








const add = () => {
  const numberValue = numberElm.value;

  console.log(numberElm);

  displayElm.textContent = Number(displayElm.textContent) + Number(numberValue);

  numberElm.value = 0;
  numberElm.focus();
}