const insertionSort = require('./insertionSort.js');

describe('', () => {
  it('HAPPY PATH: should return a sorted array', () => {
    let newArr = [8,4,23,42,16,15];
    let result = insertionSort(newArr);
    expect(result).toEqual([4,8,15,16,23,42]);
  });
  it('HAPPY PATH: should return a sorted array', () => {
    let newArr = [5,12,7,5,5,7];
    let result = insertionSort(newArr);
    expect(result).toEqual([5,5,5,7,7,12]);
  });
  it('HAPPY PATH: should return a sorted array', () => {
    let newArr = [2,3,5,7,13,11];
    let result = insertionSort(newArr);
    expect(result).toEqual([2,3,5,7,11,13]);
  });
  it('EDGE CASE: should sort an empty array', () => {
    const input = [];
    const expected = [];
    const result = insertionSort(input);
    expect(result).toEqual(expected);
  });
  it('EDGE CASE: should sort an array with null values', () => {
    const input = [4, null, 2, null, 1, 3];
    const expected = [null, null, 1, 2, 3, 4];
    const result = insertionSort(input);
    expect(result).toEqual(expected);
  });
  it('EDGE CASE: should sort an array with undefined values', () => {
    const input = [4, undefined, 2, undefined, 1, 3];
    const expected = [undefined, undefined, 1, 2, 3, 4];
    const result = insertionSort(input);
    expect(result).toEqual(expected);
  });
});
