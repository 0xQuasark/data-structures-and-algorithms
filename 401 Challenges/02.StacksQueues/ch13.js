'use strict';

const Stack = require('./stack');
require('./stack');

function validateBrackets(str) {
  const stack = new Stack();
  const openBrackets = ['(', '{', '['];
  const closeBrackets = [')', '}', ']'];

  for (let i = 0; i < str.length; i++) {
    if (openBrackets.includes(str[i])) {
      stack.push(str[i]);
    } else if (closeBrackets.includes(str[i])) {
      if (stack.isEmpty()) {
        return false;
      } else {
        const lastOpenBracket = stack.pop();
        if (openBrackets.indexOf(lastOpenBracket) !== closeBrackets.indexOf(str[i])) {
          return false;
        }
      }
    }
  }
  return stack.isEmpty();
}

// const str1 = '{}(){}';
// console.log('String1: ', validateBrackets(str1));

// const str2 = '({}[[]]';
// console.log('String2: ', validateBrackets(str2));


module.exports = validateBrackets;
