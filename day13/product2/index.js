'use strict';

const buyIt = () => {
    const buttElm = document.querySelector('#buy');
    const amountElm = document.querySelector('#amount');
    

    buttElm.className = 'after';
    
    buttElm.textContent = 'In cart ' + amountElm.value + ' product(s)';
}