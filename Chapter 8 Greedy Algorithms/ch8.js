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
console.log("finalStations--->", finalStations);
console.log("finalStates--->", finalStates);
//--------------------------------------------------------------------------------------------------
//there’s no easy way to tell if the problem you’re working on is NP-complete.
//Here are some giveaways:All of them may be NP-complete.
//•Your algorithm runs quickly with a handful of items but really slows down with more items.
//•“All combinations of X” usually point to an NP-complete problem.
//•Do you have to calculate “every possible version” of X because you //*can’t break it down into smaller sub-problems?
//•If your problem involves a sequence (such as a sequence of cities, like traveling salesperson), and it’s hard to solve, it might be NP-complete.
//•If your problem involves a set (like a set of radio stations) and it’s hard
//• Can you restate your problem as the set-covering problem or the traveling-salesperson problem?
