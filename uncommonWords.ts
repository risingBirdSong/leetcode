interface trackerI {
  [keyword: string]: number
}
function uncommonFromSentences(A: string, B: string): string[] {
  let dict: trackerI = {};
  (A + " " + B).split(" ").forEach((str) => {
    dict[str] ? dict[str]++ : dict[str] = 1;
  });
  return Object.entries(dict).filter((entry) => entry[1] > 1 ? false : true).map((entry => entry[0]))
};
console.log(uncommonFromSentences(
  "s z ejt",
  "s z z z s"));
