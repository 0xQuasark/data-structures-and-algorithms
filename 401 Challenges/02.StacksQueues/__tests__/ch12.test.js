'use strict';

const AnimalShelter = require('../ch12');

describe('AnimalShelter', () => {
  it('can be created', () => {
    const shelter = new AnimalShelter();
    expect(shelter).toBeTruthy();
  });

  it('should be empty at the start', () => {
    const shelter = new AnimalShelter();
    expect(shelter.queue.isEmpty()).toBeTruthy();
  });

  it('should throw an error when enqueuing an animal that is not a cat or dog', () => {
    const shelter = new AnimalShelter();
    expect(() => shelter.enqueue({ species: 'bird', name: 'Tweety' })).toThrow('Animal must be a cat or a dog');
  });

  it('should throw an error when enqueuing an animal with a name that is not a string', () => {
    const shelter = new AnimalShelter();
    expect(() => shelter.enqueue({ species: 'cat', name: 123 })).toThrow('Animal must be a cat or a dog');
  });

  it('should return null when dequeuing with a preference that is not a cat or dog', () => {
    const shelter = new AnimalShelter();
    expect(shelter.dequeue('bird')).toBeNull();
  });

  it('should throw an error when dequeuing from an empty shelter', () => {
    const shelter = new AnimalShelter();
    expect(() => shelter.dequeue('cat')).toThrow('Queue is empty, silly');
  });
});
