//https://www.hackerrank.com/challenges/jumping-on-the-clouds-revisited/problem
/**
 *
 * @param {number[]} c
 * @param {number} k
 */
const jumpingOnClouds = (c, k, e = 100, i = 0) =>
  e !== 100 && i === 0
    ? e
    : jumpingOnClouds(c, k, e - 2 * c[i] - 1, (i + k) % c.length);

console.log(jumpingOnClouds(`1 1 1 0 1 1 0 0 0 0`.split(" "), 3));
