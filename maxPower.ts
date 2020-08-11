interface trkI {
  // max  , current
  [keyof: string]: [number, number];
}

function maxPower(s: string): number {
  let trk: trkI = {};
  let current: string = s[0];
  let streak: number = 1;
  for (let i = 0; i < s.length; i++) {
    if (s[i + 1] === s[i]) {
      streak++;
    }
    if (trk[s[i]]) {
      trk[s[i]][1]++;
      trk[s[i]][0] = Math.max(trk[s[i]][0], streak)
    }
    else if (!trk[s[i]]) {
      trk[s[i]] = [1, 1];
    }
    if (s[i + 1] !== s[i]) {
      streak = 1;
    }
  }
  console.log(trk);
  let max = -Infinity;
  let entries = Object.entries(trk);
  let maxString: string | undefined = undefined;
  let maxNum: number = -Infinity;
  for (let entry of entries) {
    if (entry[1][0] > maxNum) {
      maxNum = entry[1][0];
      maxString = entry[0];
      let ignore = true;
    }
  }
  return maxNum;
};

// console.log(maxPower("llleetcodessssdssssss"));
console.log(maxPower("leetcode"));
