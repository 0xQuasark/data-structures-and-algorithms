'use script';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {

  constructor() {
    this.top = null;
  }

  isEmpty() {
    return this.top === null;
  }

  peek () {
    // if (!this.isEmpty())
    console.log(this.top);
    return this.top.value;
  }

  push(value) {
    const newNode = new Node(value);
    newNode.next = this.top;
    this.top = newNode;
  }

  pop() {
    let result = this.top.value;
    this.top = this.top.next;
    return result;
  }

}


module.exports = Stack;

