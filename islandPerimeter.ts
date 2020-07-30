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

let islandInput = [
  [0, 1, 0, 0],
  [1, 1, 1, 0],
  [0, 1, 0, 0],
  [1, 1, 0, 0]];


console.log(islandPerimeter(islandInput));
