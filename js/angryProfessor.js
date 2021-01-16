/**
 *
 * @param {number} k
 * @param {number[]} a
 */
const angryProfessor = (k, a) =>
  a.reduce((p, c) => (c <= 0 ? p + 1 : p), 0) >= k ? "NO" : "YES";

console.log(angryProfessor(2, "0 -1 2 1".split(" ")));
