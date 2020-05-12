'use strict';

const age = Number(prompt('Enter your age please:'));
const basicPrice = 12;
const string = 'Your price is '

if (age <= 6) {
    const targetPrice = basicPrice*0;
    const targetString = string + targetPrice;
    alert(targetString);
} else if (age < 16) {
    const targetPrice = basicPrice*0.35;
    const targetString = string + targetPrice;
    alert(targetString);
} else if (age < 27) {
    const targetPrice = basicPrice*0.65;
    const targetString = string + targetPrice;
    alert(targetString);
} else if (age < 65) {
    const targetPrice = basicPrice*1;
    const targetString = string + targetPrice;
    alert(targetString);
} else {
    const targetPrice = basicPrice*0.5;
    const targetString = string + targetPrice;
    alert(targetString);
}