function relativeSortArray(arr1: number[], arr2: number[]): number[] {
  let arr1Copy = [...arr1];
  let arr1MatchArr2 = arr1Copy.filter((val) => arr2.find((num) => {
    if (val === 0) {
      //why is this happening? This part is confusing to me. returning 0 doesnt return 0, but returing "zero" returns 0 ???
      return "zero";
    }
    if (val === num) {
      return val;
    }
  }));
  let arr1Extras = arr1Copy.filter((val) => !arr2.find((num) => {
    if (val === 0) {
      //lol at this double negating topsy turvy logic that actually works
      // return true so that the bang returns false, to weed it out if arr2 contains it
      return true;
    }
    if (num === val) {
      return val;
    }

  }));
  console.log("arr1Extras", arr1Extras);

  arr1MatchArr2.sort((a, b) => {
    if (arr2.indexOf(a) > arr2.indexOf(b)) {
      return 1;
    }
    else if (arr2.indexOf(a) <= arr2.indexOf(b)) {
      return -1;
    }
    else return 0;
  });
  arr1Extras.sort((a, b) => a - b);
  return arr1MatchArr2.concat(arr1Extras);
};
let arr1 =
  [2, 21, 43, 38, 0, 42, 33, 7, 24, 13, 12, 27, 12, 24, 5, 23, 29, 48, 30, 31], arr2 = [2, 42, 38, 0, 43, 21]
  ;
console.log(relativeSortArray(arr1, arr2))


let zerotest = [2, 0, -3, 4, 0, -5, 6, -6, 8, 0, 9, -11];
// console.log(zerotest.sort((a, b) => a - b));