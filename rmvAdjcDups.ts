function removeDuplicates(s: string): string {
  const toArr = s.split('');
  const recurse = (idx: number, justDeleted: boolean) => {
    for (let i = idx; i < toArr.length; i++) {
      if (toArr[i] === toArr[i + 1]) {
        toArr.splice(i, 2);
        recurse(i, true)
      }
      if (justDeleted === true && toArr[i - 1] === toArr[i]) {
        toArr.splice(i - 1, 2);
        recurse(i, true);
      }
      justDeleted = false;
    }
  }
  recurse(0, false);
  return toArr.join('');
};

console.log(removeDuplicates("abbaca"));