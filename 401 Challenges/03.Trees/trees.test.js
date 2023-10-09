const { BinaryTree, BinarySearchTree } = require('./Trees'); // Adjust the path according to your file structure

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