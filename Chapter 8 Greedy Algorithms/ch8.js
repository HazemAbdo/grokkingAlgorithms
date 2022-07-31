//But that’s the beauty of greedy algorithms: they’re easy! A greedy algorithm is simple: at each step, pick the optimal move.
//at each step you pick the locally optimal solution, and in the end you’re left with the globally optimal solution.
//--------------------------------------------------------------------------------------------------
//suppose you’re starting a radio show. You want to reach listeners in all 50 states. You have to decide what
//stations to play on to reach all those listeners. It costs money to be on each station, so you’re trying to
//minimize the number of stations you play on. You have a list of stations
//1.first solution: List every possible subset of stations.
//This is called the //*power set. There are 2^n possible subsets.
//There’s no algorithm that solves it fast enough! so let's use approximation algorithm.
//2.the greedy algorithm:
//Pick the station that covers the most states that haven’t been covered yet.
let statesNeeded = new Set(["mt", "wa", "or", "id", "nv", "ut", "ca", "az"]);
let stations = new Map();
stations.set("kone", new Set(["id", "nv", "ut"]));
stations.set("ktwo", new Set(["wa", "id", "mt"]));
stations.set("kthree", new Set(["or", "nv", "ca"]));
stations.set("kfour", new Set(["nv", "ut"]));
stations.set("kfive", new Set(["ca", "az"]));
let finalStations = new Set();
let finalStates = new Set();
let stationAndNumberOfNewStates = [];
counterOfNewStates = 0;
while (statesNeeded.size > 0) {
  for (const [station, stationStates] of stations) {
    for (const state of stationStates) {
      if (!finalStates.has(state)) {
        counterOfNewStates++;
      }
    }
    stationAndNumberOfNewStates.push([counterOfNewStates, station]);
    counterOfNewStates = 0;
  }
  //push station with most new states to finalStations and push the states to finalStates
  stationAndNumberOfNewStates.sort((a, b) => {
    return b[0] - a[0];
  });
  finalStations.add(stationAndNumberOfNewStates[0][1]);

  for (const state of stations.get(stationAndNumberOfNewStates[0][1])) {
    finalStates.add(state);
    statesNeeded.delete(state);
  }

  stations.delete(stationAndNumberOfNewStates[0][1]);
  stationAndNumberOfNewStates = [];
}
// console.log("finalStations--->", finalStations);
// console.log("finalStates--->", finalStates);
//--------------------------------------------------------------------------------------------------
//there’s no easy way to tell if the problem you’re working on is NP-complete.
//Here are some giveaways:All of them may be NP-complete.
//•Your algorithm runs quickly with a handful of items but really slows down with more items.
//•“All combinations of X” usually point to an NP-complete problem.
//•Do you have to calculate “every possible version” of X because you //*can’t break it down into smaller sub-problems?
//•If your problem involves a sequence (such as a sequence of cities, like traveling salesperson), and it’s hard to solve, it might be NP-complete.
//•If your problem involves a set (like a set of radio stations) and it’s hard
//• Can you restate your problem as the set-covering problem or the traveling-salesperson problem?
//--------------------------------------------------------------------------------------------------
//fractional knapsack problem
// Input:
// Items as (value, weight) pairs
// arr[] = {{60, 10}, {100, 20}, {120, 30}}
// Knapsack Capacity, W = 50;
// Output:
// Maximum possible value = 240
// by taking items of weight 10 and 20 kg and 2/3 fraction
// of 30 kg. Hence total price will be 60+100+(2/3)(120) = 240
function fractionalKnapsack(items, maxWeight) {
  let itemsWithRatio = items;
  let totalWeight = 0;
  let totalValue = 0;
  itemsWithRatio.forEach((element) => {
    element.push(element[0] / element[1]);
  });
  itemsWithRatio = itemsWithRatio.sort((a, b) => b[2] - a[2]);
  itemsWithRatio.forEach((element) => {
    if (totalWeight + element[1] <= maxWeight) {
      totalWeight += element[1];
      totalValue += element[0];
    } else {
      totalValue += ((maxWeight - totalWeight) / element[1]) * element[0];
      totalWeight = maxWeight;
    }
  });
  return totalValue;
}
console.log(
  fractionalKnapsack(
    [
      [60, 10],
      [100, 20],
      [120, 30],
    ],
    50
  )
);
console.log(
  fractionalKnapsack(
    [
      [10, 20],
      [20, 30],
      [30, 40],
    ],
    50
  )
);
console.log(
  fractionalKnapsack(
    [
      [4, 5],
      [34, 35],
      [30, 40],
    ],
    40
  )
);
//--------------------------------------------------------------------------------------------------
//Given an array of jobs where every job has a deadline and associated profit if the job is finished
//before the deadline. It is also given that every job takes a //*single unit of time,
//so the minimum possible deadline for any job is 1.
//How to maximize total profit if only one job can be scheduled at a time.
//input [tasks] each task=[id, deadline, profit]
//0--(0)-->1--(1)-->2--(2)-->3
//if deadline is 3 then it can be done in slot 0,1,2
//output is the sequence of jobs that maximizes the profit
function jobScheduling(tasks) {
  let sortedTasks = [];
  let maxDeadline = Number.NEGATIVE_INFINITY;
  tasks.forEach((element) => {
    if (element[1] > maxDeadline) {
      maxDeadline = element[1];
    }
  });
  let slots = new Array(maxDeadline).fill(0);
  let sequence = new Array(maxDeadline).fill(0);
  sortedTasks = tasks.sort((a, b) => b[2] - a[2]);
  sortedTasks.forEach((element) => {
    for (i = element[1] - 1; i >= 0; i--) {
      if (slots[i] == 0) {
        sequence[i] = element[0];
        slots[i] = 1;
        break;
      }
    }
  });
  console.log(JSON.stringify(sequence));
}
jobScheduling([
  ["a", 2, 100],
  ["b", 1, 19],
  ["c", 2, 27],
  ["d", 1, 25],
  ["e", 3, 15],
]);
