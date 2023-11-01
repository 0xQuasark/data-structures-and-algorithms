# Hashmaps

## Challenge 33

Implement a simplified LEFT JOIN for 2 Hashmaps.
- Arguments: two hash maps
- The first parameter is a hashmap that has word strings as keys, and a synonym of the key as values.
- The second parameter is a hashmap that has word strings as keys, and antonyms of the key as values.
- Return: The returned data structure that holds the results is up to you. It doesn’t need to exactly match the output below, so long as it achieves the LEFT JOIN logic

Synonyms Hash Table |   |   | Antonyms Hash Table |   |
---------------------|---|---|---------------------|---|
Key                 | Value | xx  | Key               | Value |
diligent            | employed | xx  | diligent         | idle |
fond                | enamored | xx  | fond             | averse |
guide               | usher | xx  | guide             | follow |
outfit              | garb | xx  | flow              | jam |
wrath               | anger | xx  | wrath             | delight |

Output:
```javascript
[
   ["font", "enamored", "averse"],
   ["wrath", "anger", "delight"],
   ["diligent", "employed", "idle"],
   ["outfit", "garb", NULL],
   ["guide", "usher","follow"]
]
```


## Challenge 32
Find common values in 2 binary trees
- Time Complexity: O(n + m), where n and m are the number of nodes in tree1 and tree2 respectively. This is because the function iterates over each node in both trees once when populating and checking the hash table.
- Space Complexity: O(n), where n is the number of nodes in tree1. This is because in the worst-case scenario (when there are no common nodes), each node from tree1 gets stored in the hash table.

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

