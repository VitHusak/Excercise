'use strict';

let message = prompt('Write you sms here:');


const numberOfSms = Math.ceil(message.length/160);


document.write('Your message is in ' + numberOfSms + ' sms.');