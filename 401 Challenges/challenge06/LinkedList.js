'use strict';

const { link } = require("fs");

// storage container (knot)
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

// the whole rope!
class LinkedList {
  constructor() {
    this.head = null;
  }

  // adding a value to the end of the linked list.
  append(value) {
    let newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while(current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  // insert at head of linked list
  insert(value) {
    let newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
  }

  includes(value){
    let foundIt = false;
    let current = this.head;
    while (current) {
      if (current.value === value) {
        foundIt = true;
        break;
      }
      current = current.next;
    }
    return foundIt;
  }

  toString(message) {
    if (!message) { message =''}
    let string = message;

    let current = this.head;
    while (current) {
      if (current.value) {
        string += `{ ${current.value} } -> `;
      }
      current = current.next;
    }
    string += `NULL`;
    console.log(string);
    return string;
  }

  insertBefore(findValue, newValue) {
    // insert before
    // arguments: value, new value
    // adds a new node with the given new value immediately before the first node that has the value specified

    let foundIt = false;
    let current = this.head;

    if (!current) {
      console.log('seems like an empty list');
    } else if (current.value === findValue) {
      this.insert(newValue)
    } else {
      while (current.next) {
        if (current.next.value === findValue) {
          let newNode = new Node(newValue);
          newNode.next = current.next;
          current.next = newNode;

          foundIt = true;
          break
        } else {
          current = current.next;
        }
      }

      if (!foundIt) {
        console.log(`${findValue} is not in this Linked List (insertBefore)`)
      }
    }

  }

  insertAfter(findValue, newValue) {
    let foundIt = false;
    let current = this.head;

    if (!current) {
      console.log('seems like an empty list');
    } else if (current.value === findValue) {
      this.append(newValue)
    } else {
      while (current) {
        if (current.value === findValue) {
          foundIt = true;
          
          let newNode = new Node(newValue)
          newNode.next = current.next;
          current.next = newNode;

          break
        }
        current = current.next;
      }
    }

    if (!foundIt) {
      console.log(`${findValue} is not in this Linked List (insertAfter)`)
    }
  }
}

let linkedList = new LinkedList();
linkedList.insert('first');
linkedList.append('second');
linkedList.append('third');
linkedList.toString('BEFORE: ');


// linkedList.insertBefore('first', 'numberOne');
linkedList.insertAfter('third', 'Tres');
linkedList.toString('AFTER: ');

module.exports = LinkedList;

