/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
  //@ts-ignore
  nums.sort((a, b) => {
    if (a !== 0 && b !== 0) {
      return 0;
    }
    if (a !== 0) {
      return -1;
    }
  })
  console.log("answer", nums);

};

console.log("moving", moveZeroes([0, 1, 0, 3, 12]));
