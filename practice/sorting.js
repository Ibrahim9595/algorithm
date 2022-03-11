/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let last1 = m - 1;
  let last2 = n - 1;
  let lastMerged = m + n - 1;

  while (last2 >= 0) {
    if (last1 >= 0 && nums1[last1] > nums2[last2])
      nums1[lastMerged--] = nums1[last1--];
    else nums1[lastMerged--] = nums2[last2--];
  }
};

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = (strs) =>
  Object.values(
    strs.reduce((p, str) => {
      const key = str.split("").sort().join("");
      return Object.assign(p, { [key]: (p[key] || []).concat(str) });
    }, {})
  );

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = (nums, target) => {
  const recurse = (start, end) => {
    if (start > end) return -1;
    const mid = parseInt((start + end) / 2);
    if (nums[mid] === target) return mid;
    const rightHalf = recurse(start, mid - 1);
    const leftHalf = recurse(mid + 1, end);

    return rightHalf !== -1 ? rightHalf : leftHalf;
  };

  return recurse(0, nums.length - 1) !== -1;
};

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
const searchMatrix = (matrix, target) => {
  let c = matrix[0].length - 1;
  let r = 0;

  while (r < matrix.length && c >= 0) {
    if (matrix[r][c] === target) return true;
    if (matrix[r][c] > target) c--;
    else if (matrix[r][c] < target) r++;
  }

  return false;
};

console.log(
  searchMatrix(
    [
      [1, 4, 7, 11, 15],
      [2, 5, 8, 12, 19],
      [3, 6, 9, 16, 22],
      [10, 13, 14, 17, 24],
      [18, 21, 23, 26, 30],
    ],
    5
  )
);
