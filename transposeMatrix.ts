function transpose(A: (number | undefined)[][]): (number | undefined)[][] {
  let x = 0;
  let y = 0;
  if (A[0].length > A.length) {
    while (A[0].length > A.length) {
      A.push(Array(A[0].length).fill(undefined))
    }
  }
  else if (A[0].length < A.length) {
    while (A[0].length < A.length) {
      for (let arr of A) {
        arr.push(undefined)
      }
    }
  }
  console.log("A", A);

  while (A[y]?.[x]) {
    for (let i = x; i < A[y].length; i++) {
      let temp = A[y]?.[i];
      A[y][i] = A[i][y]
      A[i][y] = temp
    }
    x++;
    y++;
  }
  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < A[i].length; j++) {
      if (typeof A[i][j] !== "number") {
        A[i].splice(j, 1);
        //rewind
        j = 0;
      }
    }
    if (A[i].length === 0) {
      A.splice(i, 1);
    }
    if (A[i].every((val) => val === undefined)) {
      A.splice(i, 1);
      i--;
    }
  }
  return A;
};

// console.log(transpose([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));
// console.log(transpose([[1, 2, 3], [4, 5, 6]]));
// console.log(transpose([[1, 2, 3]]));
// console.log(transpose(
//   [[5], [8]]));
console.log(transpose(

  [[-51, 36, -31, 23], [3, 12, -31, 65], [-20, 2, -42, -62], [0, -49, 75, 77], [-52, 46, 45, 37], [-98, 17, 14, 78], [50, 88, -15, -31], [84, -59, -96, 23], [42, 1, 48, 81], [-92, 95, -71, 37]]));

// 1 2 3
// 4 5 6 
// 7 8 9 

// 1 4 7
// 2 5 8
// 3 6 9 


// 1 2 3
// 4 5 6

// 1 4
// 2 5
// 3 6

//[[-51,3,-20,-52,-98,50,84,42,-92],[36,12,2,-49,46,17,88,-59,1,95],[-31,-31,-42,75,45,14,-15,-96,48,-71],[23,65,-62,77,37,78,-31,23,81,37]]

//[[-51,3,-20,0,-52,-98,50,84,42,-92],[36,12,2,-49,46,17,88,-59,1,95],[-31,-31,-42,75,45,14,-15,-96,48,-71],[23,65,-62,77,37,78,-31,23,81,37]]