'use strict';
const { Graph, businessTrip } = require('./index.js');

describe('Challenge 37, Business Trip', () => {
  let graph;
  beforeEach(() => {
    graph = new Graph();
    let pandora = graph.addVertex('Pandora');
    let arendelle = graph.addVertex('Arendelle');
    let metroville = graph.addVertex('Metroville');
    let monstropolis = graph.addVertex('Monstropolis');
    let narnia = graph.addVertex('Narnia');
    let naboo = graph.addVertex('Naboo');
    graph.addEdge(pandora, arendelle, 150);
    graph.addEdge(arendelle, metroville, 99);
    graph.addEdge(metroville, arendelle, 99);
    graph.addEdge(metroville, naboo, 26);
    graph.addEdge(metroville, narnia, 37);
    graph.addEdge(metroville, monstropolis, 105);
    graph.addEdge(monstropolis, metroville, 105);
    graph.addEdge(monstropolis, naboo, 73);
    graph.addEdge(naboo, monstropolis, 73);
    graph.addEdge(naboo, narnia, 250);
    graph.addEdge(narnia, naboo, 250);
  });

  test('should calculate the correct cost of a trip', () => {
    expect(businessTrip(graph, ['Pandora', 'Arendelle'])).toBe(150);
    expect(businessTrip(graph, ['Arendelle', 'Metroville', 'Monstropolis'])).toBe(204);
  });

  test('should return null for a trip with no direct flights', () => {
    expect(businessTrip(graph, ['Narnia', 'Arendelle', 'Naboo'])).toBeNull();
  });

  test('should return null if one of the cities does not exist', () => {
    expect(businessTrip(graph, ['Narnia', 'Pandora', 'Hogwarts'])).toBeNull();
  });

});


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
