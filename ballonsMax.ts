interface ltrCountI {
  [keyof: string]: number;
}

function maxNumberOfBalloons(text: string): number {
  let dict: ltrCountI = {
    "b": 0,
    "a": 0,
    "l": 0,
    "o": 0,
    "n": 0
  };
  for (let str of text) {
    if (str === "l" || str === "o") {
      dict[str] += .5;
    }
    else if (typeof dict[str] === "number") {
      dict[str]++;
    }
  }
  let min = Infinity;
  for (let ltr in dict) {
    min = Math.min(min, dict[ltr])
  }
  return Math.floor(min);
};

console.log("ballones", maxNumberOfBalloons("leetcode"));

// "test".indexOf()