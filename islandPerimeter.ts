function islandPerimeter(grid: number[][]): number {
  let perimeter = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 1) {

        try {
          if (grid[i - 1][j] === 0) {

          }
          grid[i - 1][j];
          grid[i][j + 1];
          grid[i][j - 1];
        }
        catch (e) {
          console.log("north off the grid")
        }
        try {
          if (grid[i + 1][j] === 0) {

          }
        }
        catch (e) {
          console.log("south off the grid");

        }
        try {
          if (grid[i][j + 1] === 0) {

          }
        }
        catch (e) {
          console.log("east off the grid");
        }
        try {
          if (grid[i][j - 1] === 0) {
            console.log("stepping west");
          }
        }
        catch (e) {
          console.log("west off the grid");
        }
      }
    }
  }
  return 0;
};

let islandInput = [
  [0, 1, 0, 0],
  [1, 1, 1, 0],
  [0, 1, 0, 0],
  [1, 1, 0, 0]];


console.log(islandPerimeter(islandInput));
