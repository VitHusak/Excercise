'use strict';

//vybírám část dokumentu kam budu třeba chtít appendnout component
const app = document.querySelector('#app');

//vutvářím objekt z componentu a zadávám do něj inicializační data
const bar1 = new ProgressBar(0, 255, 'red');
//vyvolávám metodu mount které rozběhne celý komponent v perrent (tady teda v app)
bar1.mount(app);

const bar2 = new ProgressBar(0, 255, 'green');
bar2.mount(app);

const bar3 = new ProgressBar(0, 255, 'blue');
bar3.mount(app);

console.log(bar1);

const btnColorElm = document.querySelector('#btn-color');

// btnColorElm.addEventListener('click', () => {
//   btnColorElm.style.backgroundImage = `linear-gradient(to right, rgba(${bar1.value*15},0,0,1),rgba(0,${bar2.value*15},0,1), rgba(0,0,${bar3.value*15},1))`;
// });

setInterval(()=> {
  btnColorElm.style.backgroundImage = `linear-gradient(to right, rgba(${bar1.value},0,0,1),rgba(0,${bar2.value},0,1), rgba(0,0,${bar3.value},1))`;
}, 1);

// btnColorElm.style.backgroundImage = `linear-gradient(to right, rgba(${bar1.value},0,0,1),rgba(0,${bar2.value},0,1), rgba(0,0,${bar3.value},1))`;