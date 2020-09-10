interface dictI {
  [keyof: string]: number;
}

function isAnagramA(s: string, t: string): boolean {
  if (s.length !== t.length) {
    return false
  }
  let dict: dictI = {};
  for (let i = 0; i < s.length; i++) {
    dict[s[i]] ? dict[s[i]]++ : dict[s[i]] = 1;
  }
  for (let i = 0; i < s.length; i++) {
    dict[t[i]] ? dict[t[i]]-- : dict[t[i]] = 1;
  }

  for (let entry of Object.entries(dict)) {
    if (entry[1] !== 0) {
      return false
    }
  }

  return true;
};

function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) {
    return false
  }
  let dict: dictI = {};
  for (let i = 0; i < s.length; i++) {
    dict[s[i]] ? dict[s[i]]++ : dict[s[i]] = 1;
    dict[t[i]] ? dict[t[i]]-- : dict[t[i]] = -1;
    let stop = true;
  }
  console.log("dict", dict);

  for (let key in dict) {
    if (dict[key] !== 0) {
      return false
    }
  }

  return true;
};

console.log("is anagram", isAnagram("abca", "cbaa"));
