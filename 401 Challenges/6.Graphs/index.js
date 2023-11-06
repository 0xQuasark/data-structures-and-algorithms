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
module.exports = Graph;
