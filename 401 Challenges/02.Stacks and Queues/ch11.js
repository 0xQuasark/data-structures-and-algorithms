'use strict';

const Stack = require('./stack');

require('./stack');

class PseudoQueue {
  constructor() {
    this.stackOrder = new Stack;
    this.queueOrder = new Stack;
  }

  enqueue(value) {
    // adds something to the front of the queue
    // Inserts a value into the PseudoQueue, using a first-in, first-out approach.

    this.stackOrder.push(value);

  }

  dequeue(){
    // Extracts a value from the PseudoQueue, using a first-in, first-out approach.

    while (!this.stackOrder.isEmpty()) {
      this.queueOrder.push(this.stackOrder.pop());
    }

    return this.queueOrder.pop();
  }

}


module.exports = PseudoQueue;
// pseudo code
// 10. stackOrder.push(value) // add value to the top of the stackOrder
// 15. while (!null)

// // dequeue
// 20. queueOrder.push(stackOrder.pop()) // takes the top of stackOrder, and moves it to the bottom of stack2.
// 30. queueOrder.pop // returns the

// Algorithm
// 1. stackOrder takes in values in the correct order
// 2. pops everything from stackOrder into queueOrder
// 2a. stops when stackOrder has a null value
// 3. queueOrder pops in desired order now (until null)