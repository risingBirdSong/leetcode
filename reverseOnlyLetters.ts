// ltCde 917. Reverse Only Letters
//initial idea - make an array with only letters
// iterate original string, if string is a letter,
// handle reverse logic
// but if it's not, keep the order

function reverseOnlyLetters(S: string): string {
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

console.log(reverseOnlyLetters("a-bC-dEf-ghIj"));