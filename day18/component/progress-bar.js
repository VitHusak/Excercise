'use strict';

class ProgressBar {
// konstruktor zařadí všechny data do objektu
  constructor(value, max, color) {
    this.value = value;
    this.max = max;
    this.color = color;
  }
//render vytvoří a vrátí (return) všechny html prvky, které se mají přidat i s jejich addListener
  render() {
    const barElement = document.createElement('div');
    barElement.className = 'progress-bar';
    barElement.innerHTML = `
      <div id="label" class="label">
        <span id="counter">${this.value}</span>/<span id="maximum">${this.max}</span>
      </div>
      <div class="progress">
        <div id="minus" class="btn-minus"></div>
        <div class="bar">
          <div id="knob" class="knob"></div>
        </div>
        <div id="plus" class="btn-plus"></div>
      </div>
    `;

    let timer1Id = null;
    const btnPlus = barElement.querySelector('#plus');
    btnPlus.addEventListener('mousedown', () => {
      timer1Id = setInterval(() => this.increase(), 5);
    });

    btnPlus.addEventListener('mouseup', () => {
      clearInterval(timer1Id);
    });
    

    let timer2Id = null;
    const minusPlus = barElement.querySelector('#minus');
    minusPlus.addEventListener('mousedown', () => {
      timer2Id = setInterval(() => this.decrease(), 5);
    });

    minusPlus.addEventListener('mouseup', () => {
      clearInterval(timer2Id);
    });


    return barElement;
  }
//mount (připojit) je hlavní methoda, kterou po vytvoření objetku z class/componentu zavolám na právě vytvořený objekt, aby se všechno stalo... :D
//perent zadávám při volání a je to domElement, kde chci appendnout component
  mount(parent) {
    this.element = this.render();
    parent.appendChild(this.element);
    this.update();
  }

//update je metoda kterou měním hmtl prvky (v html nebo vytvořené v render()) vždycky když změním data bud v inicializaci v mount nebo při změnách v logických/měnících metodách (increase, decrease)

  update = () => {
    const counterElm = this.element.querySelector('#counter');
    counterElm.textContent = this.value;
    const maximumElm = this.element.querySelector('#maximum');
    maximumElm.textContent = this.max;

    const step = 100 / this.max;
    const knobElm = this.element.querySelector('#knob');
    knobElm.style.width = `${this.value * step}%`;
    knobElm.style.backgroundColor = this.color;
  }

//logická sekce 
//metody, ketré bud volám sám, nebo je připíchnu na addEventListener v render jako callbacky, pracují s daty a mění je proto na bázi této změny musím vždz zavolat update aby se tato zmena vykreslila i na stránce.

  increase() {
    if (this.value < this.max) {
      this.value += 1;
    }

    this.update();
  }

  decrease() {
    if (this.value > 0) {
      this.value -= 1;
    }

    this.update();
  }
};
