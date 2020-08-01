function sortByBits(arr: number[]): number[] {
  return arr.sort((a, b) => {
    let bitA = dec2bin(a);
    let bitB = dec2bin(b);
    let onesA = countOnes(bitA);
    let onesB = countOnes(bitB);

    if (onesA > onesB) {
      return 1;
    }
    else if (onesA < onesB) {
      return -1;
    }
    else {
      if (a > b) {
        return 1;
      }
      else if (a < b) {
        return -1;
      }
      else return 0;
    }
  })
};
function dec2bin(dec: number) {
  return (dec >>> 0).toString(2);
}

function countOnes(numBitStr: string) {
  return numBitStr.split('').reduce((a, c) => a += Number(c), 0);
}

console.log(dec2bin(1024));
// console.log(dec2bin(23).split('').reduce((a, c) => a += Number(c), 0));


console.log(sortByBits([1024, 512, 256, 128, 64, 32, 16, 8, 4, 2, 1]));
// console.log(sortByBits([0, 1, 2, 3, 4, 5, 6, 7, 8]));

// [0,1,2,4,8,3,5,6,7]
