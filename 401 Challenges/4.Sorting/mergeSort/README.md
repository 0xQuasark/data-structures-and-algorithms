## Merge Sort

Merge sort is a divide and conquer algorithm that was invented by John von Neumann in 1945. It works on the principle of dividing the array into two halves, sorting them separately and then merging them.

Here is a brief pseudocode of merge sort algorithm -

- First we split the source array in half

`[8,4,23] [42,16,15]`

- Then we split it in half again until each array has one element

`First half becomes: [8], [4], [23]
Second half becomes: [42], [16], [15]`

- This is done via recursively calling the same function.

- Once there's nothing left to split, we start merging the array's, but in order.

- It does this by comparing two elements with each other and pushing the smaller one into the array. The very last two number it compares, it then appends the second number to the array, as that would have been the largest number its encountered.



### Complexity Analysis
The time complexity of merge sort is O(n log n) in all 3 cases (worst, average and best) as merge sort always divides the array into two halves and takes linear time to merge two halves.

The space complexity of merge sort is O(n) because an extra space of size n is needed in the merge function with the help of which the elements are sorted.
