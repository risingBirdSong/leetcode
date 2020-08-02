
interface treeNodeI {
  val: number;
  children: TreeNode[] | null;
}

// function treeNode(val: number, children: treeNodeI[] | null): treeNodeI {
//   this.val = val;
//   this.children = children;
//   return this;
// }

class TreeNode implements treeNodeI {
  constructor(public val: number, public children: treeNodeI[] | null) {
    this.val = val;
    this.children = children;
  }
}

let five = new TreeNode(5, null);
let six = new TreeNode(6, null);

let four = new TreeNode(4, null);
let two = new TreeNode(2, null)
let three = new TreeNode(3, [five, six]);

let one = new TreeNode(1, [three, two, four]);

function exploreTree(rootNode: TreeNode) {
  let arrValues: number[] = [];
  // let arrayContainer = [];
  let recurse = (node: TreeNode) => {
    arrValues.push(node.val);
    if (node.children) {
      for (let child of node.children) {
        recurse(child);
      }
    }
  }
  recurse(rootNode);
  console.log('arrValues', arrValues);
  // console.log('arrayContainer', arrayContainer);
}
// exploreTree(one);

function treeFromArr(input: (number | null)[]) {
  let root = new TreeNode(input[0] as number, []);
  let nextRoot: TreeNode;
  let directChildren: boolean = true;
  let finish: boolean = false;
  const recurse = (idx: number) => {
    for (let i = idx; i < input.length; i++) {
      let cur = input[i];
      if (cur && directChildren) {
        if (finish) {
          return;
        }
        root.children?.push(new TreeNode(cur, []));
        if (i === input.length - 1) {
          finish = true;
        }
      }
      else if (cur && !directChildren) {
        if (finish) {
          return;
        }
        nextRoot.children?.push(new TreeNode(cur, []));
        if (i === input.length - 1) {
          finish = true;
        }
      }
      else {
        //@ts-ignore
        if (root.children[0] && directChildren) {
          //@ts-ignore
          nextRoot = root.children[0];
        }
        //@ts-ignore
        else if (nextRoot.children[0] && !directChildren) {
          //@ts-ignore
          nextRoot = nextRoot.children[0];
        }
        directChildren = false;
        recurse(i + 1);
      }
    }
  }
  recurse(2);
  return root;
}
// console.log(treeFromArr([1, null, 3, 2, 4, null, 5, 6]));

let newTree = treeFromArr([1, null, 3, 2, 4, null, 5, 6, null, 7, 8, null, 9, 10]);

console.log("end", newTree);


function treeFromArrTwo(input: (number | null)[]) {
  let root = new TreeNode(input[0] as number, []);
  const original = root;
  for (let i = 2; i < input.length; i++) {
    let cur = input[i];
    if (typeof cur === 'number') {
      root.children?.push(new TreeNode(cur, []));
    }
    else {
      let amountToSkip = 0;
      //i++ right away in the else because were counting additional nulls
      // the first is the vertical separator while additional nulls are horizontal separators.
      i++;
      while (!input[i]) {
        i++;
        amountToSkip++;
      }
      //@ts-ignore
      root = root.children[amountToSkip];
    }
  }
  return original;
}


let secondTree = treeFromArrTwo([1, null, 3, 2, 4, null, null, 5, 6, null, 7, 8, null, 9, 10]);

console.log(secondTree);