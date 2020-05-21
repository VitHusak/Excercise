'use strict';
const starsElm = document.querySelectorAll('.rating__star');
const numberElm = document.querySelector('.rating__value');

let clickedStarIndex = 3;

starsElm.forEach((star, index) => {

  star.addEventListener('click', ()=> {
    clickedStarIndex = index;
    numberElm.textContent = `${clickedStarIndex + 1}`;
    // console.log(clickedStarIndex);
    // console.log(index);

    light();
  } )
})



const light = () => {
  starsElm.forEach((star, index) => {
    if(clickedStarIndex >= index){
      star.className = 'rating__star rating__star--on';
    } else {
      star.className = 'rating__star ';
    }
  })
}