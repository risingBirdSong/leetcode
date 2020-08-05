interface letterAmount {
  [key: string]: number;
}

function commonChars(A: string[]): string[] {
  let exhaustiveString: string = '';
  let allLetterAmounts: letterAmount[] = [];
  A.forEach((str) => {
    exhaustiveString += str;
    allLetterAmounts.push(countLetters(str));
  })
  let allCandidates: letterAmount = countLetters(exhaustiveString);
  for (let str in allCandidates) {
    allLetterAmounts.forEach((amount) => {
      if (!amount[str]) {
        allCandidates[str] = -1;
      }
      else {
        allCandidates[str] = Math.min(allCandidates[str], amount[str])
      }
    })
  }
  for (let str in allCandidates) {
    allCandidates[str] === -1 ? delete allCandidates[str] : "";
  }
  let output: string[] = [];
  for (let entry of Object.entries(allCandidates)) {
    for (let i = 0; i < entry[1]; i++) {
      output.push(entry[0])
    }
  }
  return output
};

function countLetters(str: string): letterAmount {
  let obj: letterAmount = {};
  Array.from(str).forEach((ltr) => {
    obj[ltr] ? obj[ltr]++ : obj[ltr] = 1;
  })
  return obj;
}

console.log(commonChars(["bellax", "label", "roller"]));