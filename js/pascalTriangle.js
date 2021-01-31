//https://leetcode.com/problems/pascals-triangle/
/**
 * @param {number} numRows
 * @return {number[][]}
 */
const generate = (numRows) => {
  const C = [];
  for (let i = 0; i < numRows; i++) {
    C[i] = new Array(i + 1).fill(0);
    C[i][0] = 1;
    C[i][i] = 1;
    for (let j = 1; j < i; j++) {
      C[i][j] = C[i - 1][j - 1] + C[i - 1][j];
    }
  }

  return C;
};
