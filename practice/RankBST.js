class RankBSTNode {
  constructor(val, leftSize = 0, left = null, right = null) {
    this.val = val;
    this.leftSize = leftSize;
    this.left = left;
    this.right = right;
  }
}

class RankBST {
  root = null;

  insertNode(root, x) {
    if (root === null) return;

    if (x > root.val) {
      if (root.right === null) {
        root.right = new RankBSTNode(x);
      } else {
        this.insertNode(root.right, x);
      }
    } else if (x < root.val) {
      root.leftSize += 1;
      if (root.left === null) {
        root.left = new RankBSTNode(x);
      } else {
        this.insertNode(root.left, x);
      }
    } else {
      root.leftSize += 1;
    }
  }

  track(x) {
    if (this.root === null) {
      this.root = new RankBSTNode(x, 0);
    } else {
      this.insertNode(this.root, x);
    }
  }

  getNodeRank(root, x) {
    if (root === null) return -1;
    if (root.val === x) return root.leftSize;
    if (root.val > x) return this.getNodeRank(root.left, x);

    const rightRank = this.getNodeRank(root.right, x);
    return rightRank === -1 ? -1 : rightRank + 1 + root.leftSize;
  }

  getRankOfNumber(x) {
    if (this.root === null) return -1;
    return this.getNodeRank(this.root, x);
  }
}

/**
 * @param {number[]} arr
 * @returns
 */
const alternate = (arr) => {
  let peak = false;

  for (let i = 0; i < arr.length - 1; i++) {
    if (peak) {
      // Inserting peak
      if (arr[i] < arr[i + 1]) {
        swap(arr, i, i + 1);
      }
    } else {
      // Inserting valley
      if (arr[i] > arr[i + 1]) {
        swap(arr, i, i + 1);
      }
    }
    peak = !peak;
  }
};

const swap = (arr, i, j) => {
  let t = arr[i];
  arr[i] = arr[j];
  arr[j] = t;
};

const sortvalleyPeak = (array) => {
  for (let i = 1; i < array.length - 1; i += 2) {
    let biggestlndex = maxlndex(array, i - 1, i, i + 1);
    if (i != biggestlndex) {
      swap(array, i, biggestlndex);
    }
  }
};

const maxlndex = (array, a, b, c) => {
  const max = Math.max(array[a], array[b], array[c]);
  if (max === array[a]) return a;
  else if (max === array[b]) return b;

  return c;
};

const test = () => {
  const equalArray = (arr) => {
    for (let i = 1; i < arr.length - 1; i += 2) {
      if (arr[i] < arr[i + 1] || arr[i] < arr[i - 1]) return false;
    }
    return true;
  };

  while (true) {
    const arr = new Array(10)
      .fill(0)
      .map((_) => Math.floor(100 * Math.random()));
    const c1 = arr.slice(0);
    const c2 = arr.slice(0);
    sortvalleyPeak(c1);
    alternate(c2);
    if (!equalArray(c1) || !equalArray(c2)) {
      console.log(arr, c1, c2);
      break;
    } else {
      console.log("SUCCESS");
    }
  }
};

test();
