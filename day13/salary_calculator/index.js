'use strict';

const payElm = document.querySelector('#pay');
const hoursElm = document.querySelector('#hours');
const daysElm = document.querySelector('#days');

const resultElm = document.querySelector('.result');

const counter = () => {
  const salary = Number(payElm.value)*Number(hoursElm.value)*Number(daysElm.value);

  resultElm.textContent = String(salary);

  console.log(String(salary))

    
}