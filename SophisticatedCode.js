/* 
FileName: SophisticatedCode.js 
Content: This code implements a complex algorithm for finding the shortest path in a graph using Dijkstra's algorithm.
*/

class Graph {
  constructor() {
    this.vertices = {};
  }

  addVertex(vertex) {
    this.vertices[vertex] = [];
  }

  addEdge(vertex1, vertex2, weight) {
    this.vertices[vertex1].push({ vertex: vertex2, weight: weight });
    this.vertices[vertex2].push({ vertex: vertex1, weight: weight });
  }

  dijkstra(startVertex) {
    let distances = {};
    let previous = {};
    let queue = new PriorityQueue();

    for (let vertex in this.vertices) {
      if (vertex === startVertex) {
        distances[vertex] = 0;
        queue.enqueue(startVertex, 0);
      } else {
        distances[vertex] = Infinity;
        queue.enqueue(vertex, Infinity);
      }
      previous[vertex] = null;
    }

    while (!queue.isEmpty()) {
      let { element: currentVertex } = queue.dequeue();
      let currentEdges = this.vertices[currentVertex];

      for (let edge of currentEdges) {
        let { vertex } = edge;
        let currentWeight = edge.weight;
        let distance = distances[currentVertex] + currentWeight;

        if (distance < distances[vertex]) {
          distances[vertex] = distance;
          previous[vertex] = currentVertex;
          queue.enqueue(vertex, distance);
        }
      }
    }

    return { distances, previous };
  }

  getShortestPath(startVertex, endVertex) {
    let { distances, previous } = this.dijkstra(startVertex);

    let path = [];
    let vertex = endVertex;

    while (vertex) {
      path.unshift(vertex);
      vertex = previous[vertex];
    }

    return { path, distance: distances[endVertex] };
  }
}

class PriorityQueue {
  constructor() {
    this.items = [];
  }

  enqueue(element, priority) {
    let queueElement = { element, priority };
    let added = false;

    for (let i = 0; i < this.items.length; i++) {
      if (queueElement.priority < this.items[i].priority) {
        this.items.splice(i, 0, queueElement);
        added = true;
        break;
      }
    }

    if (!added) {
      this.items.push(queueElement);
    }
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items.shift();
  }

  isEmpty() {
    return this.items.length === 0;
  }
}

// Example usage
let graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B", 4);
graph.addEdge("A", "C", 2);
graph.addEdge("B", "E", 3);
graph.addEdge("C", "D", 2);
graph.addEdge("C", "F", 4);
graph.addEdge("D", "E", 3);
graph.addEdge("D", "F", 1);
graph.addEdge("E", "F", 1);

let startVertex = "A";
let endVertex = "E";

let shortestPathInfo = graph.getShortestPath(startVertex, endVertex);

console.log("Shortest Path:", shortestPathInfo.path);
console.log("Distance:", shortestPathInfo.distance);
