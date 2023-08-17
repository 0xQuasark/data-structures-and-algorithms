'use strict';
let answer = null;

function upper(str) {
  return str.toUpperCase();
}

function lower(str) {
  return str.toLowerCase();
}

const updateAnimal = (arr, callback) => {
  // Solution code here...
  return arr.map(callback);
};
// const arr = ['BeAr', 'lIon'];
// answer = updateAnimal(arr, lower);


const sortNames = (arr) => {
  // Solution code here...
  return arr.sort((arr));
};

answer = sortNames(['able', 'Bob']);


console.log(answer);