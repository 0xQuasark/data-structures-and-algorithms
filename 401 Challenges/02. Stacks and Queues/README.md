# Challenges for Stacks and Queues


## Third
Create a class called AnimalShelter which holds only dogs and cats.
The shelter operates using a first-in, first-out approach.
Implement the following methods:
- enqueue
  - Arguments: `animal`
    - `animal` can be either a dog or a cat object.
    - It must have a `species` property that is either `cat` or `dog`
    - It must have a `name` property that is a string.
- dequeue
  - Arguments: `pref`
    - `pref` can be either `dog` or `cat`
  - Return: either a dog or a cat, based on preference.
    - If pref is not `dog` or `cat` then return null.
- [Whiteboard](https://projects.invisionapp.com/freehand/document/RtOUunpHB)
- [Code](ch12.js)
- [Test](__tests__/ch12.test.js)




## Second 
Create a new class called pseudo queue.
- Do not use an existing Queue.
- Instead, this PseudoQueue class will implement our standard queue interface (the two methods listed below),
- Internally, utilize 2 Stack instances to create and manage the queue
  - [Whiteboard Code](https://projects.invisionapp.com/freehand/document/RtOUunpHB)
  - [Code](ch11.js)
  - [Test](__tests__/ch11.test.js)

## First
- implement basic functionality and tests
