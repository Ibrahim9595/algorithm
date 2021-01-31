//https://www.hackerrank.com/challenges/utopian-tree/problem
/**
 * @returns {Function}
 */
const memoizeTree = () => {
  const memo = new Array(61)
    .fill(0)
    .reduce(
      (p, _, i) =>
        i === 0
          ? p
          : i % 2 === 1
          ? [{ ...p[0], [i]: p[1] * 2 }, p[1] * 2]
          : [{ ...p[0], [i]: p[1] + 1 }, p[1] + 1],
      [{ 0: 1 }, 1]
    )[0];

  return (n) => memo[n];
};

/**
 * @param {number} n
 * @returns {number}
 */
const utopianTree = memoizeTree();

console.log(utopianTree(4));
