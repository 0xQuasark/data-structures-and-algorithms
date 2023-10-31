# Hashmaps

## Challenge 31
Write a function called repeated word that finds the first word to occur more than once in a string
- Time complexity: O(n) because the function iterates over every word in the string
- Space: O(n) because in the worst case scenarion (when there are no repeated words), each word gets stored in the hash table.



## Challenge 30
Create methods and tests for the following methods of the Hashmap class:
`set()`
- When adding a new key/value pair to a hashtable:
  - send the key to the hash() method.
  - Once you determine the index of where it should be placed, go to that index
  - Check if something exists at that index already, if it doesn’t, add it with the key/value pair.
  - If something does exist, add the new key/value pair to the data structure within that bucket.

`get()`
- The get() method takes in a key, gets the Hash, and goes to the index location specified. Once at the index location is found in the array, it is then the responsibility of the algorithm the iterate through the bucket and see if the key exists and return the value.

`has()`
- The has() method will accept a key, and return a bool on if that key exists inside the hashtable. The best way to do this is to have the contains call the hash() method and check the hashtable if the key exists in the table given the index returned.

`keys()`
- The keys() method returns a collection (array) of unique hash keys.

`hash()`
- The hash() method will accept a key as a string, conduct the hash, and then return the index of the array where the key/value should be placed.

