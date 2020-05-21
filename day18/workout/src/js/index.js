'use strict';

const btnMinusElm = document.querySelector('#btn-minus');
const btnPlusElm = document.querySelector('#btn-plus');



const plus = () => {
  const boxElm = document.querySelector('#box');

  if(boxElm.childNodes.length < 10){

    const div = document.createElement('div');
    div.className = `bar__item`;
    
    boxElm.appendChild(div);
  
    const headerElm = document.querySelector('#header');
    headerElm.textContent = `${boxElm.childNodes.length}/10`;
  };
};


const minus = () => {
  const boxElm = document.querySelector('#box');

  if(boxElm.childNodes.length >= 0){

    boxElm.removeChild(boxElm.childNodes[boxElm.childNodes.length -1]);
    const headerElm = document.querySelector('#header');
    headerElm.textContent = `${boxElm.childNodes.length}/10`;
  };


};

btnPlusElm.addEventListener("click", plus);
btnMinusElm.addEventListener("click", minus);