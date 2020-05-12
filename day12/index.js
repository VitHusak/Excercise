'use strict';

let seat = Number(prompt('Select you seat:'))

let column = Math.floor(seat/10) + 65;
let row = seat%10

document.write('Coordinates of seat is : ', String.fromCharCode(column), row);

console.log('ahoj');