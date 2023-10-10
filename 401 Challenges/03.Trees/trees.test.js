const { BinaryTree, BinarySearchTree, Node } = require('./Trees'); // Adjust the path according to your file structure

describe('Testing the BinaryTree class', () => {

  test('Can successfully instantiate an empty tree', () => {
    let tree = new BinaryTree();
    expect(tree.root).toEqual(null);
  });

  test('Can successfully instantiate a tree with a single root node', () => {
    let tree = new BinarySearchTree();
    tree.add('root');
    expect(tree.root.value).toBe('root');
  });

  test('For a Binary Search BinaryTree, can successfully add a left child and right child properly to a node', () => {
    let tree = new BinarySearchTree();
    tree.add(10);
    tree.add(5);
    tree.add(15);
    expect(tree.root.left.value).toBe(5);
    expect(tree.root.right.value).toBe(15);
  });

  test('Can successfully return a collection from a pre-order traversal', () => {
    let tree = new BinarySearchTree();
    tree.add(10);
    tree.add(5);
    tree.add(15);
    expect(tree.preOrder()).toEqual([10, 5, 15]);
  });

  test('Can successfully return a collection from an in-order traversal', () => {
    let tree = new BinarySearchTree();
    tree.add(10);
    tree.add(5);
    tree.add(15);
    expect(tree.inOrder()).toEqual([5, 10, 15]);
  });

  test('Can successfully return a collection from a post-order traversal', () => {
    let tree = new BinarySearchTree();
    tree.add(10);
    tree.add(5);
    tree.add(15);
    expect(tree.postOrder()).toEqual([5, 15, 10]);
  });

  test('Returns true for the contains method, given an existing node value', () => {
    let tree = new BinarySearchTree();
    tree.add('root');
    expect(tree.contains('root')).toBe(true);
  });

  test('Returns false for the contains method, given a non-existing node value', () => {
    let tree = new BinarySearchTree();
    tree.add('root');
    expect(tree.contains('non-existing')).toBe(false);
  });

  test('finds max in a non-empty tree', () => {
    let tree = new BinarySearchTree();
    tree.add(10);
    tree.add(20);
    tree.add(30);
    expect(tree.findMax()).toBe(30);
  });

  test('returns null for an empty tree', () => {
    let tree = new BinarySearchTree();
    expect(tree.findMax()).toBeNull();
  });

  test('finds max when all values are the same', () => {
    let tree = new BinarySearchTree();
    tree.add(10);
    tree.add(10);
    tree.add(10);
    expect(tree.findMax()).toBe(10);
  });

});

describe('Testing Challenge 17', () => {

  test('bfs() should return breadth-first order of nodes', () => {
    const expectedOrder = [2, 7, 5, 2, 6, 9, 5, 11, 4];
    let tree = new BinaryTree();

    let node1 = new Node(2);
    let node2 = new Node(7);
    let node3 = new Node(5);
    let node4 = new Node(2);
    let node5 = new Node(6);
    let node6 = new Node(5);
    let node7 = new Node(11);
    let node8 = new Node(9);
    let node9 = new Node(4);

    tree.root = node1;

    node1.left = node2;
    node1.right = node3;
    node2.left = node4;
    node2.right = node5;
    node5.left = node6;
    node5.right = node7;
    node3.right = node8;
    node8.left = node9;
    
    expect(tree.bfs()).toEqual(expectedOrder);
  });
  
  test('bfs() should return an empty array for an empty tree', () => {
    const emptyTree = new BinaryTree();
    expect(emptyTree.bfs()).toEqual(null);
  });

  test('bfs() should return correct order for a skewed tree', () => {
    const skewedTree = new BinaryTree();
    skewedTree.root = new Node(1);
    skewedTree.root.right = new Node(2);
    skewedTree.root.right.right = new Node(3);
    expect(skewedTree.bfs()).toEqual([1, 2, 3]);
  });
});