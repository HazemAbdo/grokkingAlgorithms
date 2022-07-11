//Graphs
//A graph models a set of connections
//A is B neighbor if there is a direct connection between them
//Breadth first search is a different kind of search
//1. It runs on graphs
//2. It answers two types of questions
//2.1.Question type 1: Is there a path from node A to node B?
//you look in your neighbors to a list and iterate over them and for each of them not B add
//their neighbors to the list
//This way, you not only search your friends, but you search their friends,too.( entire network)
//2.2.Question type 2: What is the shortest path from node A to node B?
// Breadth-first search not only finds a path from A to B, it also finds the shortest path.
//Notice that this only works if you search people in the same order in which they’re added-->queue

//--------------------------------------------------------------------------------------------------------------
class Graph {
  //nodes
  #vertices = new Set();
  //express relationship between nodes
  //map a node to all of its neighbors
  #adjacencyList = new Map();
  get vertices() {
    return Array.from(this.#vertices);
  }
  get adjacencyList() {
    const list = {};
    this.#adjacencyList.forEach((val, key) => {
      list[key] = Array.from(val);
    });
    return list;
  }
  addVertex(vertex = null) {
    if (
      vertex !== null &&
      vertex !== undefined &&
      !this.#vertices.has(vertex)
    ) {
      this.#vertices.add(vertex);
      this.#adjacencyList.set(vertex, new Set());
    }
  }
  addEdge(vertex1 = null, vertex2 = null, isDirected = true) {
    if (
      vertex1 !== null &&
      vertex1 !== undefined &&
      vertex2 !== null &&
      vertex2 !== undefined &&
      vertex1 != vertex2
    ) {
      this.addVertex(vertex1);
      this.addVertex(vertex2);
      this.#adjacencyList.get(vertex1).add(vertex2);
      if (!isDirected) this.#adjacencyList.get(vertex2).add(vertex1);
    }
  }
}
let myGraph = new Graph();
myGraph.addEdge(1, 2);
myGraph.addEdge(1, 3);
myGraph.addEdge(1, 4);
myGraph.addEdge(2, 3);
myGraph.addEdge(2, 4);
myGraph.addEdge(3, 4);
// console.log(myGraph.adjacencyList[1]);
//-----------------------------------------------------------------------------------------------------------
class Queue {
  constructor(length) {
    this.elements = {};
    this.head = 0;
    this.tail = 0;
  }
  enqueue(element) {
    this.elements[this.tail] = element;
    this.tail++;
  }
  dequeue() {
    let head = this.elements[this.head];
    delete this.elements[this.head];
    this.head++;
    return head;
  }
  peek() {
    return this.elements[this.head];
  }
  get length() {
    return this.tail - this.head;
  }
  get isEmpty() {
    return this.length === 0;
  }
}
let q = new Queue();
q.enqueue(179);
q.enqueue(232);
q.enqueue(245);
q.enqueue(187);
q.enqueue(20);
q.enqueue(244);
q.enqueue(145);
q.enqueue(252);
// console.log(q.peek());
q.dequeue();
// console.log(q.peek());
// console.log(q.elements);
//-----------------------------------------------------------------------------------------------------------------
let graph = new Graph();
graph.addEdge("me", "alice");
graph.addEdge("alice", "me");
// graph.addEdge("me", "claire");
// graph.addEdge("me", "bob");
// graph.addEdge("bob", "anuj");
// graph.addEdge("bob", "peggy");
// graph.addEdge("claire", "thom");
// graph.addEdge("claire", "jonny");
// graph.addEdge("alice", "peggy");
//Breadth-first search will find you the path with the fewest segments
function breadthFirstSearch(nodeA, g) {
  let queue = new Queue();
  //If you don’t do this, you could also end up in an infinite loop
  //me->peggy peggy->me
  //queue=[peggy]
  //queue=[me]
  //queue=[peggy]
  //queue=[me]
  //..
  //..
  let searched = new Set();
  let current = "";
  g.adjacencyList[nodeA].forEach(function (item) {
    queue.enqueue(item);
  });
  console.log("queue intial", queue.elements);
  while (!queue.isEmpty) {
    //assume mango seller his name ends with m;
    current = queue.dequeue();
    console.log("current", current);
    if (!searched.has(current)) {
      searched.add(current);
      console.log("breadthFirstSearch ~ searched", searched);
      if (current[-1] == "m") {
        console.log(`${current}+" "+ is a mango seller!`);
      } else {
        g.adjacencyList[current].forEach(function (item) {
          queue.enqueue(item);
        });
      }
      console.log("queue", queue.elements);
    }
  }
}
breadthFirstSearch("me", graph);
