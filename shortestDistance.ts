
function shortestDistance(words: string[], word1: string, word2: string): number {
  let word1Idxs: number[] = [];
  let word2idxs: number[] = [];
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    if (word === word1) {
      word1Idxs.push(i);
    }
    else if (word === word2) {
      word2idxs.push(i);
    }
  }
  console.log("idxs1", word1Idxs);
  console.log("idxs2", word2idxs);

  let min = Infinity;
  for (let idx1 of word1Idxs) {
    for (let idx2 of word2idxs) {
      min = Math.min(min, Math.abs(idx2 - idx1))
    }
  }
  return min;
};

// console.log(shortestDistance(["practice", "makes", "perfect", "coding", "makes"], "coding", "practice"));
// console.log(shortestDistance(["a", "c", "a", "b"], "a", "b"));
console.log(shortestDistance(["a", "b", "c", "d", "d"], "a", "d"))