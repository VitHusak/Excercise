'use strict';

const btnElm = document.querySelector('.btn');

btnElm.addEventListener('click', () => {
  const stopElm = document.querySelector('#stop');
  const walkElm = document.querySelector('#walk');
  const counterElm = document.querySelector('#counter');

  let waitTime = Math.ceil(Math.random()*5) + 1;
  counterElm.textContent = waitTime;
  counterElm.className = 'counter counter--wait';

  const counterId1 = setInterval(() => {
    waitTime -= 1;
    console.log(waitTime)
    counterElm.textContent = waitTime;
  }, 1000);

  setTimeout(() => {
    clearInterval(counterId1);

    stopElm.className = 'light-stop-off light';
    walkElm.className = 'light-walk-on light';

    let walkTime = 5;
    counterElm.textContent = walkTime;
  counterElm.className = 'counter counter--walk';

  
    const counterId2 = setInterval(() => {
      walkTime -= 1;      
      counterElm.textContent = walkTime;
    }, 1000);

    setTimeout(() => {
      clearInterval(counterId2);

      stopElm.className = 'light-stop-on light';
      walkElm.className = 'light-walk-off light';

    }, walkTime*1000);


  }, waitTime*1000);  

});