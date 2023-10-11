# Challenges for Stacks and Queues

## Bracket Validator
Write a function called validate brackets
- Arguments: string
- Return: boolean
- representing whether or not the brackets in the string are balanced
- [Whiteboard Code](https://projects.invisionapp.com/freehand/document/RtOUunpHB)
- [Code](./ch13.js)
- [Test](./__tests__/ch13.test.js)


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
- [Code](./ch12.js)
- [Test](__tests__/ch12.test.js)


## Second 
Create a new class called pseudo queue.
- Do not use an existing Queue.
- Instead, this PseudoQueue class will implement our standard queue interface (the two methods listed below),
- Internally, utilize 2 Stack instances to create and manage the queue
- [Whiteboard Code](https://projects.invisionapp.com/freehand/document/RtOUunpHB)
- [Code](./ch11.js)
- [Test](./__tests__/ch11.test.js)

## First
<!-- Description of the challenge -->
- Create a Queue class that has a front property. It creates an empty Queue when instantiated.
- This object should be aware of a default empty value assigned to front when the queue is created.
- The class should contain the following methods:
  - enqueue
    - Arguments: value
    - adds a new node with that value to the back of the queue with an O(1) Time performance.
  - dequeue
    - Arguments: none
    - Returns: the value from node from the front of the queue
    - Removes the node from the front of the queue
    - Should raise exception when called on empty queue
  - peek
    - Arguments: none
    - Returns: Value of the node located at the front of the queue
    - Should raise exception when called on empty stack
  - is empty
    - Arguments: none
    - Returns: Boolean indicating whether or not the queue is empty

## Whiteboard Process
- this was presented by JB during the class

## Approach & Efficiency
Time Complexity: `O(1)`
Space Complexity: `O(n)`

## Solution
- [Stack Code](./stack/index.js), [Stack Test](./stack/__tests__/stack.test.js)
- [Queue Code](./queue/index.js), [Queue Test](./queue/__tests__/queue.test.js)
