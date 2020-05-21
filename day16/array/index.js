'use stricxt';
//beginer leveů
const numbers = [18, 8, -24, 28, -17, 14, -10, 24, 12, -31, 19, 32, -14, -10, 13, 8, -15, -2, 17];

//Basic array manipulations
console.log(numbers.length);
console.log(numbers[13]);
console.log(numbers[Math.floor(numbers.length/2)]);

// Basic looping
//1 Output every number in the array to the console.
for(let i = 0; i < numbers.length; i += 1) {
  console.log('number' + numbers[i]);
}

numbers.forEach((value) => console.log(value));

//2 Output the square of every number to the console.
for(let i = 0; i < numbers.length; i += 1){
  console.log('number' + numbers[i]*numbers[i])
};

numbers.forEach((num) => console.log(num*num));

//3 utput only negative numbers from the array.
for(let i = 0; i < numbers.length; i += 1) {
  if(numbers[i] < 0) {
    console.log(numbers[i]);
  };
};

//4 Output an absolute value of every number in the array.
for(let i = 0; i < numbers.length; i += 1) {
  if(numbers[i] < 0) {
    console.log(-numbers[i]);
  } else {
    console.log(numbers[i]);
  }
};

//5 Using a loop find the index of the number -10 in the array.
for(let i = 0; i < numbers.length; i += 1) {
  if(numbers[i] === -10) {
    console.log(numbers[i] + ' has this index ' + i);
  };
};

//6 Output only those numbers whose absolute value is divisible by 3.
for(let i = 0; i < numbers.length; i += 1) {
  if(numbers[i]%3 === 0) {
    console.log(numbers[i] + 'are divided');
  };
};

console.log(-3%3 === 3%3)

//7 Output only even numbers from the array.
for(let i = 0; i < numbers.length; i += 1) {
  if(numbers[i]%2 === 0) {
    console.log(numbers[i] + 'is even');
  };
};

// 8 For every number in the array output the difference between that number and number 5.
for(let i = 0; i < numbers.length; i += 1) {
    console.log(5 - numbers[i] + 'is difference');
};

//9 For every number x in the array output the squared difference of x and number 5.

for(let i = 0; i < numbers.length; i += 1) {
  console.log((5 - numbers[i])**2 + 'is ');
};

//10 Count how many negative numbers are there in the array.
let count = 0;
for(let i = 0; i < numbers.length; i += 1) {
  if(numbers[i] < 0) {
    count += 1;
  }
};
console.log(count);


//11 Compute the sum of all the numbers in the array. Answer: 70
let sum = 0;
for(let i = 0; i < numbers.length; i += 1) {
  sum += numbers[i];
};
console.log(sum);

//12 Compute the average of the numbers in the array. Answer: 3.68421...
console.log(sum/numbers.length);

//13 Compute the sum of all the positive numbers in the array.
let positiveNumSum = 0;
for(let i = 0; i < numbers.length; i += 1) {
  if(numbers[i] > 0) {
    positiveNumSum += numbers[i];
  };
};
console.log(positiveNumSum);


//Intermediate level

//1 Output all the numbers which are greater than their predecessor in the array.
console.log(numbers[0]);
for(let i = 0; i < numbers.length; i += 1) {
  if(numbers[i] > numbers[i-1]) {
    console.log(numbers[i])
  }
};

//2 Output all the peaks in the array. A peak is a number whose predecessor and successor are both smaller than the number itself.
for(let i = 0; i < numbers.length; i += 1) {
  if((numbers[i] > numbers[i-1]) && (numbers[i] > numbers[i+1])) {
    console.log(numbers[i] + 'peak')
  }
};

//3 First, compute the average number in the array and save the result in a variable. Then compute the sum of squared differences from the average. Answer: 6188.1052...

const avarage = sum/numbers.length
let sumAver = 0;
for(let i = 0; i < numbers.length; i += 1) {
  sumAver += (avarage - numbers[i])**2;
};
console.log(sumAver);

//4 Compute the variance of the array. Variance is the average of squared differences from the average. Answer: 325.6897...

console.log(sumAver/numbers.length);

//5 Find the biggest element in the array
let biggestNum = numbers[0];
for(let i = 1; i < numbers.length; i += 1) {
  if(numbers[i] > biggestNum) {
    biggestNum = numbers[i];
  }
};
console.log(biggestNum);

//6 FInd the biggest element which is less then 16.
let less16 = null;
for(let i = 0; i < numbers.length; i += 1) {
  if((numbers[i] < 16) && (numbers[i] > less16)) {
    less16 = numbers[i];
  }
};
console.log(less16);

//7 From the original array create a new array with a reversed order of the elements.
const reversedArray = [];
for(let i = 0; i < numbers.length; i += 1) {
  reversedArray.unshift(numbers[i]);
};
console.log(reversedArray);

//8 From the original array create a new array with the elements randomly shuffled. Use the Math.random method to help you with randomness.
const newArray = [];
for(let i = 0; i < numbers.length; i += 1) {
  const random = Math.floor(Math.random()*newArray.length);
  newArray.splice(random,0, numbers[i]);
};
console.log(newArray);


//Advanced level
//1 Find the length of the longest ascending sequence of consecutive numbers in the array.


//--------------------------DANIELS SOLUTION----------------------------------------------------------

// let newArr = [];
// let biggestLen = 0;
// // let descendingLen = 0; //commented out because not needed on this section
// let ascendingLen = 0;
// for(let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] < numbers[i+1]) {
//         newArr.push(numbers[i]);
//     } else {
//         newArr.push(numbers[i])
//         if (newArr.length > ascendingLen) {
//             ascendingLen = newArr.length;
//         }
//         newArr = [];
//     }
// }
// console.log(`the biggest length of consequitive numbers ascending is ${ascendingLen}.`);

//------------------------------------------------------------------------------------------------------
console.log(numbers);

let arr = [0]; //zero is there as the first coordinates of value in numbers

for(let i = 1; i < numbers.length; i += 1) {
  if(numbers[i] < numbers[i-1]){
    arr.push(i);
  };
};
arr.push(numbers.length -1); //(numbers.length -1) is there as the last coordinate of value in numbers

let biggest = 0;
for(let i = 1; i < arr.length; i += 1) {
  if((arr[i] - arr[i-1]) > biggest){
    biggest = arr[i] - arr[i-1];
  };
};

console.log(biggest);

//2 Find the longest sequence of consecutive numbers that are either ascending or descending.
let arr2 = [0];
for(let i = 1; i < numbers.length; i += 1) {
  if(numbers[i] > numbers[i-1]){
    arr2.push(i);
  };
};
arr2.push(numbers.length -1); //(numbers.length -1) is there as the last coordinate of value in numbers

let biggest2 = 0;
for(let i = 1; i < arr.length; i += 1) {
  if((arr[i] - arr[i-1]) > biggest2){
    biggest2 = arr[i] - arr[i-1];
  };
};

console.log(biggest2);

//5 From the original array create a new array with the elements sorted from lowest to highest.
let num = numbers.slice();
const arrOrdered = [];

  
  for (let i = 0; i < numbers.length; i +=1 ) {  
    
    let maxNum = num[0];
    let maxNumIndex = 0;
    
    for(let j = 0; j < num.length; j +=1){
      if(num[j] >= maxNum) {
        maxNum = num[j];
        maxNumIndex = j;
      }
    }
    arrOrdered.unshift(maxNum);
    num.splice(maxNumIndex,1);

  };

  console.log(arrOrdered);