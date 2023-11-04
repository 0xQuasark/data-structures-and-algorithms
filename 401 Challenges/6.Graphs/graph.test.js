'use strict';
const Graph = require('./');

describe('Graphs', () => {
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
