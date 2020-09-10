function containsZero(n: number) {
  return [...String(n)].some((str) => str == "0");
}

function getNoZeroIntegers(n: number): number[] {
  let candidate = n - 1;
  let complement = n - candidate;
  while (containsZero(candidate) || containsZero(complement)) {
    candidate -= 1;
    complement = n - candidate;
  }
  return [candidate, complement];
};

console.log("get no zero integers", getNoZeroIntegers(11));
