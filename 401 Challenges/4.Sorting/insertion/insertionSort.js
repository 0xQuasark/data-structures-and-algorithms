function insert(sorted, value) {
  let i = 0;
  while (value > sorted[i]) {
    i++;
  }
  while (i < sorted.length) {
    let temp = sorted[i];
    sorted[i] = value;
    value = temp;
    i++;
  }
  sorted.push(value);
}
function insertionSort(input){

  let sorted = [];
  sorted[0] = input[0];

  for (let i = 1; i < input.length; i++) {
    insert(sorted, input[i]);
  }

  return sorted;
}

// let newArr = [8,4,23,42,16,15];
// let newArr = [5,12,7,5,5,7];
let newArr = [2,3,5,7,13,11];
console.log(insertionSort(newArr));


module.exports = insertionSort;
