interface rankI {
  [keyof: number]: number;
}
// make a copy of the original arr and sort it.
// make an object of its number for fast lookup
// key is num, val is ranking... ranking is idx plus one to switch from 0 based to one based since smallest num is 1, not 0. duplicates will throw this logic off since each duplicate will increment idx of all following numbers, to account for this count the dupes as we iterate and subtract that from our ranking idx;

function arrayRankTransform(arr: number[]): number[] {
  let copyForSorting = [...arr];
  let duplicateCount = 0;
  let ranked: rankI = {};
  copyForSorting.sort((a, b) => a - b);
  for (let [i, num] of copyForSorting.entries()) {
    if (ranked[num] === undefined) {
      ranked[num] = i + 1 - duplicateCount;
    }
    else {
      duplicateCount++
    }
  }
  return arr.map((num) => ranked[num]);
};


console.log(
  [37, 12, 28, 9, 100, 56, 80, 5, 12].sort((a, b) => a - b));

console.log("results", arrayRankTransform([37, 12, 28, 9, 100, 56, 80, 5, 12]));
                            //  6   3   5   2  9     7  8   1  4 mine
                            //[5,   3,  4,  2, 8,    6, 7,  1, 3] theirs