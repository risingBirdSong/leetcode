function isMonotonic(A: number[]): boolean {
  let ascending : boolean;
  if (A[1] > A[0]){
    ascending = true;
  }
  
  else{
    ascending = false;
  }
  for (let i = 2; i < A.length; i ++){
    if (ascending === true){
     if (A[i] < A[i-1]) {
        return false;
      }
    }
    else if (ascending === false){
      if (A[i] > A[i-1]) {
        return false;
      }
    }
  }
  return true;
};

console.log(isMonotonic([1,2,2,3]));