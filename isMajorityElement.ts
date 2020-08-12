interface trkI {
  [keyof: number]: number;
}

function isMajorityElement(nums: number[], target: number): boolean {
  let trk: trkI = {};
  let maxOccr = - Infinity;
  let max = - Infinity;
  for (let num of nums) {
    trk[num] ? trk[num]++ : trk[num] = 1;
    if (trk[num] > maxOccr) {
      maxOccr = trk[num];
      max = num;
    }
  }
  return max === target && maxOccr > nums.length / 2;
};

console.log((isMajorityElement([10, 100, 101, 101]
  , 101)));
// console.log((isMajorityElement([2, 4, 5, 5, 5, 5, 5, 6, 6], 5)));
