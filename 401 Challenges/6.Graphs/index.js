'use strict';

class Vertex {
  constructor (value) {
    this.value = value;
  }
}

class Edge {
  constructor(vertex, weight = 0) {
    this.vertex = vertex;
    this.weight = weight;
  }
}

class Graph {
  constructor() {
    this.adjacencyList = new Map();
  }

  size() {
    return [...this.adjacencyList.keys()].length;
  }

  addVertex(value) {
    let vertex = new Vertex(value);
    this.adjacencyList.set(vertex, []); // vertex is the key, empty list of adjacencies is the value in our Hash table.
    return vertex;
  }

  addEdge(startVertex, endVertex, weight = 0) {
    if (!this.adjacencyList.get(startVertex) || !this.adjacencyList.get(endVertex)) {
      throw new Error('Invalid vertices!!');
    }

    const adjacencies = this.adjacencyList.get(startVertex);
    adjacencies.push(new Edge(endVertex, weight));
  }

  getEdges(vertex) {
    return [...this.adjacencyList.get(vertex)];
  }

  // return a list of all vertices
  getVertices () {
    return [...this.adjacencyList.keys()];
    // this.adjacencyList.keys();
  }

  bfs(vertex) {
    let queue = [];
    let visited = new Set();
    queue.push(vertex);
    visited.add(vertex);

    // as long as our queue has vertices, we want to keep looping
    while(queue.length) {
      let current = queue.shift(); // dequeue the front vertex
      // console.log(current.value);
      let edges = this.getEdges(current); // grab all the edge (connections)

      for (let edge of edges) { // loop through ever edge that is connected to the current vertex
        let childVertex = edge.vertex; // and edge contains a vertex

        if (!visited.has(childVertex)) { // check if vertex has already been visited.
          visited.add(childVertex);
          queue.push(childVertex);
        }
      }
    }
    // console.log(visited);
    return visited;
  }

  dfs(vertex) {
    let stack = [vertex];
    let visited = new Set();
    visited.add(vertex);

    while(stack.length) {
      let current = stack.pop();
      // console.log(current.value);
      let edges = this.getEdges(current); 

      for (let edge of edges) { 
        let childVertex = edge.vertex; 

        if (!visited.has(childVertex)) { 
          visited.add(childVertex);
          stack.push(childVertex);
        }
      }
    }
    return visited;
  }
}


// businessTrip function implementation
function businessTrip(graph, cityNames) {
  let totalCost = 0;
  for (let i = 0; i < cityNames.length - 1; i++) {
    let startCity = cityNames[i];
    let endCity = cityNames[i + 1];

    // Initialize startVertex and endVertex
    let startVertex;
    let endVertex;
    // Loop through all vertices in the graph's adjacency list
    for (let vertex of graph.adjacencyList.keys()) {
      // If the vertex's value matches the start city, assign it to startVertex
      if (vertex.value === startCity) {
        startVertex = vertex;
      }
      // If the vertex's value matches the end city, assign it to endVertex
      if (vertex.value === endCity) {
        endVertex = vertex;
      }
    }

    if (!startVertex || !endVertex) {
      return null; // One of the cities in the trip is not in the graph.
    }

    let edge = graph.adjacencyList.get(startVertex).find(e => e.vertex.value === endCity);

    if (!edge) {
      return null; // There is no direct flight/edge between these two cities.
    }

    totalCost += edge.weight;
  }
  return totalCost;
}


let network = new Graph();

let Blake = network.addVertex('blake');
let Paul = network.addVertex('Paul');
let Samaad = network.addVertex('Samaad');
let Chester = network.addVertex('Chester');
let Sydney = network.addVertex('Sydney');
let JoshE = network.addVertex('Josh E');
let Anthony = network.addVertex('Anthony');
let David = network.addVertex('David');

network.addEdge(Blake, Paul);
network.addEdge(Samaad, Sydney);
network.addEdge(Samaad, JoshE);
network.addEdge(Samaad, Chester);
network.addEdge(Chester, Anthony);
network.addEdge(Chester, Paul);
network.addEdge(Anthony, David);
network.addEdge(Anthony, Paul);
network.addEdge(David, Chester);

// network.bfs(Samaad);
// console.log(network.dfs(Samaad));
// console.log(network.size());
// console.log(network);

module.exports = { Graph, businessTrip };
