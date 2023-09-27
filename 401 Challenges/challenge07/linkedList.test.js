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

  
});
