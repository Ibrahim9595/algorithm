/**
 *
 * @param {number} w width of the matrix
 * @param {number} h height of the matrix
 */
const initMemo = (w, h) =>
  new Array(w).fill(0).map((el) => new Array(h).fill(0));

/**
 * https://leetcode.com/problems/longest-common-subsequence/
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
const longestCommonSubsequence = (text1, text2) => {
  const memo = initMemo(text1.length + 1, text2.length + 1);
  for (let i = 1; i <= text1.length; i++) {
    for (let j = 1; j <= text2.length; j++) {
      const max = Math.max(...[memo[i - 1][j], memo[i][j - 1]]);
      memo[i][j] = text1[i - 1] === text2[j - 1] ? memo[i - 1][j - 1] + 1 : max;
    }
  }

  return memo[memo.length - 1][memo[0].length - 1];
};

// console.log(longestCommonSubsequence("abcde", "ace"));

/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
const longestCommonSubsequenceRec = (text1, text2) => {
  const memo = initMemo(text1.length, text2.length);
  const solve = (i, j) => {
    if (i < 0 || j < 0) return 0;

    if (memo[i][j]) return memo[i][j];

    if (text1[i] === text2[j]) {
      const solution = solve(i - 1, j - 1) + 1;
      memo[i][j] = solution;
      return solution;
    }

    const solution = Math.max(solve(i - 1, j), solve(i, j - 1));
    memo[i][j] = solution;
    return solution;
  };

  return solve(text1.length - 1, text2.length - 1);
};

// console.log(longestCommonSubsequenceRec("CAGATAGAG", "AGCGA"));

console.log(
  longestCommonSubsequenceRec("CAGATAGAGGG".repeat(100), "AGCGA".repeat(100))
);
