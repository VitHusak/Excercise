'use strict';


const pointer = () => {
  const picContainerElm = document.querySelector('#pic-container');
  picContainerElm.classList.add('pic-container--background-img');
};

const hidder = () => {
  const spinnerElm = document.querySelector('#spinner');
  console.log(spinnerElm)
  spinnerElm.classList.add('pic-container__spinner--hidden');
};

setTimeout(pointer, 5000);
setTimeout(hidder, 5000);