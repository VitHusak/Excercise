let mph = Number(prompt('Write your favoutite velocity in mph to convert it in kph and round it:'));

const convertnum = 1.609344;

let kph = mph*convertnum;
let roundKPH = Math.round(kph);

alert('Your mph is ' + String(roundKPH) + ' in kph.');