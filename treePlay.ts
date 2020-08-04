
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
        //@ts-ignore
        if (amountToSkip >= root.children?.length - 1) {
          throw new Error("skipped past the last child!")
        }
      }
      //@ts-ignore
      root = root.children[amountToSkip];
      //backtrack once so that the next iteration will bring us to the next number so we can add it
      i--;
    }
  }
  return original;
}
//[1, null, 3, 2, 4, null, null, 5, 6, null, 7, 8, null, 9, 10]



// let secondTree = treeFromArrTwo([1, null, 3, 2, 4, null, null, 5, 6, null, null, 7, 8, null, 9, 10]);


interface NodeWithParentI {
  val: number;
  children: TreeNode[];
  parent?: TreeNode;
}

class TreeNodePrnt implements NodeWithParentI {
  constructor(public val: number, public children: NodeWithParentI[], public parent?: NodeWithParentI | undefined) {
    this.val = val;
    this.children = children;
    this.parent = parent || undefined;
  }
}

function treeFromArrThree(input: (number | null)[]) {
  let root = new TreeNodePrnt(input[0] as number, [], undefined);
  let childIdx = 0;
  let original = root;
  for (let i = 2; i < input.length; i++) {
    if (typeof input[i] === "number") {
      root.children?.push(new TreeNodePrnt(input[i] as number, [], root));
    }
    if (input[i] === null) {

      if (!root.parent) {
        //@ts-ignore
        root = root.children[childIdx];
        childIdx++;
      }
      else if (root.parent && childIdx < root?.parent?.children.length) {
        //@ts-ignore
        if (root.parent.children[childIdx]) {
          //Why is TS assuming newRoot is a TreeNode, and not TreeNodePrnt? For this reason, i'm typing "as";
          let newRoot = root.parent.children[childIdx] as TreeNodePrnt;
          newRoot.parent = root.parent;
          root = newRoot;
          childIdx++;
        }
      }
      else if (root.parent && childIdx === root.parent.children.length) {
        childIdx = 0;


        if (root.parent.children[childIdx]) {
          let newParent = root.parent.children[childIdx] as TreeNodePrnt;
          let newRoot = newParent.children[childIdx] as TreeNodePrnt;
          newRoot.parent = newParent;
          root = newRoot;
          childIdx++;
        }
      }

    }
  }
  return original;
}


//   --  1
//-2   3    4    5
//6  7  8  9 10 11 12 13
//14 15 16 17

let thirdInput = [1, null, 2, 3, 4, 5, null, 6, 7, null, 8, 9, null, 10, 11, null, 12, 13, null, 14, null, 15, null, 16, null, 17];
let thirdTree = treeFromArrThree(thirdInput);
// let thirdTree = treeFromArrThree([1, null, 2, 3, 4, 5, null, null, 6, 7, null, 8, null, 9, 10, null, null, 11, null, 12, null, 13, null, null, 14]);
console.log("stopping");










