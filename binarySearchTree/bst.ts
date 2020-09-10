
class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
  }
}


function insertLevelOrder(numbers: number[], root: TreeNode | null, i: number) {
  if (i < numbers.length) {
    let temp = new TreeNode(numbers[i]);
    root = temp;
    root.left = insertLevelOrder(numbers, root.left, 2 * i + 1);
    root.right = insertLevelOrder(numbers, root.right, 2 * i + 2);
  }
  return root
}

let treeA = new TreeNode();
let numsA = [1, 2, 3, 4, 5, 6, 6, 6, 6, 6];
let testA = insertLevelOrder(numsA, treeA, 0);
console.log("test A", testA);
