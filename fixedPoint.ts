function fixedPoint(A: number[]): number {
  for (let i = 0; i < A.length; i++) {
    if (A[i] === i) {
      return i;
    }
  }
  return -1;
};

console.log(fixedPoint([0, 2, 5, 8, 17]));
