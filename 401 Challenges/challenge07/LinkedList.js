'use strict';

// storage container (knot)
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

// the whole rope!
class LinkedList {
  constructor() {
    this.head = null;
  }

  // adding a value to the end of the linked list.
  append(value) {
    let newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while(current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  // insert at head of linked list
  insert(value) {
    let newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
  }

  includes(value){
    let foundIt = false;
    let current = this.head;
    while (current) {
      if (current.value === value) {
        foundIt = true;
        break;
      }
      current = current.next;
    }
    return foundIt;
  }

  toString(shouldOutput) {
    let string = '';
    let current = this.head;
    while (current) {
      // if (shouldOutput) {console.log(current.value);}
      if (current.value) {
        string += `{ ${current.value} } -> `;
      }
      current = current.next;
    }
    string += `NULL`;
    if (shouldOutput) {console.log(string);}
    return string;
  }

  kthFromEnd(k){
    let current = this.head;
    let listArray = [];

    if (k < 0) {return 'k cannot be negative';}

    while (current) {
      if (current.value) {
        listArray.push(current.value);
      }
      current = current.next;
    }
    // console.log(`length: ${listArray.length}. k: ${k}. answer: ${listArray[listArray.length - (k+1)]}`);

    if (k > (listArray.length - 1) ) {
      return 'Out of bounds';
    }

    return listArray[listArray.length - (k+1)];
  }

}

let survivalRope = new LinkedList();
let sandwich = new Node('sandwich');
survivalRope.head = sandwich;


let firstAid = new Node('first aid');
survivalRope.head.next = firstAid;

let blowGun = new Node('blow gun');
let sunscreen = new Node('sunscreen');

firstAid.next = blowGun;
blowGun.next = sunscreen;

// console.log(JSON.stringify(survivalRope));

// start at the head and move until now more nodes.
// Big 0 -> time: O(n), Space: O(1)
function traversal (list) {

  let current = list.head; // this must of Type Node OR Null.

  while (current) {
    // console.log('CURRENT NODE VALUE:', current.value);
    current = current.next;
  }
}

// survivalRope.append('paddle');
// survivalRope.insert('chicken');
// console.log(survivalRope.includes('sunscreen'));
// console.log(survivalRope.toString());

// traversal(survivalRope);

// let linkedList = new LinkedList('first');
// // linkedList.append('second');
// linkedList.insert('2');
// linkedList.insert('8');
// linkedList.insert('3');
// linkedList.insert('1');

// linkedList.kthFromEnd(3);

// linkedList.toString();


module.exports = LinkedList;

