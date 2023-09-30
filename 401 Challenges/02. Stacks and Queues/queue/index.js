'use strict';
// Queue

const Node = require('../linked-list/node');

class Queue {

  constructor() {
    this.front = null;
    this.rear = null;
  }

  enqueue(value) {
    const newNode = new Node(value);

    if(this.front === null) {
      // The queue is empty
      this.front = newNode;
      this.rear = newNode;
    } else {
      // The queue is not empty
      this.rear.next = newNode;
      this.rear = newNode;
    }
  }
  dequeue() {
    if (!this.peek()) { throw new Error('Queue is empty silly'); }

    let result = this.front.value;
    this.front = this.front.next;
    return result;
  }

  peek() {
    if(this.front === null) {
      throw new Error('Queue is empty silly');
    }
    return this.front.value;
  }
  
  isEmpty() {
    return this.front === null;
  }



}

module.exports = Queue;
