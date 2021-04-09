/**
 *https://www.hackerrank.com/challenges/ctci-array-left-rotation/problem?h_l=interview&playlist_slugs%5B%5D%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D%5B%5D=arrays&isFullScreen=true
 * @param {number[]} a
 * @param {number} d
 * @returns {number[]}
 */
const rotLeft = (a, d) => [...a.slice(d), ...a.slice(0, d)];

const rotLeft2 = (a, d) => {
  for (let i = 0; i < d; i++) {
    [a[i], a[a.length - 1 - i]] = [a[a.length - 1 - i], a[i]];
  }
  return a;
};

const arr = [1, 2, 3, 4, 5];
console.log(rotLeft2(arr, 2), rotLeft(arr, 2));
