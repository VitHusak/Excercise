'use strict';


const checkPassword = () => {
    const passwordElm = document.querySelector('#password');
    const resultOfPasswordElm = document.querySelector('#result-of-password');
    const passwordValue = passwordElm.value;


    if ( passwordValue === 'mySecretPassword') {
        resultOfPasswordElm.textContent = 'Perfect this is your password.';

    } else {
        resultOfPasswordElm.textContent = 'Hey! Who are you? This is not your password!';

    }
}