interface counterI {
  [keyof: number]: number;
}

function containsDuplicate(nums: number[]): boolean {
  let counter: counterI = {};
  for (let i = 0; i < nums.length; i++) {
    if (counter[nums[i]]) {
      return true;
    }
    counter[nums[i]] = 1;
  }
  return false;
};

console.log("contains", containsDuplicate([1, 2, 3, 4]));
console.log("contains", containsDuplicate([1, 2, 3, 4, 1]));
