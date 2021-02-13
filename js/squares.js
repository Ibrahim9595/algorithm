//https://www.hackerrank.com/challenges/sherlock-and-squares/problem
/**
 *
 * @param {number} a
 * @param {number} b
 */
const squares = (a, b) => {
  const start = Math.floor(Math.sqrt(a));
  return new Array(Math.ceil(Math.sqrt(b)) - start + 1)
    .fill(0)
    .map((_, i) => (start + i) ** 2)
    .filter((el) => el >= a && el <= b).length;
};

console.log(squares(24, 49));
