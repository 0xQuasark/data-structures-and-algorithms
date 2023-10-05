'use strict';

const Queue = require('./queue');

// class Animal {
//   constructor(name, species) {
//     this.name = name;
//     this.species = species;
//   }
// }

class AnimalShelter {
  constructor() {
    this.queue = new Queue;
    this.current = null;
  }

  enqueue(animal) {
    // animal can be either a dog or a cat object.
    // It must have a species property that is either "cat" or "dog"
    // It must have a name property that is a string.

    if (animal.species !== 'cat' || animal.species !== 'dog') {
      throw new Error('Animal must be a cat or a dog');
    }
    if (typeof animal.name !== 'string') {
      throw new Error('Animal name must be a string');
    }

    this.queue.enqueue(animal);
  }

  dequeue(pref){
    // Arguments: pref
    //   pref can be either "dog" or "cat"
    // Return: either a dog or a cat, based on preference.
    //   If pref is not "dog" or "cat" then return null.
    if (pref !== 'cat' && pref !== 'dog') {
      return null;
    }

    if (this.queue.isEmpty()) {
      throw new Error('Queue is empty, silly');
    }

    this.current = this.queue.front;

    if (this.current.value.species === pref) {
      return this.queue.dequeue();
    }

    let haveFound = false;

    while ((!haveFound) && this.current.next) {
      if (this.current.next.value.species === pref) {
        haveFound = true;
      } else {
        this.current = this.current.next;
      }
    }

    if (haveFound) {
      this.queue.dequeue();
    }
  }

}



module.exports = AnimalShelter;
