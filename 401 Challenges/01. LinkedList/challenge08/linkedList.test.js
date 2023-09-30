'use strict';

const LinkedList = require('./LinkedList.js');

describe('Testing the Linked List class', () => {

  test('Can successfully instantiate an empty linked list', () => {
    let linkedList = new LinkedList();
    expect(linkedList.head).toEqual(null);
  });

  test('Can properly insert into the linked list', () => {
    let linkedList = new LinkedList();
    linkedList.insert('first');
    expect(linkedList.head.value).toBe('first');
  });

  test('The head property will properly point to the first node in the linked list', () => {
    let linkedList = new LinkedList();
    linkedList.append('first');
    linkedList.append('second');
    expect(linkedList.head.value).toBe('first');
  });

  test('Can properly insert multiple nodes into the linked list', () => {
    let linkedList = new LinkedList();
    linkedList.insert('first');
    linkedList.insert('second');
    linkedList.insert('third');
    expect(linkedList.head.value).toBe('third');
    expect(linkedList.head.next.value).toBe('second');
    expect(linkedList.head.next.next.value).toBe('first');
  });


  test('Will return true when finding a value within the linked list that exists', () => {
    let linkedList = new LinkedList();
    linkedList.insert('first');
    expect(linkedList.includes('first')).toBe(true);
  });

  test('Will return false when searching for a value in the linked list that does not exist', () => {
    let linkedList = new LinkedList();
    linkedList.insert('first');
    expect(linkedList.includes('second')).toBe(false);
  });

  test('Can properly return a collection of all the values that exist in the linked list', () => {
    let linkedList = new LinkedList();
    linkedList.insert('first');
    linkedList.insert('second');
    linkedList.insert('third');
    let allValues = linkedList.toString();
    expect(allValues).toBe('{ third } -> { second } -> { first } -> NULL');
  });

  test('Where k is greater than the length of the linked list', () => {
    let linkedList = new LinkedList();
    linkedList.insert('first');
    linkedList.insert('second');
    linkedList.insert('third');

    let kthElement = linkedList.kthFromEnd(6);
    expect(kthElement).toBe('Out of bounds');
  });

  test('Where k and the length of the list are the same', () => {
    let linkedList = new LinkedList();
    linkedList.insert('first');
    linkedList.insert('second');
    linkedList.insert('third');

    let kthElement = linkedList.kthFromEnd(3);
    expect(kthElement).toBe('Out of bounds');
  });

  test('Where k is not a positive integer', () => {
    let linkedList = new LinkedList();
    linkedList.insert('first');
    linkedList.insert('second');
    linkedList.insert('third');

    let kthElement = linkedList.kthFromEnd(-1);
    expect(kthElement).toBe('k cannot be negative');
  });

  test('Where the linked list is of a size 1', () => {
    let linkedList = new LinkedList();
    linkedList.insert('first');

    let kthElement = linkedList.kthFromEnd(0);
    expect(kthElement).toBe('first');
  });

  test('“Happy Path” where k is not at the end, but somewhere in the middle of the linked list', () => {
    let linkedList = new LinkedList();
    linkedList.insert('first');
    linkedList.insert('second');
    linkedList.insert('third');
    linkedList.insert('fourth');
    linkedList.insert('fifth');

    let kthElement = linkedList.kthFromEnd(2);
    expect(kthElement).toBe('third');
    expect().toBe();
  });

  test('It should return a new linked list with alternating values from the input lists', () => {
    let list1 = new LinkedList();
    let list2 = new LinkedList();
    let zippedList = new LinkedList();
    list1.append(1);
    list1.append(3);
    list1.append(5);
    list2.append(2);
    list2.append(4);
    list2.append(6);
    zippedList = zippedList.zipLists(list1, list2);
    expect(zippedList.toString()).toEqual('{ 1 } -> { 2 } -> { 3 } -> { 4 } -> { 5 } -> { 6 } -> NULL');
  });

  test('It should handle lists of unequal length', () => {
    let list1 = new LinkedList();
    let list2 = new LinkedList();
    let zippedList = new LinkedList();
    list1.append(1);
    list1.append(3);
    list2.append(2);
    zippedList = zippedList.zipLists(list1, list2);
    expect(zippedList.toString()).toEqual('{ 1 } -> { 2 } -> { 3 } -> NULL');
  });

  test('It should handle an empty list as input', () => {
    let list1 = new LinkedList();
    let list2 = new LinkedList();
    let zippedList = new LinkedList();
    zippedList = zippedList.zipLists(list1, list2);
    expect(zippedList.toString()).toEqual('NULL');
  });
});
