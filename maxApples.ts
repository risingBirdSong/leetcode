function maxNumberOfApples(arr: number[]): number {
  let copyForSort = [...arr];
  copyForSort.sort((a, b) => a - b);
  let currentWeight = 0;
  let i = 0;
  while (currentWeight + copyForSort[i] < 5000 && i < arr.length) {
    currentWeight += copyForSort[i];
    i++;
  }
  return i;
};
let inputA = [100, 200, 150, 1000];
let inputB = [900, 950, 800, 1000, 700, 800];

console.log("max", maxNumberOfApples(inputB))