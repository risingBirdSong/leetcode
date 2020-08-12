function numsSum(arr: number[]): number {
  return arr.reduce((a, c) => a + c);
}

interface trkI {
  [keyof: number]: number;
}

function fairCandySwap(A: number[], B: number[]): number[] {
  let totalA = numsSum(A);
  let totalB = numsSum(B);
  let evenMark = (totalA + totalB) / 2;
  let diff = evenMark - numsSum(A);
  let aTrk: trkI = {};
  for (let num of A) {
    aTrk[num + diff] = num;
  }
  for (let num of B) {
    if (aTrk[num]) {
      return [aTrk[num], num]
    }
  }
  throw Error("should never hit");
};

// A = [1,1], B = [2,2]
console.log("fair candy", fairCandySwap([1, 2, 5], [2, 4]));
console.log("fair candy", fairCandySwap([1, 1], [2, 2]));
