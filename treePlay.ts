
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
  const recurse = (idx: number) => {
    for (let i = idx; i < input.length; i++) {
      let cur = input[i];
      if (cur && directChildren) {
        root.children?.push(new TreeNode(cur, []));
      }
      else if (cur && !directChildren) {
        nextRoot.children?.push(new TreeNode(cur, []));
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
        console.log("i should only be called once");
        recurse(i + 1);
      }
    }
  }
  recurse(2);
  return root;
}
// console.log(treeFromArr([1, null, 3, 2, 4, null, 5, 6]));

let newTree = treeFromArr([1, null, 3, 2, 4, null, 5, 6]);

console.log("end", newTree);
