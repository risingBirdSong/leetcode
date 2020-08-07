function minStartValue(nums: number[]): number {
  return 0;
};

// console.log(minStartValue([]));

// we care about all the numbers between start of numsArr and the the last - number, the pos numbers after that dont impact

// we add all the numbers in that range, presumably a negative number

// ensure that negative number plus our minStartValue equal to 1;

// no that wont work because early large negative numbers could take our starValueCandidate below 0;

// iterate the range of first num to last negative number
// find the greatest negative number
// startValueCandidate is that negative number + absolute value of that numb + 1