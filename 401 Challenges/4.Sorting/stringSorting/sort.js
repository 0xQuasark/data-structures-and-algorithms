'use strict';

const { Movies } = require('./movies.js');

function compareYear(a, b) {
  if (a.year !== b.year) {
    // Ascending
    // return (a.year - b.year);
    // Descending
    return (b.year - a.year);
  } else {
    // If years are the same, sort alphabetically
    let strippedA = a.title.replace(/^The /, '');
    let strippedB = b.title.replace(/^The /, '');
    return strippedB.localeCompare(strippedA);
  }
}

function compareTitle(a, b) {
  let strippedA = a.title.replace(/^The /, '');
  let strippedB = b.title.replace(/^The /, '');
  // Alphabetical
  return strippedA.localeCompare(strippedB);
  // Reversed
  // return strippedB.localeCompare(strippedA);
}

function sortYear(movies)  {
  return movies.sort(compareYear);
}

function sortTitle(movies) {
  return movies.sort(compareTitle);
}

let year = sortYear(Movies);
console.log(year.map((m) => m.title))
// console.log(year)

// let title = sortTitle(Movies);
// console.log(title.map((m) => m.title))

module.exports = {
  sortYear,
  sortTitle
};