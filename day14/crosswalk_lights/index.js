'use strict';

const btnElm = document.querySelector('.btn');

btnElm.addEventListener('click', () => {
  const stopElm = document.querySelector('#stop');
  const walkElm = document.querySelector('#walk');

  stopElm.className = 'light-stop-off light';
  walkElm.className = 'light-walk-on light';


  setTimeout(() => {
    stopElm.className = 'light-stop-on light';
    walkElm.className = 'light-walk-off light';
  }, 5000);
});