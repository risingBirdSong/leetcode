function shortestDistance(words: string[], word1: string, word2: string): number {
  let currentWord: string | undefined = undefined;
  let complement: string | undefined = undefined;
  let currentWordEncountered: boolean = false;
  let complelemntWordEncountered: boolean = false;
  let counts = [];
  let count = 0;
  for (let word of words) {
    if (currentWord) {
      count++;
    }
    if (currentWordEncountered === true && word === currentWord) {
      count = 0;
    }

    if (currentWordEncountered === true && complelemntWordEncountered === false && word === complement) {
      counts.push(count);
      count = 0;
      currentWord = word;
      currentWordEncountered = true;
      complement = [word1, word2].find((wrd) => wrd !== word);
      complelemntWordEncountered = false;
    }

    if (currentWordEncountered === false && complelemntWordEncountered === false) {

      if (word === word1) {
        currentWordEncountered = true;
        currentWord = word1;
        complement = word2;
      }
      else if (word === word2) {
        currentWordEncountered = true;
        currentWord = word2;
        complement = word1;
      }
    }
  }
  return counts.sort((a, b) => a - b)[0] || 0;
};

// if (currentWordEncountered === false && complelemntWordEncountered === true && word === currentWord) {
//   counts.push(count);
//   count = 0;
//   currentWord = word;
//   currentWordEncountered = true;
//   complement = [word1, word2].find((wrd) => wrd !== currentWord);
//   complelemntWordEncountered = false;
// }
// initializing 

// console.log(shortestDistance(["a", "c", "b", "d", "d", "d", "a", "e", "e", "e", "e", "e", "b"],
//   "a",
//   "b"));
console.log(shortestDistance(["practice", "makes", "perfect", "coding", "makes"], "coding", "practice"));
console.log(shortestDistance(["a", "c", "a", "b"],
  "a",
  "b"));
// console.log(shortestDistance(["a", "b", "c", "d", "d"],
//   "a",
//   "d"))