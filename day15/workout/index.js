'use  strict';

// const padlockElm = document.querySelector('#padlock');

// console.log(padlockElm);

// padlockElm.addEventListener('mouseenter', () => {
//   const  textElm = document.querySelector('#text');
//   textElm.className = 'text';
// });

// padlockElm.addEventListener('mouseleave', () => {
//   const  textElm = document.querySelector('#text');
//   textElm.className = 'text text--hide';
// });


// -------------------------------------------------------

const padlockElm = document.querySelector('#padlock');

const toggleHide = () => {
  const  textElm = document.querySelector('#text');
  textElm.classList.toggle('text--hide');
}

padlockElm.addEventListener('mouseenter', toggleHide);
padlockElm.addEventListener('mouseleave', toggleHide);
