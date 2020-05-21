'use strict';

class Rating {
  constructor (indexStartStar, maxStars) {
    this.indexStartStar = indexStartStar;
    this.maxStars = maxStars;
  };

  render() {
    const ratingElm = document.createElement('div');
    ratingElm.className = 'rating';
    ratingElm.innerHTML = `
    <div class="rating__value">${this.indexStartStar + 1}</div>
    <div class="rating__stars"></div>
    `;

    return ratingElm;
  };

  moumt(parent) {
    this.element = this.render();
    parent.appendChild(this.element);
    this.update();
    this.light();
  };

  update() {
    const ratingStarsElm = this.element.querySelector('.rating__stars');

    for(let i = 0; i < this.maxStars; i++) {
      ratingStarsElm.innerHTML += '<div class="rating__star"></div>';
    };

    const starsElm = this.element.querySelectorAll('.rating__star');
    
    starsElm.forEach((star, index) => { 
      const numberElm = this.element.querySelector('.rating__value');
      star.addEventListener('click', ()=> {
        this.indexStartStar = index;
        numberElm.textContent = `${this.indexStartStar + 1}`;
        this.light();
      })
    });

  };


  light() {
    const starsElm = this.element.querySelectorAll('.rating__star');

    starsElm.forEach((star, index) => {
      if(this.indexStartStar >= index){
        star.className = 'rating__star rating__star--on';
      } else {
        star.className = 'rating__star ';
      }
    })

  };
  
};


const appElm = document.querySelector('#app');
const rating1 = new Rating(2, 5);
rating1.moumt(app);


const rating2 = new Rating(3, 6);
rating2.moumt(app);

const rating3 = new Rating(7, 10);
rating3.moumt(app);

