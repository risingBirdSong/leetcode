function shortestToChar(S: string, C: string): number[] {
  let idxs: number[] = [];
  for (let i = 0; i < S.length; i++) {
    let ltr = S[i]
    ltr === C ? idxs.push(i) : ""
  }
  let output: number[] = [];
  for (let i = 0; i < S.length; i++) {
    let min: number = Infinity;
    for (let idx of idxs) {
      min = Math.min(min, Math.abs(idx - i));
    }
    output.push(min);
  }
  return output;
};

console.log(shortestToChar("loveleetcode", "e"));
