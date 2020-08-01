
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
  let original = root;
  let nextRoot = new TreeNode(input[2] as number, []);
  const recurse = (idx: number) => {
    for (let i = idx; i < input.length; i++) {
      let cur = input[i];
      let next = input[i + 1];
      if (typeof cur === 'number') {
        root.children?.push(new TreeNode(cur, []))
      }
      else if (!cur && typeof next === 'number') {
        console.log("hitting");
        root = nextRoot;
        nextRoot = new TreeNode(next, []);
        recurse(i + 1);
      }

    }
  }
  recurse(2);
  return original;
}
console.log(treeFromArr([1, null, 3, 2, 4, null, 5, 6]));

let newTree = treeFromArr([1, null, 3, 2, 4, null, 5, 6, null, 7,8]);

console.log("end");
