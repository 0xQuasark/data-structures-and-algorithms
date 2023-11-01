const { BinaryTree, Node } = require('../03.Trees/Trees.js');
const HashTable = require('../5.Hashmaps/index.js');

let tree1 = new BinaryTree();
let tree2 = new BinaryTree();

{ // Indenting to collapse this code in VSCode {
// Tree 1
tree1.root = new Node(150);
tree1.root.left = new Node(100);
tree1.root.right = new Node(250);
tree1.root.left.left = new Node(75);
tree1.root.left.right = new Node(160);
tree1.root.right.left = new Node(200);
tree1.root.right.right = new Node(350);
tree1.root.left.left.right = new Node(125);
tree1.root.left.right.left = new Node(175);
tree1.root.right.left.right = new Node(300);
tree1.root.right.right.right = new Node(500);

// Tree 2
tree2.root = new Node(42);
tree2.root.left = new Node(100);
tree2.root.right = new Node(600);
tree2.root.left.left = new Node(15);
tree2.root.left.right = new Node(160);
tree2.root.right.left = new Node(200);
tree2.root.right.right = new Node(350);
tree2.root.left.left.right = new Node(125);
tree2.root.left.right.left = new Node(175);
tree2.root.right.left.left = new Node(4);
tree2.root.right.right.right = new Node(500);
}

function treeIntersection(tree1, tree2) {
  let arr1 = tree1.bfs();
  let arr2 = tree2.bfs();
  let answer = [];
  let hash = new HashTable(1024);

  for (let entry of arr1) {
    hash.set(entry, 1);
  }

  for (let entry of arr2) {
    if (hash.has(entry)) {
      answer.push(entry);
    }
  }
  // console.log(arr1);
  // console.log(arr2);

  return answer;
}


// const result = treeIntersection(tree1, tree2);
// console.log(result);

module.exports = treeIntersection;