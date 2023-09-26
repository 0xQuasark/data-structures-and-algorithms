'use strict';

const { link } = require('fs');
const LinkedList = require('./LinkedList.js');

describe('Testing the Linked List class', () => {

  test('Can successfully add a node to the end of the linked list', () => {
    let linkedList = new LinkedList();
    linkedList.insert('first')
    linkedList.append('second');

    let result = linkedList.toString();
    expect(result).toBe('{ first } -> { second } -> NULL');
  });

  test('Can successfully add multiple nodes to the end of a linked list', () => {
    let linkedList = new LinkedList();
    linkedList.insert('first')
    linkedList.append('second');
    linkedList.append('third');
    linkedList.append('fourth');

    let result = linkedList.toString();
    expect(result).toBe('{ first } -> { second } -> { third } -> { fourth } -> NULL');
  });

  test('Can successfully insert a node before a node located in the middle of a linked list', () => {
    let linkedList = new LinkedList();
    linkedList.insert('first');
    linkedList.append('second');
    linkedList.append('third');
    linkedList.insertBefore('second', 'Dos');

    let result = linkedList.toString();
    expect(result).toBe('{ first } -> { Dos } -> { second } -> { third } -> NULL');
  });

  test('Can successfully insert a node before the first node of a linked list', () => {
    let linkedList = new LinkedList();
    linkedList.insert('first');
    linkedList.append('second');
    linkedList.insert('uno');

    let result = linkedList.toString();
    expect(result).toBe('{ uno } -> { first } -> { second } -> NULL');
  });

  test('Can successfully insert after a node in the middle of the linked list', () => {
    let linkedList = new LinkedList();
    linkedList.insert('first');
    linkedList.append('second');
    linkedList.append('third');
    linkedList.insertAfter('second', 'Dos');

    let result = linkedList.toString();
    expect(result).toBe('{ first } -> { second } -> { Dos } -> { third } -> NULL');
  });

  test('Can successfully insert a node after the last node of the linked list', () => {
    let linkedList = new LinkedList();
    linkedList.insert('first');
    linkedList.append('second');
    linkedList.append('third');
    linkedList.insertAfter('third', 'Tres');

    let result = linkedList.toString();
    expect(result).toBe('{ first } -> { second } -> { third } -> { Tres } -> NULL');
  });

});
