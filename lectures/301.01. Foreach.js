'use strict';

let names = ['Jacob', 'Kristen', 'JB'];

// names.forEach(function(name) {
//   console.log(name);
// });

// names.forEach(function (name, index) {
//   console.log(`name is ${name} and index is ${index}`);
// });

// names.forEach ( (name, index) => console.log(`name is ${name} and index is ${index}`));


// const addOne = (arr) => {
//   // Solution code here...
//   arr.forEach((item, index) => arr[index] += 1);
//   console.log(arr);
// };

// addOne([1, 2, 3, 4, 5]);

const items = [
  { name: 'apples', available: true },
  { name: 'pears', available: true },
  { name: 'oranges', available: false },
  { name: 'bananas', available: true },
  { name: 'blueberries', available: false }
];

const createList = (availableItems) => {
  // Solution code here...
  let result = [];
  availableItems.forEach((item) => {
    if (item.available) {
      result.push(item.name);
    }
  });
  console.log(result);
};


const fizzbuzz = (arr) => {
  // Solution code here...
  let result = [];

  arr.forEach((number, index) => {
    if ((number % 3 ==0) && (number % 5 == 0)) {
      result.push('Fizz Buzz');
    } else if (number % 3 == 0) {
      // console.log(`${number} is divisible by 3`);
      result.push('Fizz');
    } else if (number % 5 == 0) {
      // console.log(`${number} is divisible by 5`);
      result.push('Buzz');
    } else {
      result.push(number);
    }
  });
  console.log(result);

};

const FizzBuzzinputs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
fizzbuzz(FizzBuzzinputs);
