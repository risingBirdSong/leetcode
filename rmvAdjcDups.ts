function removeDuplicates(s: string): string {
  const toArr = s.split('');
  const recurse = (sArr: string[]) => {
    for (let i = 0; i < sArr.length; i++) {
      if (sArr[i] === sArr[i + 1]) {
        sArr.splice(i, 2);
        recurse(sArr);
      }
    }
  }
  recurse(toArr);
  return toArr.join('');
};

console.log(removeDuplicates("abbaca"));