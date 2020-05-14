'use strict';

const bulbElm = document.querySelector('.bulb-container');


const switching = () => {
  if (bulbElm.className === 'bulb-container') {
    bulbElm.className = 'on';
  } else {
    bulbElm.className = 'bulb-container';
  };  
};