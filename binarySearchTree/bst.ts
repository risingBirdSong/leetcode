
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

interface objTrackerI {
  [keyof: number]: number;
}
class BST {
  private objTracker: objTrackerI;
  constructor(public root: TreeNode) {
    this.root = root;
    this.objTracker = {};
    this.objTracker[root.val] = 1;
  }
  insert(input: number | number[]) {
    let newNode: TreeNode;
    if (typeof input === "number") {
      newNode = new TreeNode(input);
      this.insertNode(this.root, newNode);
    }
    else {
      for (let num of input) {
        newNode = new TreeNode(num);
        this.insertNode(this.root, newNode);
      }
    }

  }
  private insertNode(node: TreeNode, newNode: TreeNode) {

    if (newNode.val < node.val) {
      if (!node.left) {
        this.objTracker[newNode.val] = 1;
        node.left = newNode;
      }
      this.insertNode(node.left, newNode)
    }
    else if (newNode.val > node.val) {
      if (!node.right) {
        this.objTracker[newNode.val] = 1;
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
  public getSize() {

    return Object.entries(this.objTracker).length;
  }
  //a hash version
  public doesContainHash(num: number) {
    console.log("is it contained?", this.objTracker[num] ? "yes" : "no");
    console.log("hash", this.objTracker);

    return this.objTracker[num]
  }
  // a recursive search version
  public doesContainRecurse(num: number) {
    const recurse = (node: TreeNode): boolean => {
      if (node.val === num) {
        console.log("found it!", node.val);
        return true;
      }
      else if (num < node.val && node.left) {
        return recurse(node.left);
      } else if (num > node.val && node.right) {
        return recurse(node.right);
      }
      console.log("val not found");
      return false;
    }
    if (!this.root) {
      console.log("no root");
      return false;
    } return recurse(this.root)
  }

  public remove(num: number) {
    let parent: TreeNode;
    const recurse = (node: TreeNode) => {
      if (num < node.val && node.left) {
        parent = node;
        recurse(node.left);
      } else if (num > node.val && node.right) {
        parent = node;
        recurse(node.right);
      } else if (num === node.val) {
        if (!node.left && !node.right) {
          delete this.objTracker[num];
          //how to get rid of this ts-ignore?
          //@ts-ignore
          node = null;
        } else if (node.left && node.right) {
          let temp = node;
          delete this.objTracker[temp.val];
          let descend = node.left;
          while (descend.right !== null) {
            descend = descend.right;
          }
          temp.val = descend.val;
          //@ts-ignore
          descend = null;
        }
        else if (node.val < parent.val) {
          parent.left = node.right;
          delete this.objTracker[num];
          //@ts-ignore
          node = null;
        } else if (node.val > parent.val) {
          parent.right = node.left;
          delete this.objTracker[num];
          //@ts-ignore
          node = null;
        }

      }
    }
    recurse(this.root);
  }
}

const bst = new BST(new TreeNode(4));
bst.insert([3, 2, 1]);
bst.remove(1)
bst.inOrderPrint();
// console.log("contains", bst.doesContainRecurse(7));

// console.log("search recurse", bst.doesContainRecurse(13));


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

