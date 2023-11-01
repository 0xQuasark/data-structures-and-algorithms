const HashTable = require('./index.js');
const { BinaryTree, Node } = require('../03.Trees/Trees.js');
const treeIntersection = require('./challenge32.js');
const leftJoinHashMap = require('./challenge33.js');

describe('Challenge 33: Left Join of 2 Hashmaps', () => {
  test('Find common values in 2 binary trees', () => {
    let leftHash = new HashTable(1024);
    let rightHash = new HashTable(1024);

    leftHash.set('diligent', 'employed');
    leftHash.set('fond', 'enamored');
    leftHash.set('guide', 'usher');
    leftHash.set('outfit', 'garb');
    leftHash.set('wrath', 'anger');
    

    rightHash.set('diligent', 'idle');
    rightHash.set('fond', 'averse');
    rightHash.set('guide', 'follow');
    rightHash.set('flow', 'jam');
    rightHash.set('wrath', 'delight');

    const result = leftJoinHashMap(leftHash, rightHash);
    expect(result).toEqual([      
      [ 'fond', 'enamored', 'averse' ],
      [ 'guide', 'usher', 'follow' ],
      [ 'wrath', 'anger', 'delight' ],
      [ 'diligent', 'employed', 'idle' ],
      [ 'outfit', 'garb', null ]
    ]);
  });

})


describe('Challenge 32: Tree Intersection', () => {
  test('Find common values in 2 binary trees', () => {
    let hashTable = new HashTable(1024);
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

    const result = treeIntersection(tree1, tree2);
    expect(result).toEqual([100, 600, 160, 200, 350, 125, 175, 500]);
  });

})

describe('Challenge 31: Repeated Words', () => {
  let hashTable;

  beforeEach(() => {
    hashTable = new HashTable(1024);
  });

  test('Returns the first repeated word in a string', () => {
    const str = 'apple banana apple grape';
    expect(hashTable.repeatedWord(str)).toEqual('apple');
  });

  test('Returns null if no word is repeated', () => {
    const str = 'apple banana grape';
    expect(hashTable.repeatedWord(str)).toBeNull();
  });

})


describe('Initial Hashmap Challenge 30', () => {
  let hashTable;

  beforeEach(() => {
    hashTable = new HashTable(1024);
  });

  test('Setting a key/value to your hashtable results in the value being in the data structure', () => {
    hashTable.set('key1', 'value1');
    expect(hashTable.get('key1')).toEqual(['key1:value1']);
  });

  test('Retrieving based on a key returns the value stored', () => { 
    hashTable.set('key2', 'value2');
    expect(hashTable.get('key2')).toEqual(['key2:value2']);
  });

  test('Successfully returns null for a key that does not exist in the hashtable', () => { 
    expect(hashTable.get('key3')).toBeUndefined();
  });

  test('Successfully returns a list of all unique keys that exist in the hashtable', () => { 
    hashTable.set('key1', 'value1');
    hashTable.set('key2', 'value2');
    hashTable.set('key4', 'value4');
    hashTable.set('key5', 'value5');
    expect(hashTable.keys().sort()).toEqual(['key1', 'key2', 'key4', 'key5'].sort());
  });

  test('Successfully handle a collision within the hashtable', () => { 
    hashTable.set('key6', 'value6');
    hashTable.set('key6', 'value7');
    expect(hashTable.get('key6')).toEqual(['key6:value6', 'key6:value7']);
  });

  test('Successfully retrieve a value from a bucket within the hashtable that has a collision', () => { 
    hashTable.set('key6', 'value6');
    hashTable.set('key6', 'value7');
    expect(hashTable.get('key6')).toEqual(['key6:value6', 'key6:value7']);
  });

  test('Successfully hash a key to an in-range value', () => { 
    const hash = hashTable.hash('key7');
    expect(hash).toBeGreaterThanOrEqual(0);
    expect(hash).toBeLessThan(1024);
  });
});