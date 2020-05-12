'use strict';

const newPassword = prompt('Enter your new password:');


if (newPassword.length < 8) {
    alert('this password isnt so much secure');
}



if ( newPassword >= 8) {
    const isItSamePassword = prompt('enter your password again:')
}
else if (newPassword === isItSamePassword) {
    alert('good!');
} else {
    alert('Your passwords to no match');
}