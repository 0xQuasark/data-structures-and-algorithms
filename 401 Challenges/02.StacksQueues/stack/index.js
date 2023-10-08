'use strict';
// Stack

const Node = require('../linked-list/node');

class Stack {
  constructor() {
    this.top = null;
  }

  isEmpty() {
    return this.top === null;
  }

  push(value) {
    const newNode = new Node(value);
    newNode.next = this.top;
    this.top = newNode;
  }

  pop() {
    if(this.isEmpty()) {
      throw new Error('Stack is empty, silly');
    }

    let answer = this.top.value;
    this.top = this.top.next;
    return answer;
  }

  peek() {
    if(this.isEmpty()) {
      throw new Error('Stack is empty, silly');
    }
    return this.top.value;
  }
}

module.exports = Stack;
