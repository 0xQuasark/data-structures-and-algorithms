function matrixChecker(matrix) {
  let results = [];


  // traverse the rows
  for (let row = 0; row < matrix.length; row++) {
    let accumulator = 0;

    // traverse the columns
    for (let i = 0; i < matrix[row].length; i++) {
      accumulator += matrix[row][i];
    }
    results.push(accumulator);
  }
  return results;
}

let arr = 
[
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]

// console.log(matrixChecker(arr));

function fibNum(n) {
  let sum = 0;
  let lastNum = 0;
  for (let i =0; i < n+1; i++) {
    // console.log(i);
    lastNum = i;
    sum += i + lastNum;
  }
  return sum;
}

let number = 15;
console.log('sum: ', fibNum(number));
