function numsSum(arr: number[]): number {
  return arr.reduce((a, c) => a + c);
}

function fairCandySwap(A: number[], B: number[]): number[] {
  let totalA = numsSum(A);
  let totalB = numsSum(B);
  let aCpy = [...A];
  let bCpy = [...B];
  let aSwap = -1;
  let bSwap = -1;
  outer:
  for (let i = 0; i < aCpy.length; i++) {
    for (let j = 0; j < bCpy.length; j++) {
      aSwap = aCpy[i];
      bSwap = bCpy[j];
      let temp = aCpy[i];
      aCpy[i] = bCpy[j];
      bCpy[j] = temp;
      totalA = numsSum(aCpy);
      totalB = numsSum(bCpy);
      if (totalA === totalB) {
        console.log("here");
        
        break outer;
      }
      console.log(totalA, totalB);
    }
  }
  console.log("a cpy", aCpy, "b cpy", bCpy);
  console.log("a swap", aSwap, "b swap", bSwap);
  return [aSwap, bSwap];
};

console.log("fair candy", fairCandySwap([2], [1, 3]));
