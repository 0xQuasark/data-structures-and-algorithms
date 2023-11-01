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
  constructor(value) {
    this.value = value;
    this.children = []; // an array to hold child nodes
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


}

class KaryTree {
  constructor(value) {
    this.value = value;
    this.root = null;
  }
  add(value) {
    let newNode = new KaryNode(this.k, value);
    if (!this.root) {
      this.root = newNode;
    } else {
      let current = this.root;
      while (current) {
        for (let i = 0; i < current.children.length; i++) {
          if (!current.children[i]) {
            current.children[i] = newNode;
            return;
          }
        }
        current = current.children[0];
      }
    }
  }

  createFizzBuzz(tree) {
    function fizzBuzz(value) {
      if (value % 3 === 0 && value % 5 === 0) return 'FizzBuzz';
      if (value % 3 === 0) return 'Fizz';
      if (value % 5 === 0) return 'Buzz';
      return String(value);
    }
  
    function traverse(currentNode, newCurrentNode) {
      if (!currentNode) return;
    
      // Perform fizzBuzz operation on the current node value
      newCurrentNode.value = fizzBuzz(currentNode.value);
    
      // Loop through each child
      for (let i = 0; i < currentNode.children.length; i++) {
        const childNode = currentNode.children[i];
        const newChildNode = new KaryNode(fizzBuzz(childNode.value)); // create a new node for newTree
        newCurrentNode.children.push(newChildNode); // add it to the children of the newCurrentNode
        traverse(childNode, newChildNode); // Recursively perform traverse traversal
      }
    }
  
    let newTree = new KaryTree(tree.k);
    newTree.root = new KaryNode(fizzBuzz(tree.root.value)); // create a new root for newTree with the fizzBuzz value
    traverse(tree.root, newTree.root); // Start preOrder traversal from root
    
    return newTree;
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


module.exports = { BinaryTree, BinarySearchTree, Node, KaryTree, KaryNode };

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


const myTree = new KaryTree(3);
myTree.root = new KaryNode(15);
myTree.root.children.push(new KaryNode(3));
myTree.root.children.push(new KaryNode(5));
myTree.root.children.push(new KaryNode(16));

// Add more nodes to the first child
myTree.root.children[0].children.push(new KaryNode(7));
myTree.root.children[0].children.push(new KaryNode(8));
myTree.root.children[0].children.push(new KaryNode(9));

// Add more nodes to the second child
myTree.root.children[1].children.push(new KaryNode(10));
myTree.root.children[1].children.push(new KaryNode(11));
myTree.root.children[1].children.push(new KaryNode(12));

// Add more nodes to the third child
myTree.root.children[2].children.push(new KaryNode(13));
myTree.root.children[2].children.push(new KaryNode(14));
myTree.root.children[2].children.push(new KaryNode(15));

const newTree = myTree.createFizzBuzz(myTree);
// console.log(JSON.stringify(newTree, null, 2));