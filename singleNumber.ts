interface NumCount {
  [keyof: number]: number;
}
function singleNumber(nums: number[]): number {
  let trackerObj: NumCount = {};
  for (let num of nums) {
    trackerObj[num] ? trackerObj[num]++ : trackerObj[num] = 1;
    trackerObj[num] === 2 ? delete trackerObj[num] : "";
  }
  return Number(Object.keys(trackerObj)[0]);
};

console.log(singleNumber([4,1,2,1,2]));
