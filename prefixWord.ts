function isPrefixOfWord(sentence: string, searchWord: string): number {
  let split = sentence.split(" ");
  for (let i = 0; i < split.length; i++) {
    if (split[i].substr(0, searchWord.length) === searchWord) {
      return i + 1;
    }
  }
  return -1;
};



console.log(isPrefixOfWord("i love eating burger", "burg"));