

function maxPower(s: string): number {
  let max = 1;
  let streak = 1;
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== s[i + 1]) {
      streak = 1;
    }
    else {
      streak++
      max = Math.max(streak, max);
    }
  }
  return max;
};

// console.log(maxPower("llleetcodessssdssssss"));
console.log(maxPower("tourist"));
