'use strict';

const WORD = 'hello';

let letters = new Map();

function warmup() {
  let string = WORD.toLowerCase();
  let count;
  let max = 0;
  let answer = null;

  for (let i=0; i< string.length; i++) {
    if (letters.has(string[i])) {
      count = letters.get(string[i]) + 1;
      letters.set(string[i], count);
      // console.log(string[i], count);
    } else {
      letters.set(string[i], 1);
    }

    for (let [key, value] of letters) {
      if (value > max) {
        max = value;
        answer = key;
      }
    }
  }
  console.log(answer, max);
}

warmup();
