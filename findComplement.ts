function findComplement(num: number): number {
  return parseInt(num.toString(2).split("").map((str) => Number(str)).map(bnry => bnry === 1 ? 0 : 1).join(""), 2)
};
// console.log(parseInt(mapped, 2));

console.log(findComplement(1));
