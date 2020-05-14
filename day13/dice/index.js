'use strict';

const diceElm = document.querySelector('#dice');


const roll = () => {
  const num = Math.ceil(Math.random()*6);

  switch (num) {
    case 1:
      diceElm.className = 'roll-section__dice1';
      break;
    case 2:
      diceElm.className = 'roll-section__dice2';
      break;
    case 3:
      diceElm.className = 'roll-section__dice3';
      break;
    case 4:
      diceElm.className = 'roll-section__dice4';
      break;
    case 5:
      diceElm.className = 'roll-section__dice5';
      break;
    case 6:
      diceElm.className = 'roll-section__dice6';
      break;
  }
};

