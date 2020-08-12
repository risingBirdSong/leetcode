function numsSum(arr: number[]): number {
  return arr.reduce((a, c) => a + c);
}


function fairCandySwap(A: number[], B: number[]): number[] {
  let totalA = numsSum(A);
  let totalB = numsSum(B);
  let even = (totalA + totalB) / 2;
  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < B.length; j++) {
      let aCpy = [...A];
      let bCPy = [...B];
      let aCandidate = A[i];
      let bCandidate = B[j];
      let temp = A[i];
      A[i] = B[j];
      B[j] = temp;
      if (numsSum(A) === numsSum(B)) {
        return [aCandidate, bCandidate]
      }
      A = [...aCpy];
      B = [...bCPy];
    }
  }
  return [-1, -1];
};

// A = [1,1], B = [2,2]
console.log("fair candy", fairCandySwap([1, 2, 5], [2, 4]));
// console.log("fair candy", fairCandySwap([2], [1, 3]));
