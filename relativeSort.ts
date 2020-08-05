function relativeSortArray(arr1: number[], arr2: number[]): number[] {
  let arr1Copy = [...arr1];
  let arr1Extras = arr1Copy.filter((val) => arr2.find((num) => num === val));
  let arr1Dupes = arr1Copy.filter((val) => !arr2.find((num) => num === val));
  arr1Extras.sort((a, b) => {
    if (arr2.indexOf(a) > arr2.indexOf(b)) {
      return 1;
    }
    else if (arr2.indexOf(a) <= arr2.indexOf(b)) {
      return -1;
    }
    else return 0;
  });
  arr1Dupes.sort((a, b) => a - b);
  return arr1Extras.concat(arr1Dupes);
};
let arr1 =
  [2, 21, 43, 38, 0, 42, 33, 7, 24, 13, 12, 27, 12, 24, 5, 23, 29, 48, 30, 31], arr2 = [2, 42, 38, 0, 43, 21]
  ;
console.log(relativeSortArray(arr1, arr2))
