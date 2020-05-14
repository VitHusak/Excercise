'use strict';


const greet =  (name) => 'hello ' + name;

const apply = (fn, x) => {
  return fn(x);
}

console.log(apply(greet, 'Sue'));



// ---------------------------------------------------

let counter = 0;


const timerId = setInterval(
  () => {
  counter += 1;
  console.log(counter + ': ou shit this is for ever!')
},
1000);


const stop = () => {
  clearInterval(timerId);
};

// --------------------------------------------------------


const btnElm = document.querySelector('#btn');

btnElm.addEventListener('click', () => console.log('hi'))