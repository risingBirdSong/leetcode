// ltCde 917. Reverse Only Letters
//initial idea - make an array with only letters
// iterate original string, if string is a letter,
// handle reverse logic
// but if it's not, keep the order

function reverseOnlyLettersA(S: string): string {
  const onlyLtrs: string[] = [];
  const ltrReg = RegExp(/[a-z]/i);
  for (let str of S) {
    if (ltrReg.test(str)) {
      onlyLtrs.unshift(str)
    }
  }
  const output: (string)[] = [];
  for (let str of S) {
    if (ltrReg.test(str)) {
      let letter = onlyLtrs.shift();
      letter ?
        output.push(letter)
        : ""
    } else {
      output.push(str);
    }
  }
  return output.join("");
};

// console.log(reverseOnlyLettersA("a-bC-dEf-ghIj"));

//this next idea was fun to experiment with and runs faster (although more complicated to think about)
// because it only a has a single for loop and a lazy while loop (meaning it's just a partial iteration)
// notLtrCount and nudeLeft are leftward offsets to account for only reversing letters.
// notLtrCount is to account for left offsets for non letters our for loop has encountered
// nudgeLeft is to account for non letters our for loop hasn't encountered yet.

function reverseOnlyLetters(S: string): string {
  let notLtrCount = 0;
  let nudgeLeft = 0;
  const onlyLtr = new RegExp(/[a-z]/i);
  const output: string[] = [];
  for (let i = 0; i < S.length; i++) {
    if (onlyLtr.test(S[i])) {
      let cur = S[i];
      let reverseComplementIdx = S.length - i - 1 + notLtrCount - nudgeLeft;
      let rvrsCompLtr = S[reverseComplementIdx];
      while (!onlyLtr.test(S[reverseComplementIdx])) {
        reverseComplementIdx--;
        nudgeLeft++;
      }
      output[i] = S[reverseComplementIdx];
    }
    else {
      notLtrCount++;
      output[i] = S[i];
    }
  }
  return output.join("");
}
//j-Ih-gfE-dCba 
// console.log(reverseOnlyLetters("Test-ng-Leet-code-Q-"));
console.log(reverseOnlyLetters("a1bc2d"));
// console.log(reverseOnlyLetters("a-bC-dEf-ghIj"));


