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
    if (typeof dict[str] === "number") {
      dict[str]++;
    }
  }
  let entries = Object.entries(dict);
  entries.sort((a, b) => {
    if (a[1] < b[1]) {
      return -1;
    }
    else if (a[1] > b[1]) {
      return 1;
    }
    return 0;
  })
  let candidate = entries[0][1];
  if (dict["l"] < candidate * 2) {
    if (dict["l"] % 2 !== 0) {
      dict["l"]--;
      return dict["l"] / 2
    }
    else return dict["l"] / 2;
  }
  console.log("dict", dict);

  return candidate;
};

console.log("ballones", maxNumberOfBalloons("loonbalxbalpoon"));

// "test".indexOf()