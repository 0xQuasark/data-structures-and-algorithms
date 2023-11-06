'use strict';
const Graph = require('./');

describe('Challenge 36, Bredth Firsth Search', () => {
  test('BFS traversal returns correct order of visited vertices', () => {
    let graph = new Graph();
    let one = graph.addVertex(1);
    let two = graph.addVertex(2);
    let three = graph.addVertex(3);
    graph.addEdge(one, two);
    graph.addEdge(one, three);

    // Step 1: Perform Breadth-First Search (BFS) starting from vertex 'one'
    let bfsResult = graph.bfs(one);
    // Step 2: Convert the BFS result into an array
    let bfsArray = [...bfsResult];
    // Step 3: Map the array of vertices to an array of their values
    let bfsValues = bfsArray.map(v => v.value);
    // Step 4: Compare the array of vertex values with the expected array [1, 2, 3]
    expect(bfsValues).toEqual([1, 2, 3]);
  });

  test('BFS traversal returns empty set for isolated vertex', () => {
    let graph = new Graph();
    let one = graph.addVertex(1);
    expect([...graph.bfs(one)].map(v => v.value)).toEqual([1]); // shorthand of the above
  });

  test('BFS traversal returns correct order for complex graph', () => {
    let graph = new Graph();
    let one = graph.addVertex(1);
    let two = graph.addVertex(2);
    let three = graph.addVertex(3);
    let four = graph.addVertex(4);
    graph.addEdge(one, two);
    graph.addEdge(two, three);
    graph.addEdge(three, four);
    graph.addEdge(four, one);
    expect([...graph.bfs(one)].map(v => v.value)).toEqual([1, 2, 3, 4]);
  });
});

describe('Graphs basic functionality ', () => {
  test('Vertex can be successfully added to the graph', () => {
    let graph = new Graph();
    let one = graph.addVertex(1);
    expect(graph.getVertices()).toEqual([one]);
  }
  );

  test('An edge can be successfully added to the graph', () => {
    let graph = new Graph();
    let one = graph.addVertex(1);
    let two = graph.addVertex(2);
    graph.addEdge(one, two);
    // console.log('one', JSON.stringify(graph.getEdges(one)));
    expect(graph.getEdges(one)).toEqual([{ vertex: { value: 2 }, weight: 0 }]);
  });

  test('A collection of all vertices can be properly retrieved from the graph', () => {
    let graph = new Graph();
    let one = graph.addVertex(1);
    let two = graph.addVertex(2);
    graph.addEdge(one, two);
    // console.log(graph.getVertices());
    expect(graph.getVertices()).toEqual([one, two]);
  });

  test('All appropriate neighbors can be retrieved from the graph', () => {
    let graph = new Graph();
    let one = graph.addVertex(1);
    let two = graph.addVertex(2);
    graph.addEdge(one, two);
    // console.log(graph.getEdges(one));
    expect(graph.getEdges(one)).toEqual([{ vertex: { value: 2 }, weight: 0 }]);
  });

  test('Neighbors are returned with the weight between vertices included', () => {
    let graph = new Graph();
    let one = graph.addVertex(1);
    let two = graph.addVertex(2);
    graph.addEdge(one, two, 3);
    expect(graph.getEdges(one)).toEqual([{ vertex: { value: 2 }, weight: 3 }]);
  });

  test('The proper size is returned, representing the number of vertices in the graph', () => {
    let graph = new Graph();
    let one = graph.addVertex(1);
    let two = graph.addVertex(2);
    graph.addEdge(one, two);
    expect(graph.size()).toEqual(2);
  });

  test('A graph with only one vertex and edge can be properly returned', () => {
    let graph = new Graph();
    let one = graph.addVertex(1);
    graph.addEdge(one, one);
    expect(graph.getEdges(one)).toEqual([{ vertex: { value: 1 }, weight: 0 }]);
  });

});
