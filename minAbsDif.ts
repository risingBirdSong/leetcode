interface minDistanceComplementI {
  [keyof: number]: number;
}
interface doesItExistI {
  [keyof: number]: number;
}

function minimumAbsDifference(arr: number[]): number[][] {
  let minDistance: number = Infinity;
  outer:
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      let comparison1 = arr[j] - arr[i];
      let comparison2 = arr[i] - arr[j];
      if (minDistance === 1) {
        break outer;
      }
      if (comparison1 >= 0) {
        minDistance = Math.min(minDistance, arr[j] - arr[i]);
      }
      if (comparison2 >= 0) {
        minDistance = Math.min(minDistance, arr[i] - arr[j]);
      }
    }
  }
  let minDistanceComplement: minDistanceComplementI = {}
  let doesItExist: doesItExistI = {};
  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    if (!minDistanceComplement[num]) {
      minDistanceComplement[num] = num - minDistance;
      doesItExist[num] = num;
    }
  }
  let output: number[][] = [];
  arr.sort((a, b) => a - b);
  for (let num of arr) {
    if (minDistanceComplement[num + minDistance] = num) {
      if (doesItExist[num - minDistance]) {
        output.push([minDistanceComplement[num], num]);
      }
    }
  }
  return output;
};


console.log(minimumAbsDifference([1, 2, 3, 4]));

// console.log("arr", arr);
// console.log("does it exist", doesItExist);

// console.log("mindDistance", minDistance);
// console.log("minDistanceComplement", minDistanceComplement);