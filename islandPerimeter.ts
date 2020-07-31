function islandPerimeter(grid: number[][]): number {
  let perimeter = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 1) {
        try {
          if (grid[i - 1][j] === 0) {
            perimeter += 1;
          }

        }
        catch (e) {
          perimeter += 1;
        }
        try {
          if (grid[i + 1][j] === 0) {
            perimeter += 1;
          }
        }
        catch (e) {
          perimeter += 1;
        }
        let stepRight = grid[i][j + 1];
        if (stepRight === 0 || stepRight === undefined) {
          perimeter += 1;
        }
        let stepLeft = grid[i][j - 1];
        if (stepLeft === 0 || stepLeft === undefined) {
          perimeter += 1;
        }
      }
    }
  }
  return perimeter;;
};

function islandPerimeterA(grid: number[][]): number {
  let perimeter = 0;
  let findLandI: number = 0;
  let findLandJ: number = 0;
  let count = 0;
  loopFirst:
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 1) {
        findLandI = i;
        findLandJ = j;
        break loopFirst;
      }
    }
  }

  let innerRecurse = (i: number, j: number) => {
    //water checking
    try {
      if (grid[i - 1][j] === 0) {
        perimeter += 1;
      }
    }
    catch (e) {
      perimeter += 1;
    }
    try {
      if (grid[i + 1][j] === 0) {
        perimeter += 1;
      }
    }
    catch (e) {
      perimeter += 1;
    }
    if (grid[i][j - 1] === 0 || grid[i][j - 1] === undefined) {
      perimeter += 1;
    }
    if (grid[i][j + 1] === 0 || grid[i][j + 1] === undefined) {
      perimeter += 1;
    }
    //change this land to -1 so its not rechecked
    grid[i][j] = -1;
    //recurse on land

    if (i - 1 >= 0) {
      if (grid[i - 1][j] === 1) {
        innerRecurse(i - 1, j);
      }
    }
    if (i + 1 < grid.length) {
      if (grid[i + 1][j] === 1) {
        innerRecurse(i + 1, j);
      }
    }
    if (grid[i][j - 1] === 1) {
      innerRecurse(i, j - 1);
    }
    if (grid[i][j + 1] === 1) {
      innerRecurse(i, j + 1);
    }
  }
  innerRecurse(findLandI, findLandJ);
  return perimeter;
}

let islandInput = [
  [0, 1, 0, 0],
  [1, 1, 1, 0],
  [0, 1, 0, 0],
  [1, 1, 0, 0]];

let islandInputA = [[1, 0, 1], [1, 1, 1]];


console.log(islandPerimeterA(islandInputA));
