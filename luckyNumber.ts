interface numCntI {
  [keyword: number]: number;
}
function findLucky(arr: number[]): number {
  let d: numCntI = {};
  for (let n of arr) {
    d[n] ? d[n]++ : d[n] = 1;
  }
  let sorted = Object.entries(d).sort((a, b) => {
    if (a[1] > b[1]) {
      return -1;
    }
    else if (a[1] < b[1]) {
      return 1;
    }
    else return 0;
  });
  for (let entry of sorted) {
    if (Number(entry[0]) === Number(entry[1])) {
      return Number(entry[0])
    }
  }
  return -1;
};

console.log((findLucky([1, 2, 2, 3, 3, 3])));
