interface numCount {
  [key: number]: number;
}

function largestUniqueNumber(A: number[]): number {
  let numCounter: numCount = {};
  A.forEach((num) => {
    numCounter[num] ? numCounter[num]++ : numCounter[num] = 1;
  })
  // why is ts inferring 2nd idx of tuple to be any? Should be number right?
  Object.entries(numCounter).forEach((entry: numCount) => {
    entry[1] > 1 ? delete numCounter[entry[0]] : ""
  })
  let sorted = Object.entries(numCounter).sort((a, b) => Number(a) < Number(b) ? 1 : Number(a) > Number(b) ? -1 : 0);
  return sorted.length > 0 ? Number(sorted[sorted.length - 1][0]) : -1;
};

console.log(largestUniqueNumber([9, 9, 8, 8]));
