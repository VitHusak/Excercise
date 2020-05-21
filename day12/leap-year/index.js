'use strict';


const btnElm = document.querySelector('#btn');

const fun = () => {
  const yearElm = document.querySelector('#year');
  const messageElm = document.querySelector('#message');

  const year = Number(yearElm.value);

  if ( year%4 === 0 && year%100 === 0 && year%400 === 0) {
    messageElm.textContent = `${year} is leap year!`;
  } else if (year%4 === 0 && year%100 === 0) {
    messageElm.textContent = `${year} is not leap year!`;
  } else if (year%4 === 0) {
    messageElm.textContent = `${year} is leap year!`;
  } else {
    messageElm.textContent = `${year} is not leap year!`;
  };
};

btnElm.addEventListener('click', fun);
