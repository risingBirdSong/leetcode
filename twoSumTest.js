// 'use strict';
// function twoSum(nums, target) {
//   let tracking = {};
//   for (let i = 0; i < nums.length; i++) {
//     let num = nums[i];
//     if (typeof tracking[num] === 'number') {
//       console.log('found');
//       return [tracking[num], i];
//     }
//     let complement = target - num;
//     tracking[complement] = i;
//   }
//   console.log(tracking);
//   return [-1, -1];
// };

// console.log(twoSum([2, 7, 11, 15], 9));