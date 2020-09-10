//  ns, ew .toString : index
interface visitedI {
  [keyof: string]: number;
}

function isPathCrossing(path: string): boolean {
  let ns = 0;
  let ew = 0;
  let visited: visitedI = {};
  for (let i = 0; i < path.length; i++) {

    visited[`${ns}${ew}`] = i;
    let ltr = path[i];
    if (ltr === "N") {
      ns += 1;
    } else if (ltr === "S") {
      ns -= 1;
    } else if (ltr === "E") {
      ew += 1;
    } else if (ltr === "W") {
      ew -= 1;
    }
    if (typeof visited[`${ns}${ew}`] === "number") {
      return true;
    }
  }
  console.log("visited", visited);
  return false;
};

// console.log((isPathCrossing("NES")));
console.log((isPathCrossing("NS")));
