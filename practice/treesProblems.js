class DirectedGraph {
  constructor(l) {
    this.adjacentList = {};
    if (l) l.forEach((el) => (this.adjacentList[el] = []));
  }

  get nodes() {
    return Object.keys(this.adjacentList);
  }

  get sortedNodes() {
    return this.nodes.sort(
      (a, b) =>
        (this.adjacentList[a].length || 0) - (this.adjacentList[b].length || 0)
    );
  }

  getAdjacent(node) {
    return this.adjacentList[node];
  }

  addNode(parent, data) {
    this.adjacentList = Object.assign({}, this.adjacentList, {
      [parent]: (this.adjacentList[parent] || []).concat(data),
    });
  }

  fromDependencyList(l) {
    l.forEach(([ch, parent]) => {
      this.addNode(parent, ch);
    });
  }
}

/**
 *
 * @param {DirectedGraph} g
 */
const orderJobs = (g) => {
  // statuses[a] == 0 => visiting, == 1 => visited, doesn't exist => unvisited
  const statuses = {};
  const order = [];

  const recurse = (node) => {
    if (statuses[node] === 1) return true;
    if (statuses[node] === 0) return false;

    statuses[node] = 0;

    const dependencies = g.getAdjacent(node);
    const res = dependencies.every((d) => {
      if (statuses[d] === 0) return false;
      else if (statuses[d] === 1) return true;
      else return recurse(d);
    });

    order.push(node);
    statuses[node] = 1;

    return res;
  };

  return g.sortedNodes.every((el) => recurse(el)) === true ? order : null;
};

// const graph = new DirectedGraph(["a", "b", "c", "d", "e", "f", "g"]);
// graph.fromDependencyList([
//   ["f", "a"],
//   ["c", "a"],
//   ["b", "a"],
//   ["f", "c"],
//   ["f", "b"],
//   ["a", "e"],
//   ["b", "e"],
//   ["d", "g"],
// ]);

class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }

  insert(d) {
    const r = this;

    while (r !== null) {
      if (r.val < d) {
        if (r.right === null) break;
        r = r.right;
      } else {
        if (r.left === null) break;
        r = r.left;
      }
    }

    if (r.val < d) r.right = new TreeNode(d);
    else r.left = new TreeNode(d);
  }
}

/**
 * convert an array to tree
 * @param {any[]} arr
 */
const buildTreeFromArray = (arr) => {
  const recurse = (index) => {
    if (index >= arr.length || arr[index] === null) return null;

    const left = recurse(2 * index + 1);
    const right = recurse(2 * index + 2);

    return new TreeNode(arr[index], left, right);
  };

  return recurse(0);
};

/**
 * convert sorted array to balanced tree (minimal height)
 * @param {number[]} arr
 * @returns {TreeNode}
 */
const createMinimalBST = (arr) => {
  const recurse = (start, end) => {
    if (start > end) return null;

    const midIndex = parseInt((start + end) / 2);

    return new TreeNode(
      // node value
      arr[midIndex],
      // left subtree
      recurse(start, midIndex - 1),
      // right subtree
      recurse(midIndex + 1, end)
    );
  };

  return recurse(0, arr.length - 1);
};

/**
 * convert sorted array to balanced tree (minimal height)
 * @param {TreeNode} root
 * @returns {Record<number, TreeNode>}
 */
const getBSTLevelLists = (root) => {
  const lists = {};

  /**
   * @param {TreeNode} root
   * @param {number} level
   */
  const recurse = (root, level) => {
    if (root === null) return;

    if (lists[level] === undefined) lists[level] = [root.val];
    else lists[level].push(root.val);

    recurse(root.left, level + 1);
    recurse(root.right, level + 1);
  };

  recurse(root, 0);

  return lists;
};

/**
 * @param {TreeNode} root
 * @returns  {number}
 */
const getHeight = (root) =>
  root === null
    ? -1
    : 1 + Math.max(getHeight(root.left), getHeight(root.right));

/**
 *
 * @param {TreeNode} root
 * @returns  {boolean}
 */
const checkBalance = (root) => {
  if (root === null) [true, -1];

  const [leftBalanced, leftHeight] = checkBalance(root.left);
  const [rightBalanced, rightHeight] = checkBalance(root.right);

  return [
    leftBalanced && rightBalanced && Math.abs(leftHeight - rightHeight) <= 1,
    Math.max(leftHeight, rightHeight) + 1,
  ];
};

// /**
//  * check if tree is valid BST
//  * @param {TreeNode} root
//  * @param {(x) => boolean} pred
//  */
// const isValidBST = (root) => {
//   const recurse = (root) => {
//     if (root === null) return [true, null, null];

//     const [isValidLeft, _, max] = recurse(root.left);
//     const [isValidRight, min] = recurse(root.right);

//     const correctMin = min === null ? root.val : min;
//     const correctMax = max === null ? root.val : max;

//     return [
//       isValidLeft &&
//         isValidRight &&
//         root.val <= correctMin &&
//         root.val >= correctMax,
//       Math.min(correctMax, root.val, correctMin),
//       Math.max(correctMin, root.val, correctMax),
//     ];
//   };

//   const res = recurse(root);

//   console.log(res);

//   return res[0];
// };

/**
 * check if tree is valid BST
 * @param {TreeNode} root
 */
const isValidBSTInOrder = (root) => {
  const res = [];
  const recurse = (root) => {
    if (root === null) return;
    recurse(root.left);
    res.push(root.val);
    recurse(root.right);
  };

  recurse(root);

  for (let i = 0; i < res.length - 1; i++) {
    if (res[i] >= res[i + 1]) return false;
  }

  return true;
};

/**
 * check if tree is valid BST
 * @param {TreeNode} root
 */
const isValidBST = (root) => {
  const recurse = (n, min, max) => {
    if (n === null) return true;

    return (
      n.val > min &&
      n.val < max &&
      recurse(n.left, min, Math.min(n.val, max)) &&
      recurse(n.right, Math.max(n.val, min), max)
    );
  };

  return recurse(root, -1 * 2 ** 32, 2 ** 32);
};

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
const lowestCommonAncestor = (root, p, q) => {
  if (root === null) return null;

  if (root === p || root === q) return root;

  const left = lowestCommonAncestor(root.left, p, q);
  const right = lowestCommonAncestor(root.right, p, q);

  return left && right ? root : left || right;
};

/**
 *
 * @param {TreeNode} root
 */
const whatEver = (root) => {
  if (root === null) return [];

  const left = whatEver(root.left);
  const right = whatEver(root.right);

  console.log(left, right);

  return [
    [root.val, ...left, ...right],
    [root.val, ...right, ...left],
  ];
};

/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
  if (root === null) return false;
  if (targetSum - root.val === 0) return true;

  return (
    hasPathSum(root.left, targetSum - root.val) ||
    hasPathSum(root.right, targetSum - root.val)
  );
};

/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number}
 */
const pathSumFromRoot = (root, targetSum) =>
  root === null
    ? 0
    : (targetSum - root.val === 0 ? 1 : 0) +
      pathSumFromRoot(root.left, targetSum - root.val) +
      pathSumFromRoot(root.right, targetSum - root.val);

/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number}
 */
var pathSum = (root, targetSum) =>
  root === null
    ? 0
    : pathSumFromRoot(root, targetSum) +
      pathSum(root.left, targetSum) +
      pathSum(root.right, targetSum);

const tree = buildTreeFromArray([1, null, 2, null, 3, null, 4, null, 5, null]);

console.log(pathSum(tree, 3));
