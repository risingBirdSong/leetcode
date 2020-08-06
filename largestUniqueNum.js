
/**
 * @param {number[]} A
 * @return {number}
 */
'use strict';
var largestUniqueNumberTheirsA = function (A) {
  let count = {};
  for (let num of A) {
    if (count[num] == undefined) {
      count[num] = 1;
    } else {
      count[num] += 1;
    }
  }
  let objectTest = Object
    .keys(count)
    .filter(key => count[key] == 1)
    .sort((a, b) => b - a)[0] || -1;
  return objectTest;
};
console.log(largestUniqueNumberTheirsA([2, 4, 6, 5, 32, 2, 54, 6, 8, 6, 4, 3, 4, 6, 8, 8, 6, 5, 4, 3, 4, 5, 6, 7, 8, 33, 33]));