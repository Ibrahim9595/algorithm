//https://www.hackerrank.com/challenges/library-fine/problem

/**
 *
 * @param {number} d1
 * @param {number} m1
 * @param {number} y1
 * @param {number} d2
 * @param {number} m2
 * @param {number} y2
 */
const libraryFine = (d1, m1, y1, d2, m2, y2) =>
  Math.max(
    y1 > y2 ? 10000 : 0,
    y1 === y2 ? (m1 - m2) * 500 : 0,
    y1 === y2 && m1 === m2 ? (d1 - d2) * 15 : 0,
    0
  );

console.log(
  [
    [10, 12, 2017, 1, 12, 2017],
    [1, 11, 2017, 1, 9, 2017],
    [1, 1, 2020, 1, 5, 2017],
    [1, 1, 2017, 1, 1, 2020],
  ].map((el) => libraryFine(...el))
);
