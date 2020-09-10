//problem
//https://leetcode.com/problems/distance-between-bus-stops/discuss/?currentPage=1&orderBy=most_votes&query=
function distanceBetweenBusStops(distance: number[], start: number, destination: number): number {
  let forwardDist = 0;
  let backwardsDist = 0;
  let idx = start;
  //clockwise
  while (idx !== destination) {
    forwardDist += distance[idx];
    idx++;
    if (idx === distance.length) {
      idx = 0;
    }
  }
  //counterclock
  idx = start;
  while (idx !== destination) {
    if (idx === 0) {
      idx = distance.length;
    }
    idx--;
    backwardsDist += distance[idx];
  }
  return [forwardDist, backwardsDist].sort((a, b) => a - b)[0];
};

// console.log("aaa", distanceBetweenBusStops([1, 2, 3, 4], 0, 1));
// console.log("distance between", distanceBetweenBusStops([1, 2, 3, 4],
//   0,
//   2));
console.log("distance between", distanceBetweenBusStops([1, 2, 3, 4],
  0,
  3));
// console.log("distance between", distanceBetweenBusStops([7, 6, 3, 0, 3], 0, 4));
// console.log("distance between", distanceBetweenBusStops([7, 10, 1, 12, 11, 14, 5, 0],
//   7,
//   2));