function removeDuplicates(s: string): string {
  const toArr = s.split('');
  for (let i = 0; i < toArr.length; i++) {
    if (toArr[i] === toArr[i + 1]) {
      toArr.splice(i, 2);
      i = -1;
    }
  }
  return toArr.join('');
};

console.log(removeDuplicates("abbaca"));