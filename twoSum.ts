
function twoSum(nums: number[], target: number): number[] {
  let tracking: { [key: number]: number } = {};
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    if (typeof tracking[num] === 'number') {
      return [tracking[num], i]
    }
    let complement = target - num;
    tracking[complement] = i;
  }
  return [-1, -1];
};

console.log(twoSum([2, 7, 3, 23, 12, 15], 18));