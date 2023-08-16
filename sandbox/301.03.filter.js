'use strict';

const typeNum = (arr) => {
  // Solution code here...
  let result = [];
  result = arr.filter((value) => typeof value === 'number');
  return result;
};
// let answer = typeNum([1, 'bob', 3]);


const notInFirstArray = (forbiddenValues, arr) => {
  // Solution code here...
  // let result = [];
  // result = arr.filter((value) => !forbiddenValues.includes(value));
  // return result;
  return arr.filter((value) => !forbiddenValues.includes(value));
};
// const firstNums = [1, 2, 3];
// const secondNums = [1, 2, 3, 4];
// const firstStrings = ['Demi', 'Gregor', 'Hound'];
// const secondStrings = ['Gary', 'Charlotte', 'Demi', 'Gregor', 'Hound'];
// let answer = notInFirstArray(firstNums, secondNums);
// let answer = notInFirstArray(firstStrings, secondStrings);


// Write a function named evenOddNumericValues that, given an array as input, uses filter to remove any non-numeric values, then uses map to generate a new array containing the string 'even' or 'odd', depending on the original value.

// For example: evenOddNumericValues(['Gregor', 2, 4, 1]) returns ['even', 'even', 'odd'].

const evenOddNumericValues = (arr) => {
  // Solution code here...
  let result = [];

  arr.filter((value) => {
    if (typeof value === 'number') {
      if (value % 2 === 0 ){
        result.push('even');
      } else {
        result.push('odd');
      }
    }
  });
  return result;
};
// let answer = evenOddNumericValues(['Gregor', 2, 4, 1]);
let answer = evenOddNumericValues(['1', 2, 3, '4', 5,'6']);



console.log(answer);

