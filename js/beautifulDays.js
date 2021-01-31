//https://www.hackerrank.com/challenges/beautiful-days-at-the-movies/problem
/**
 *
 * @param {number} i
 * @param {number} j
 * @param {number} k
 */
function beautifulDays(i, j, k) {
  return new Array(j - i + 1)
    .fill(0)
    .map(
      (_, ind) =>
        Math.abs(
          i + ind - parseInt((i + ind).toString().split("").reverse().join(""))
        ) %
          k ===
        0
    )
    .filter((el) => el).length;
}
console.log(beautifulDays(13, 45, 3));
