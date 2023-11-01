'use strict';

const LinkedList = require('../01.LinkedList/LinkedList.js');

class HashTable {
  constructor(size) {
    this.size = size;
    this.buckets = new Array(size);
  }

  hash(key) {
    let string = JSON.stringify(key);
    let sum = 0;
    for (let char of string) {
      sum += char.charCodeAt(0);
    }
    let largeNum = sum * 599;
    let hash = largeNum % this.size;
    return hash;
  }

  set(key, value) {
    let hash = this.hash(key);
    let payload = `${key}:${value}`;
    let values = this.buckets[hash];
    if (!values) {
      let list = new LinkedList();
      list.add(payload)
      this.buckets[hash] = list;
    } else {
      values.add(payload);
    }
  }

  get(key) { // given the size of the HashTable, how much of this code runs.
    let hash = this.hash(key); // 0(1)
    let list = this.buckets[hash]; // 0(1)
    if (!list) {
      // console.log('NO VALUES PRESENT FOR GIVEN KEY');
      return;
    } else {
      // console.log('here', list.values());
      return list.values(); // 0(m) runs as many times as there are values in the list.
    }
  }

  has(key) {
    let hash = this.hash(key);
    let list = this.buckets[hash];
    if (!list) {
      return false;
    } else {
      return true;
    }
  }

  keys() {
    let arr = [];
    for (let i = 0; i < this.size; i++) {
      if (this.buckets[i]) {
        arr.push(this.buckets[i].head.value.split(':')[0]);
      }
    }
    return arr;
  }


  repeatedWord(string) {
    const hashTable = new HashTable(1024);
    const words = string.split(' ');
  
    for (let word of words) {
      if (hashTable.has(word)) {
        return word;
      } else {
        // just adding a placeholder value so that the next time that this is called it returns the word
        hashTable.set(word, 1);
      }
    }
    return null;
  }

}

const table = new HashTable(1024);

// let position = table.hash('medicine');
// table.set('medicine', 'pills');
// table.set('medicine', 'bandages');
// table.set('key1', 'value1');
// table.get('key1')
// console.log(JSON.stringify(table));
// let medicineStuff = table.get('medicine');
// console.log(medicineStuff);

// console.log(table.keys());

module.exports = HashTable;
