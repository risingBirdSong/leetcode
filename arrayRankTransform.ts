function arrayRankTransform(arr: number[]): number[] {
  let copyForSorting = [...arr];
  copyForSorting.sort((a, b) => a - b);
  let ranked = arr.map((val) => copyForSorting.indexOf(val) + 1)
  return ranked;
};


console.log(
  [37, 12, 28, 9, 100, 56, 80, 5, 12].sort((a, b) => a - b));

console.log(arrayRankTransform([37, 12, 28, 9, 100, 56, 80, 5, 12]));
                            //  6   3   5   2  9     7  8   1  4 mine
                            //[5,   3,  4,  2, 8,    6, 7,  1, 3] theirs