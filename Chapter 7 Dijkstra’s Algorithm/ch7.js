//Breadth-first search will find you the path with the fewest segments
//dijkstra's algorithm will find you the path with the smallest total weight
//dijkstra's algorithm only works with directed acyclic graphs (DAGs)
//You can’t use Dijkstra’s algorithm if you have negative-weight edges
//dijkstra's algorithm is a greedy algorithm(so only looks for local minima)
//that's why it fails if you have negative-weight edge
//-------------------------------Implementation----------------------------------------------
//Node--Cost -->table
//Node--Parent -->?table
// let weightedGraph = new Map();
// let startNeighbors = new Map();
// startNeighbors.set("A", 6);
// startNeighbors.set("B", 2);
// weightedGraph.set("start", startNeighbors);
// //-------------------------------------
// let aNeighbors = new Map();
// weightedGraph.set("A", aNeighbors);
// aNeighbors.set("finish", 1);
// //-------------------------------------
// let bNeighbors = new Map();
// weightedGraph.set("B", bNeighbors);
// bNeighbors.set("A", 3);
// bNeighbors.set("finish", 5);
//-------------------------------------
// let finishNeighbors = new Map();
// weightedGraph.set("finish", finishNeighbors);
//-----------------Much more easier way to define the graph--------------------
//It depends on the chaining property(every map.set() returns map itself so we can make .set().set())
//1. Graph
//2. Costs table(cost from current node to other nodes)
//3. Parents(who is your partent)
//4. Processed( keep track of all the nodes you’ve already processed, because you don’t need to process a node more than once)

const problem = {
  start: { A: 5, B: 2 },
  A: { C: 4, D: 2 },
  B: { A: 8, D: 7 },
  C: { D: 6, finish: 3 },
  D: { finish: 1 },
  finish: {},
};
function getMinimumCostNode(costs, processed) {}
function dijkstra(graph) {
  let processed = new Set();
  //in the begging we only add start neighbors and finish
  let costs = Object.assign({ finish: Infinity }, graph.start);
  console.log("dijkstra ~ costs", costs);
}

dijkstra(problem);
