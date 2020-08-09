// https://stackoverflow.com/questions/4856717/javascript-equivalent-of-pythons-zip-function
function transpose(A: any[][]): any[][] {
  
  return A[0].map((_, c) => A.map(row => row[c]))
};

console.log(transpose([['row0col0', 'row0col1', 'row0col2'],
['row1col0', 'row1col1', 'row1col2']]))