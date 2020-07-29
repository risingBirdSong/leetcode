function kWeakestRows(mat: number[][], k: number): any {
  let reshaped = mat.map(arr => arr.reduce((a, c) => a + c));
  // https://stackoverflow.com/questions/9592740/how-can-you-sort-an-array-without-mutating-the-original-array
  let sorted = reshaped.sort((a, b) => a > b ? 1 : a < b ? -1 : 0);
  let indexes = sorted.map((val) => {
    console.log("val", val);
    console.log("index of", reshaped.indexOf(val));
    return reshaped.indexOf(val);
  });
  console.log('reshaped', reshaped);
  console.log("sorted", sorted);
  console.log("indexes", indexes);


};

let input = [[1, 1, 0, 0, 0],
[1, 1, 1, 1, 0],
[1, 0, 0, 0, 0],
[1, 1, 0, 0, 0],
[1, 1, 1, 1, 1]];

console.log(kWeakestRows(input, 3))