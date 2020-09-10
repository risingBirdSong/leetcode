function distanceBetweenBusStops(distance: number[], start: number, destination: number): number {
  let forwardDist = 0;
  let backwardsDist = 0;
  for (let i = start; i < destination; i++) {
    forwardDist += distance[i];
  }
  let idx = destination;
  while (idx !== start) {
    backwardsDist += distance[idx];
    idx++;
    if (idx === distance.length) {
      idx = 0;
    }
  }
  console.log("forward", forwardDist);
  console.log("backward", backwardsDist);
  return [forwardDist, backwardsDist].sort((a, b) => a - b)[0];
};

// console.log("distance between", distanceBetweenBusStops([1, 2, 3, 4], 0, 1));
// console.log("distance between", distanceBetweenBusStops([1, 2, 3, 4], 0, 2));
// console.log("distance between", distanceBetweenBusStops([7, 6, 3, 0, 3], 0, 4));
console.log("distance between", distanceBetweenBusStops([7, 10, 1, 12, 11, 14, 5, 0],
  7,
  2));