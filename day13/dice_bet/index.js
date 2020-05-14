'use strict';

const betElm = document.querySelector('#bet');

const takeBet = () => { betElm.value };


const diceElm = document.querySelector('#dice');
const walletElm = document.querySelector('.bet-section__wallet-amount');
let money = Number(walletElm.value);


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

  if (num === 6) {
    money = money + 6*takeBet();
  }
};


