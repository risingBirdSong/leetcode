interface minDistanceComplementI {
  [keyof: number]: number;
}
interface numAndIndx {
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
  console.log("minDistance", minDistance);
  let minDistanceComplement: minDistanceComplementI = {}
  let doesItExist: numAndIndx = {};
  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    if (!minDistanceComplement[num]) {
      minDistanceComplement[num] = num - minDistance;
      doesItExist[num] = i;
    }
  }
  console.log("minDistanceComplement", minDistanceComplement);
  console.log("doesItExist", doesItExist);

  let output: number[][] = [];
  arr.sort((a, b) => a - b);
  console.log("arr", arr);
  for (let num of arr) {
    if (minDistanceComplement[num + minDistance] = num) {
      output.push([minDistanceComplement[num], num]);
    }
  }
  return output;
};


console.log(minimumAbsDifference([4, 2, 1, 3]));
