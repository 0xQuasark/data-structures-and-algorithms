# Reverse an array.

Takes an array and a new number, returns a new array with that new number inserted at the midpoint.

## Whiteboard Process
- Notability ([direct link to image](https://notability.com/n/2O8TQKg9471foHj2iVo7DP))

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->
- `arr` is the original array, `results` will have the answers, `newNum` is the number to insert
- I've got two iterators, `i` to parse thru `arr` & `j` to parse through `results`
- `midPoint` is half the array (rounded up)
- I iterate them both, except when we're at `midPoint` (i.e. when `i === j === midPoint`)
- at this point, I assign the `newNum` to the new array (`results[j] = newNum`)
- I decrement the `i`, as we didn't actually read anything from `arr`
- we continue to increment `i` until we hit the end of `arr`, which is now one less than `j`
- 

## Solution
- This is a whiteboard only assignment


