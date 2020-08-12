

//ltcde 1287 Element Appearing More Than 25% In Sorted Array

interface trkI {
  [keyof: number]: number;
}

function findSpecialInteger(arr: number[]): number {
  let trk: trkI = {};
  for (let num of arr) {
    trk[num] ? trk[num]++ : trk[num] = 1;
  }
  let max = - Infinity;
  let mostCommon = -1;
  let entries = Object.entries(trk);
  for (let entry of entries) {
    if (entry[1] > max) {
      max = entry[1];
      mostCommon = Number(entry[0]);
    }
  }
  return mostCommon;
};

console.log(findSpecialInteger([1, 2, 2, 6, 6, 6, 6, 7, 10]));

