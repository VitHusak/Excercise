'use strict';
// biginner level
const squere = (num) => num**2;


const hypotenuse = (num1, num2) => Math.sqrt(squere(num1) + squere(num2));

const abs = (num) => {
    if (num < 0) {
        return -num;
    }

    return num;
};


const emailFromLogin = (login) => login + '@codeboot.com';

const loginFromName = (first, last) => {
    const last5Latter = last.slice(0, 5);
    const first3Latter = first.slice(0, 3);

    return last5Latter + first3Latter;
};

const emailFromName = (first, last) => loginFromName(first, last) + '@codeboot.com';

// Intermediate level

const salary = (pay, hours, days) => pay*hours*days;

const taxedSalary = (salary, tax) => salary*(1 - tax/100);

const max3 = (a, b, c) => Math.max(a, b, c);

const spread3 = (a, b, c) => Math.max(a, b, c) - Math.min(a, b, c);





