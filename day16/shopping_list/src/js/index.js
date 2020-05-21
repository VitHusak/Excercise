'use strict';

const shopingList = [
  {name:'apple', amount: 3},
  {name:'milk', amount: 2},
  {name:'banana', amount: 7},
  {name:'bread', amount: 1},
  {name:'pasta', amount: 3},
  {name:'ketchup', amount: 1},
  ];

const listElm = document.querySelector('#list');

shopingList.forEach((elm) => {
  listElm.innerHTML += `
  <div>${elm.name}: ${elm.amount}</div>`
});


const btnElm = document.querySelector('#btn');

const addItem = () => {
  const newNameElm = document.querySelector('#newName');
  const newAmountElm = document.querySelector('#newAmount');
  
  const obj = {};
  const newName = newNameElm.value;
  const newAmount = newAmountElm.value;

  shopingList.push(obj);
  shopingList[shopingList.length -1].name = newName;
  shopingList[shopingList.length -1].amount = newAmount;
  console.log(shopingList);

  listElm.innerHTML += `
  <div>${shopingList[shopingList.length -1].name}: ${shopingList[shopingList.length -1].amount}</div>`;
};

btnElm.addEventListener('click', addItem);





