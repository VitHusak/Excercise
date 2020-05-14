'use strict';

const btnElm = document.querySelector('#btn');

btnElm.addEventListener(
  'click',
  () => {
    const inputElm = document.querySelector('#input');
    const outputElm = document.querySelector('#output');
    

    let time = Number(inputElm.value);
    outputElm.value = Number(inputElm.value);

    const timerId = setInterval(
      () => {
        time -= 1;
        outputElm.value = time;
      },
      1000);

    setTimeout(
      () => {
        clearInterval(timerId);
      },
      time*1000);

  }
);