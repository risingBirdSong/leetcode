
function shortestDistance(words: string[], word1: string, word2: string): number {
  let min = Infinity;
  let lastIdx = Infinity;
  let lastWord: string | undefined = undefined;
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    if (word1 === word || word2 === word) {
      if (lastWord === word) {
        lastIdx = i;
        continue;
      }
      min = Math.min(min, Math.abs(lastIdx - i));
      lastIdx = i;
      lastWord = word;
    }
  }
  // console.log("trk", trk);
  return min;
};

// console.log(shortestDistance(["practice", "makes", "perfect", "coding", "makes"], "coding", "practice"));
// console.log(shortestDistance(["a", "c", "a", "b"], "a", "b"));
console.log(shortestDistance(["a", "b", "c", "d", "d"], "a", "d"))