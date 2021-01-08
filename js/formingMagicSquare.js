const rotate90 = (m) => m[0].map((x, i) => m.map((x) => x[i]).reverse());
/**
 *
 * @param {number[][]} arr
 * @param {number} n
 * @returns {number[][]}
 */
const rotaten90 = (arr, n) =>
  new Array(n).fill(0).reduce((p) => rotate90(p), arr);

/**
 * @returns {number[][]}
 */
const constructMagicSquares = () => {
  return new Array(4)
    .fill(0)
    .map((_, i) =>
      rotaten90(
        [
          [8, 1, 6],
          [3, 5, 7],
          [4, 9, 2],
        ],
        i
      )
    )
    .reduce((p, c) => [...p, c, c.map((_el) => _el.slice().reverse())], []);
};

/**
 *
 * @param {number[][]} arr1
 * @param {number[][]} arr2
 */
const totalChangeCost = (arr1, arr2) =>
  arr1.reduce(
    (p, row, i) =>
      p + row.reduce((acc, cell, j) => acc + Math.abs(arr2[i][j] - cell), 0),
    0
  );

/**
 *
 * @param {number[]} s
 */
function formingMagicSquare(s) {
  return Math.min(
    ...constructMagicSquares().map((arr) => totalChangeCost(arr, s))
  );
}

const s = formingMagicSquare([
  [4, 9, 2],
  [3, 5, 7],
  [8, 1, 5],
]);

console.log(s);
