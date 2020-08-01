
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


exploreTree(one);
