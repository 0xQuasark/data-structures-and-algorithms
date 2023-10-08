'use strict';

let count = 0;

function myBinarySearch(arr, key, L = 0, R = (sortedArray.length)-1) {
  let mid = (Math.floor((R - L)/2) + L);
  count++;
  console.log(`Loop #${count}. `, L, mid, R);

  if (arr[mid] === key) {
    console.log('Success!');
    return mid;
  } else if ( L <= R) {
    console.log('Not found');
    return -1;
  } else {
    if (arr[mid] > key) {
      console.log('Looking to the Left');
      R = mid -1;
    } else { //i.e. if (arr[mid] < key)
      L = mid +1;
    }
    myBinarySearch(arr, key, L, R);
  }
  console.log(L, mid, R);

}


let sortedArray = [4, 8, 15, 16, 23, 42];
let key = 16;


let results = myBinarySearch(sortedArray, key);

console.log(results);
