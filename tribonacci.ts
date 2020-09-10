function fibonnaci(n: number): number {
  if (n === 1) {
    return 1;
  } if (n === 0) {
    return 0;
  }
  return fibonnaci(n - 1) + fibonnaci(n - 2);
};

interface memoI {
  [keyof: number]: number;
}

//learned about memoization 
function tribonacci(num: number, mem?: memoI): number {
  let memo = mem || {};
  if (memo[num]) {
    return memo[num];
  }
  if (num <= 0) {
    return 0;
  } else if (num === 1) {
    return 1;
  }


  let returner = memo[num] = tribonacci(num - 1, memo) + tribonacci(num - 2, memo) + tribonacci(num - 3, memo)
  console.log("memo", memo);
  return returner;
}

console.log(tribonacci(25))