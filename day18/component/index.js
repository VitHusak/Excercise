'use strict';

//vybírám část dokumentu kam budu třeba chtít appendnout component
const app = document.querySelector('#app');

//vutvářím objekt z componentu a zadávám do něj inicializační data
const bar1 = new ProgressBar(15, 50, 'red');
//vyvolávám metodu mount které rozběhne celý komponent v perrent (tady teda v app)
bar1.mount(app);

const bar2 = new ProgressBar(2, 20, 'green');
bar2.mount(app);

const bar3 = new ProgressBar(8, 10, 'blue');
bar3.mount(app);
