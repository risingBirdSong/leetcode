
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

class BST {
  constructor(public root: TreeNode | null) {
    this.root = root;
  }
  insert(input: number | number[]) {
    let newNode: TreeNode;
    if (typeof input === "number") {
      newNode = new TreeNode(input);
      if (this.root === null) {
        this.root = newNode;
      }
      this.insertNode(this.root, newNode);

    }
    else {
      for (let num of input) {
        newNode = new TreeNode(num);
        if (this.root === null) {
          this.root = newNode;
        }
        this.insertNode(this.root, newNode);
      }
    }

  }
  private insertNode(node: TreeNode, newNode: TreeNode) {

    if (newNode.val < node.val) {
      if (!node.left) {
        node.left = newNode;
      }
      this.insertNode(node.left, newNode)
    }
    else if (newNode.val > node.val) {
      if (!node.right) {
        node.right = newNode;
      }
      this.insertNode(node.right, newNode);
    }

  }
  public inOrderPrint() {
    if (!this.root) {
      console.log("no root!");
      return false;
    }
    const recurse = (node: TreeNode) => {
      if (node.left) {
        recurse(node.left)
      }
      console.log("val->", node.val);
      if (node.right) {
        recurse(node.right);
      }
    }
    recurse(this.root)
  }
}

const bst = new BST(new TreeNode(10));
// bst.insert(9);
// bst.insert(11);
// bst.insert(8);
// bst.insert(12);
// bst.insert(7);
// bst.insert(13);
bst.insert([9, 11, 8, 12, 7, 13])
bst.inOrderPrint();



//generate a Tree from an array
function insertLevelOrder(numbers: number[], root: TreeNode | null, i: number) {
  if (i < numbers.length) {
    let temp = new TreeNode(numbers[i]);
    root = temp;
    root.left = insertLevelOrder(numbers, root.left, 2 * i + 1);
    root.right = insertLevelOrder(numbers, root.right, 2 * i + 2);
  }
  return root
}


// let treeA = new TreeNode();
// let numsA = [1, 2, 3, 4, 5, 6, 6, 6, 6, 6];
// let testA = insertLevelOrder(numsA, treeA, 0);
// console.log("test A", testA);

