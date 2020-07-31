function removeDuplicates(s: string): string {
  const toArr = s.split('');
  for (let i = 0; i < toArr.length; i++) {
    while (toArr[i] && toArr[i] === toArr[i + 1]) {
      toArr.splice(i, 2);
      if (i > 0) {
        i -= 1;
      }
    }
  }
  return toArr.join('');
};

console.log(removeDuplicates("abccbaxzy"));