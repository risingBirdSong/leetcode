function kWeakestRows(mat: number[][], k: number): any {
  return mat.sort((a, b) => {
    let aReduced = a.reduce((acc, cur) => acc + cur);
    let bReduced = b.reduce((acc, cur) => acc + cur);
    return aReduced > bReduced ? 1 : aReduced < bReduced ? -1 : 0
  }).filter((a, idx) => {
    return idx < k ? true : false;
  }).map(a => a.reduce((acc, cur) => acc + cur));
};

let input = [[1, 1, 0, 0, 0],
[1, 1, 1, 1, 0],
[1, 0, 0, 0, 0],
[1, 1, 0, 0, 0],
[1, 1, 1, 1, 1]];

console.log(kWeakestRows(input, 3))