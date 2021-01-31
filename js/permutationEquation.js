//https://www.hackerrank.com/challenges/permutation-equations/problem
/**
 *
 * @param {number[]} p
 * @returns {number[]}
 */
const permutationEquation = (p) => {
  const map = p.reduce((p, c, i) => ({ ...p, [c]: i + 1 }), {});
  return new Array(p.length).fill(0).map((_, i) => map[map[i + 1]]);
};
console.log(permutationEquation([4, 3, 5, 1, 2]));
