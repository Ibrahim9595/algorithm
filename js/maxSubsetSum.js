/**
 * https://www.hackerrank.com/challenges/max-array-sum/problem?h_r=internal-search
 * @param {number[]} arr
 * @param {number} i
 * @returns {number}
 */
const maxSubsetSum = (arr, i = 0) => {
  const memo = [arr[0], arr[1] || 0];
  const solve = () => {
    for (let i = 2; i < arr.length; i++) {
      const max = Math.max(memo[i - 2], memo[i - 3] || 0);
      memo[i] = Math.max(arr[i] + max, max);
    }

    return Math.max(...memo) || 0;
  };

  return solve();
};

console.log(
  maxSubsetSum(
    `8006 -3505 -2450 -2399 -3423 8968`.split(" ").map((el) => parseInt(el))
  )
);
