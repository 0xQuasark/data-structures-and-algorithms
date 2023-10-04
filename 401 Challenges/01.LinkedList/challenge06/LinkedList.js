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

  toString() {
    let string = '';
    let current = this.head;
    while (current) {
      console.log(current.value);
      if (current.value) {
        string += `{ ${current.value} } -> `;
      }
      current = current.next;
    }
    string += `NULL`;
    console.log(string);
    return string;
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

survivalRope.append('paddle');
survivalRope.insert('chicken');
// console.log(survivalRope.includes('sunscreen'));
// console.log(survivalRope.toString());

traversal(survivalRope);

let linkedList = new LinkedList('first');
// linkedList.append('second');
linkedList.insert('first');
linkedList.insert('second');
linkedList.insert('third');
linkedList.toString();


module.exports = LinkedList;

