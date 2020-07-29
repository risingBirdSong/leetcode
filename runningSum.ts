// function runningSum(nums: number[]): number[] {
//   let output: number[] = [nums[0]];
//   for (let i = 1; i < nums.length; i++) {
//     output.push(output[i - 1] + nums[i])
//   }
//   return output;
// };

// function runningSum (nums : number[]) : number[] {
//   let total = nums[0];
//   for (let i = 1; i < nums.length; i ++){
//     let num = nums[i];
//     nums[i] = num + total;
//     total += num;
//   }  
//   return nums;
// }

function runningSum (nums : number[]) : number[] {
  for (let i = 1; i < nums.length; i ++){
    nums[i] = nums[i] + nums[i-1]
  }
  return nums;
}

// console.log(runningSum([1, 3, 5, 4, 7, 12, 43, 19, 2]));
console.log(runningSum([3,1,2,10,1]));
