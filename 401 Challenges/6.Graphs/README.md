# Hashmaps

- [Code](./index.js)
- [Tests](./graph.test.js)

## Challenge 37
- Write a function called business trip
  - Arguments: graph, array of city names
  - Return: the cost of the trip (if it’s possible) or null (if not)
  - Determine whether the trip is possible with direct flights, and how much it would cost.
This one really confused me, GPT was a huge help

## Challenge 36
Write the following method for the Graph class:
- breadth first
  - Arguments: Node
  - Return: A collection of nodes in the order they were visited.


## Challenge 35
Create methods and tests for the following methods of the Graph class:

- add vertex
  - Arguments: value
  - Returns: The added vertex
  - Add a vertex to the graph
- add edge
  - Arguments: 2 vertices to be connected by the edge, weight (optional)
  - Returns: nothing
  - Adds a new edge between two vertices in the graph
  - If specified, assign a weight to the edge
  - Both vertices should already be in the Graph
- get vertices
  - Arguments: none
  - Returns all of the vertices in the graph as a collection (set, list, or similar)
  - Empty collection returned if there are no vertices
- get neighbors
  - Arguments: vertex
  - Returns a collection of edges connected to the given vertex
  - Include the weight of the connection in the returned collection
  - Empty collection returned if there are no vertices
- size
  - Arguments: none
  - Returns the total number of vertices in the graph
  - 0 if there are none
- Write tests to prove the following functionality:
  - Vertex can be successfully added to the graph
  - An edge can be successfully added to the graph
  - A collection of all vertices can be properly retrieved from the graph
  - All appropriate neighbors can be retrieved from the graph
  - Neighbors are returned with the weight between vertices included
  - The proper size is returned, representing the number of vertices in the graph
  - A graph with only one vertex and edge can be properly returned
