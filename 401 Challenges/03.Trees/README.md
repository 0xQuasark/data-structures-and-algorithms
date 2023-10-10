# Trees Challenges

- [Whiteboard](https://projects.invisionapp.com/freehand/document/miqIvWwab)
- ([Code](Trees.js))
- ([Tests](trees.test.js))


## Third Challenge
### Problem Domain
- Write a function called breadth first
- Arguments: tree
- Return: list of all values in the tree, in the order they were encountered

### Assignment
- This was done on the whiteboard by Jacob during the intro session so I already had the logic and code
- reconstructing the function, and adding tests have been valuable, especially the skewedTree

#### Big O for BFS
- time: 'O(n)'
- storage: 'O(n)'


## Second Challenge
### Problem Domain
Find the Maximum Value in a Binary Tree

### Assignment
- I took the same function for the inOrder, but instead of adding the values to an array, I just got a temp max value variable and returned that.
- No whiteboard was done, as it was an iteration of a prior function

#### Big O for findMax
- time: 'O(n)'
- storage: 'O(1)'

## First Challenge
### Problem Domain
Create a Binary Search Tree class
- This class should be a sub-class (or your languages equivalent) of the Binary Tree Class, with the following additional methods:
  - Add
  - Arguments: value
  - Return: nothing
  - Adds a new node with that value in the correct location in the binary search tree.
- Contains
  - Argument: value
  - Returns: boolean indicating whether or not the value is in the tree at least once.

### Assignment
- [Whiteboard](https://projects.invisionapp.com/freehand/document/miqIvWwab)
- ([Code](Trees.js))
- ([Tests](trees.test.js))


#### Big O for contains
- time: 'O(n)'
- storage: 'O(1)'
