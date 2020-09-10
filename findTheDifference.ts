interface diffI {
  [keyof: string]: number;
}
function findTheDifference(s: string, t: string): string {
  let tracker: diffI = {};
  for (let i = 0; i < t.length; i++) {
    if (s[i]) {
      tracker[s[i]] ? tracker[s[i]]++ : tracker[s[i]] = 1;
    }
    tracker[t[i]] ? tracker[t[i]]-- : tracker[t[i]] = -1;
  }
  for (let entry of Object.entries(tracker)) {
    if (entry[1] !== 0) {
      return entry[0];
    }
  }
  return "na"
};

console.log("find diff", findTheDifference("abcd", "abcde"));
