// https://www.hackerrank.com/challenges/find-digits/problem?isFullScreen=true

/**
 *
 * @param {number} n
 */
const findDigits = (n) =>
  n
    .toString()
    .split("")
    .filter((el) => n % el === 0).length;

console.log(findDigits(1000000002));
