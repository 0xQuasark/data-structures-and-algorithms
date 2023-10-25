const { mergeSort } = require('./mergeSort'); // assuming your functions are exported from mergeSort.js

describe('mergeSort', () => {
  test('sorts an array of numbers', () => {
    expect(mergeSort([8,4,23,42,16,15])).toEqual([4,8,15,16,23,42]);
  });

  test('sorts an array with a single element', () => {
    expect(mergeSort([5])).toEqual([5]);
  });

  test('sorts an array with two elements', () => {
    expect(mergeSort([10, 5])).toEqual([5, 10]);
  });

  test('sorts an array with duplicate elements', () => {
    expect(mergeSort([5, 5, 5, 5, 5])).toEqual([5, 5, 5, 5, 5]);
  });

  test('returns an empty array when given an empty array', () => {
    expect(mergeSort([])).toEqual([]);
  });
});