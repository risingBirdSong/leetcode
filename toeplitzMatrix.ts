let trueToeplitzM = [
  [1, 2, 3, 4],
  [5, 1, 2, 3],
  [9, 5, 1, 2]
]
let falseToeplitz = [
  [1, 2],
  [2, 2]
];


// taken from https://gist.github.com/lbn/3d6963731261f76330af
function matprint(mat: any[]) {
  let shape = [mat.length, mat[0].length];
  function col(mat: any[], i: number) {
    return mat.map((row: { [x: string]: any; }) => row[i]);
  }
  let colMaxes: number[] = [];
  for (let i = 0; i < shape[1]; i++) {
    colMaxes.push(Math.max.apply(null, col(mat, i).map((n: { toString: () => { (): any; new(): any; length: any; }; }) => n.toString().length)));
  }

  mat.forEach((row: { map: (arg0: (val: any, j: any) => string) => [any?, ...any[]]; }) => {
    console.log.apply(null, row.map((val: { toString: () => string; }, j: string | number) => {
      //@ts-ignore
      return new Array(colMaxes[j] - val.toString().length + 1).join(" ") + val.toString() + "  ";
    }));
  });
}

function isToeplitzMatrix(matrix: number[][]): boolean {
  let validToeplitz = true;
  for (let i = 0; i < matrix[0].length - 1; i++) {
    let gridX = 0;
    let gridY = i;
    while (matrix[gridX]?.[gridY]) {
      matrix[gridX][gridY] = -1;
      gridY++;
      gridX++;
    }
  }
  for (let i = 0; i < matrix.length - 1; i++) {
    let gridX = i;
    let gridY = 0;
    while (matrix[gridX]?.[gridY]) {
      matrix[gridX][gridY] = -1;
      gridY++;
      gridX++;
    }
  }
  console.log(matprint(matrix));
  return false;
};

console.log(isToeplitzMatrix(trueToeplitzM));
