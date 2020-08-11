interface numCount {
  [keyof: string]: number;
}

function canPermutePalindrome(s: string): boolean {
  let dict: numCount = {};
  let oneUnevenAllowed = 1;
  for (let str of s) {
    dict[str] ? dict[str]++ : dict[str] = 1;
  }
  for (let entry of Object.entries(dict)) {
    if (entry[1] % 2 !== 0) {
      oneUnevenAllowed--;
    }
    if (oneUnevenAllowed < 0) {
      return false;
    }
  }
  // console.log(dict);
  return true;
};

console.log(canPermutePalindrome("aabbccdddee"));
// "ccoodffee".length / 2
// console.log("ccoodffee"[Math.floor("ccoodffee".length / 2)]);


