let trueToeplitzM = [
  [1, 2, 3, 4],
  [5, 1, 2, 3],
  [9, 5, 1, 2]
]
let falseToeplitz = [
  [1, 2],
  [2, 2]
];

function isToeplitzMatrix(matrix: number[][]): boolean {
  let validToeplitz = true;
  let testX = 0;
  let testY = 0;
  while (matrix[testY]?.[testX]) {
    console.log(matrix[testY]?.[testX]);
    testX++;
    testY++;
  }
  return false;
};

console.log(isToeplitzMatrix(trueToeplitzM));
