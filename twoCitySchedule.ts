


function twoCitySchedCost(costs: number[][]): number {

  let tracker = {};
  let absMin = 0;
  for (let i = 0; i < costs.length; i++) {
    //@ts-ignore  
    tracker[i] = Math.abs(costs[i][0] - costs[i][1]);
    let min = Infinity;
    min = Math.min(costs[i][0], costs[i][1]);
    absMin += min;
  }
  console.log("absMin", absMin);

  let entries = Object.entries(tracker) as [string, number][];
  entries.sort((a, b) => a[1] - b[1])
  let aCount = 0;
  let bCount = 0;
  let aTotal = 0;
  let bTotal = 0;
  for (let tuple of costs) {
    if (tuple[0] < tuple[1]) {
      aCount++;
      aTotal += tuple[0];
    }
    else if (tuple[1] < tuple[0]) {
      bCount++;
      bTotal += tuple[1];
    }
    else {
      if (aCount < bCount) {
        aCount++;
        aTotal += tuple[0]
      }
      else {
        console.log("does this ever hit?");
        bCount++;
        bTotal += tuple[1];
      }
    }
  }
  // console.log("aCount", aCount, "bCount", bCount);
  console.log("sorted tuples", entries);
  console.log("init count a", aCount, "init count b", bCount);
  console.log("aTotal", aTotal, "bTotal", bTotal, "grand total", aTotal + bTotal);

  let grandTotal = aTotal + bTotal;
  let idx = 0;
  while (aCount !== bCount) {

    grandTotal = aTotal + bTotal;
    if (aCount < bCount) {
      aCount++;
      bCount--;
      let tuple = costs[Number(entries[idx][0])];
      if (tuple[0] > tuple[1]) {
        bTotal += tuple[1];
        aTotal -= tuple[0];
        console.log("want to swap");
      }
      else if (tuple[0] < tuple[1]) {
        console.log("dont want to swap");
      }
      else {
        console.log("todo?");

      }
      idx++;
    }
    else if (aCount > bCount) {
      aCount--;
      bCount++;
      let tuple = costs[Number(entries[idx][0])];
      if (tuple[0] < tuple[1]) {
        aTotal -= tuple[0];
        bTotal += tuple[1];
        console.log("want to swap");

      } else {
        console.log("todo?");
      }
      idx++;
    }
    else {
      idx++;
    }
    grandTotal = aTotal + bTotal;
  }
  console.log("a count", aCount, "b count", bCount);
  return grandTotal
};

// console.log(twoCitySchedCost([[10, 20], [30, 200], [400, 50], [30, 20]]));
// console.log(twoCitySchedCost([[259, 770], [448, 54], [926, 667], [184, 139], [840, 118], [577, 469]]));
//[[259,770],[448,54],[926,667],[184,139],[840,118],[577,469]]
//output -> 1706
// expected 1859
console.log(twoCitySchedCost([[518, 518], [71, 971], [121, 862], [967, 607], [138, 754], [513, 337], [499, 873], [337, 387], [647, 917], [76, 417]]));
// output -> 3301
// expected -> 3671



// console.log(twoCitySchedCost([[259, 770], [448, 54], [926, 667], [184, 139], [840, 118], [577, 469]]));

//a sorted [10,20] [, 200]



// The first person goes to city A for a cost of 10.
// The second person goes to city A for a cost of 30.
// The third person goes to city B for a cost of 50.
// The fourth person goes to city B for a cost of 20.

// The total minimum cost is 10 + 30 + 50 + 20 = 110 to have half the people interviewing in each city.