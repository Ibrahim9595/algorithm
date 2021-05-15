/**
 *https://www.hackerrank.com/challenges/minimum-swaps-2/problem?h_r=internal-search
 * @param {number[]} arr
 * @returns {number}
 */
const minimumSwaps = (arr) => {
  const sorted = arr
    .map((el, i) => ({ el, i }))
    .sort(({ el: a }, { el: b }) => a - b);

  let s = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== sorted[i].el) {
      s++;
      let temp = arr[i];
      arr[i] = arr[sorted[i].i];
      arr[sorted[i].i] = temp;
      sorted[temp - 1].i = sorted[i].i;
    }
    // console.log(arr, s, sorted);
  }

  return s;
};

console.time("time");
const testCase = `1 3 5 2 4 6 7`.split(" ").map((el) => parseInt(el));
console.log(minimumSwaps(testCase));
console.timeEnd("time");
