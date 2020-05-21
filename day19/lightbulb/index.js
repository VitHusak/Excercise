'use strict';

class Bulb {
  render() {
    const bulbElm = document.createElement('div');
    bulbElm.className = 'bulb-container';
    bulbElm.addEventListener('click', this.update.bind(this));


    // this.update.bind(this)

    return bulbElm;
  };

  mount(perent) {
    this.element = this.render();
    perent.appendChild(this.element);
  };

  update() {
    this.element.classList.toggle('on'); 
  };
};

const bodyElm = document.querySelector('body');

const bulb1 = new Bulb();
bulb1.mount(bodyElm);
const bulb2 = new Bulb();
bulb2.mount(bodyElm);
const bulb3 = new Bulb();
bulb3.mount(bodyElm);
const bulb4 = new Bulb();
bulb4.mount(bodyElm);
