'use strict';
// 
document.addEventListener('keyup', (event) => {

  if (event.code === 'Space') {
    const boxElm = document.querySelector('#box');
    boxElm.classList.toggle('on');
  }
})