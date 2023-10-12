'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// STRETCH GOAL
class KaryNode {
  constructor(k, value) {
    this.value = value;
    this.children = new Array(k);
  }
}
class KaryTree {
  constructor(k) {
    this.k = k;
    this.root = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  preOrder() {
    let order = [];

    const traverse = (current) => {
      order.push(current.value);

      if (current.left) {
        traverse(current.left);
      }
      if (current.right) {
        traverse(current.right);
      }
    }
    traverse(this.root);

    return order;
  }

  inOrder() {
    let order = [];


    const traverse = (current) => {
      if (current.left) {
        traverse(current.left);
      }

      order.push(current.value);

      if (current.right) {
        traverse(current.right);
      }
    }
    traverse(this.root);

    return order;
  }

  postOrder() {
    let order = [];

    const traverse = (current) => {      
      if (current.left) {
        traverse(current.left);
      }
      if (current.right) {
        traverse(current.right);
      }
      
      order.push(current.value);
    }
    traverse(this.root);

    return order;
  }

  // breadth first traversal
  bfs() {
    let root = this.root;
    if (!root) {
      return null;
    }
    
    let queue = [];
    let order = [];
    queue.push(root);

    while(queue.length > 0) {
      let current = queue.shift();
      order.push(current.value);

      if (current.left) {
        queue.push(current.left);
      }
      if (current.right) {
        queue.push(current.right);
      }
    }

    return order;
  }

  findMax() {
    let maxNum = -Infinity;

    if (this.root === null) {
      return null;
    }

    const traverse = (current) => {
      if (current.left) {
        traverse(current.left);
      }

      current.value > maxNum ? maxNum = current.value : maxNum;
      // order.push(current.value);

      if (current.right) {
        traverse(current.right);
      }
    }
    traverse(this.root);

    return maxNum;
  }

  fizzBuzzTree() {
    
  }


}

// Binary Search Tree is everything a Binary Tree plus other things.
class BinarySearchTree extends BinaryTree {
  constructor() {
    super(); // activate Binary Tree Powers
  }

  // adds a value to our BST
  add(value) {
    // if the tree is empty, add the value to the root
    if (!this.root) {
      this.root = new Node(value);
      return;
    }

    // if the tree is not empty, add the value to the correct spot
    const traverse = (current) => {
      if (value < current.value) {
        if (!current.left) {
          current.left = new Node(value);
          return;
        }
        traverse(current.left);
      } else if (value > current.value) {
        if (!current.right) {
          current.right = new Node(value);
          return;
        }
        traverse(current.right);
      }
    }
    traverse(this.root);
  }

  // searches for a value in our BST, and returns a boolean
  contains(value) {
    // if the tree is empty, return false
    if (!this.root) {
      return false;
    }

    // if the tree is not empty, search for the value
    const traverse = (current) => {
      if (value === current.value) {
        return true;
      }

      if (value < current.value) {
        if (!current.left) {
          return false;
        }
        traverse(current.left);
      } else if (value > current.value) {
        if (!current.right) {
          return false;
        }
        traverse(current.right);
      }
    }
    return traverse(this.root);
  }
}


module.exports = { BinaryTree, BinarySearchTree, Node };

let tree = new BinaryTree();

let node1 = new Node(3);
let node2 = new Node(20);
let node3 = new Node(5);
let node4 = new Node(4);
let node5 = new Node(15);
let node6 = new Node(2);
let node7 = new Node(1);
let node8 = new Node(6);
let node9 = new Node(8);
let node10 = new Node(21);

// [2,7,5,2,6,9,5,11,4]


tree.root = node1;

node1.left = node2; // 20
node1.right = node3;  // 5
node2.left = node4 //'4'
node2.right = node5 // '15'
node4.left = node6 // '2'
node5.left = node7 // 1
node3.left = node8; // 6
node3.right = node9; // 8
node9.right = node10; // 21

// console.log(tree.root);

// let preOrder = tree.preOrder();
// let breadthFirst = tree.bfs();
// console.log(breadthFirst);
// console.log(preOrder);
// console.log(tree.findMax());



