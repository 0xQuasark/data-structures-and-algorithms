const HashTable = require('./index.js');

describe('Hash Table class', () => {
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