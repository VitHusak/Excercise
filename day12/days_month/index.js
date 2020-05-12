'use strict';

const month = Number(prompt('Enter some month by number:'));

if (month === 2) {
    document.write('This mont has 28 days.');
} else if (month%2 === 1) {
    document.write('This mont has 31 days.');
} else {
    document.write('This mont has 30 days.');
}


