# Binary Search

Binary search in a sorted 1D array

## Whiteboard Process
- Notability ([direct link to image](https://notability.com/n/2WbSDPi043zPfqQlvydmQE))

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->
- I wrote out the question
- I worked through the examples provided
- I then worked through some of my own examples (changing the key)
- One example to where the key was lower than all elements of the array, and then another where the key is the very first element
- I color coded some pseudo functions
- Then I wrote the pseudo code below

## Solution
- we call a recursive function with a sorted array and a key
- the default values start off with L = 0, R = arr.length (default arguments)
- mid = (Math.floor((R - L)/2) + L)     //rounds down the halfway mark between L and R, and offsets from L
- if arr[mid] === key; return mid
- if arr[mid] > key then search to the left (L remains unchanged, R becomes mid-1)
- if arr[mid] < key, R becomes mid+1, R remains unchanged
- if L is ever <= R then we've not found anything (return -1)
- until something returns, we'll just call the same function again with the array, key, and updated L and R

## Extra
I'm trying to write the actual code. It's not working and I need to submit, so I'll leave it here for future:

```js
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

```



