function shiftGrid(grid: number[][], k: number): number[][] {
  const innerRecurse = (innerGrid: number[][]) => {
    for (let i = 0; i < innerGrid.length; i++) {
      let temp;
      for (let j = 1; j < innerGrid[i].length; j++) {
        let nextTemp = innerGrid[i][j];
        if (innerGrid[i][j + 1] === undefined && i < grid.length) {
          let first = innerGrid[i][0];
          console.log("first", first);

          innerGrid[i][0] = innerGrid[i][j];
          if (typeof temp === "undefined") {
            innerGrid[i][j] = first;
            continue;
          }
        }
        //@ts-ignore
        if (typeof temp === "number") {
          innerGrid[i][j] = temp;
        }
        else {
          innerGrid[i][j] = innerGrid[i][j - 1]
        }
        temp = nextTemp;
      }
    }
    let lastVal = innerGrid[innerGrid.length - 1][0];
    let temp;
    for (let i = 0; i < innerGrid.length; i++) {
      //@ts-ignore
      let nextTemp = innerGrid[i][0]
      if (typeof temp === "number") {
        innerGrid[i][0] = temp;
      }
      temp = nextTemp;
    }
    innerGrid[0][0] = lastVal;
    k--;
    if (k > 0) {
      innerRecurse(innerGrid);
    }
  }
  innerRecurse(grid);
  return grid;
};

// console.log(shiftGrid( [[1,2,3],[4,5,6],[7,8,9]], 3))
//[[-649,-730],[-827,613],[882,2]]

console.log(shiftGrid([[3,8,1,9],[19,7,2,5],[4,6,11,10],[12,0,21,13]], 4))
