function minStartValue(nums: number[]): number {
  let min = Infinity;
  let total = 0;

  for (let num of nums) {
    total += num;
    min = Math.min(total, min);
  }
  return min < 0 ? Math.abs(min) + 1 : 1;
};

console.log(minStartValue([1,-2,-3]));

// we care about all the numbers between start of numsArr and the the last - number, the pos numbers after that dont impact

// we add all the numbers in that range, presumably a negative number

// ensure that negative number plus our minStartValue equal to 1;

// no that wont work because early large negative numbers could take our starValueCandidate below 0;

// iterate the range of first num to last negative number
// find the greatest negative number
// startValueCandidate is that negative number + absolute value of that numb + 1