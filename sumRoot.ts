
class TreeNodeRootSum {
  val: number
  left: TreeNodeRootSum | null
  right: TreeNodeRootSum | null
  constructor(val?: number, left?: TreeNodeRootSum | null, right?: TreeNodeRootSum | null) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
  }
}


function sumRootToLeaf(root: TreeNodeRootSum | null): number {
  let sum = 0;
  let binary = 0;
  const recurse = (node: TreeNodeRootSum) => {
    binary += node.val;
    if (node.left) {
      recurse(node.left);
    }
    if (node.right) {
      recurse(node.right);
    }
    else {
      sum += parseInt(String(binary), 2);
    }
  }
  return sum;
};

// console.log(sumRootToLeaf());
