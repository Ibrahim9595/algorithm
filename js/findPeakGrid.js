/**
 * @param {number[][]} mat
 * @return {number[]}
 */
const findPeakGrid = (mat) => {
  const peakIndex = (row, col) => {
    const max = Math.max(
      (mat[row] || [])[col],
      (mat[row + 1] || [])[col] || -1,
      (mat[row - 1] || [])[col] || -1,
      (mat[row] || [])[col + 1] || -1,
      (mat[row] || [])[col - 1] || -1
    );

    if (max === (mat[row] || [])[col]) return [row, col];
  };

  for (let r = 0; r < mat.length; r += 2) {
    for (let c = 0; c < mat[0].length; c += 2) {
      const peak1 = peakIndex(r, c);
      const peak2 = peakIndex(r + 1, c);
      const peak3 = peakIndex(r, c + 1);
      const peak4 = peakIndex(r + 1, c + 1);

      if (peak1 || peak2 || peak3 || peak4)
        return peak1 || peak2 || peak3 || peak4;
    }
  }
};

console.log(
  findPeakGrid([
    [1, 2, 3, 4, 5, 6, 7, 8],
    [2, 3, 4, 5, 6, 7, 8, 9],
    [3, 4, 5, 6, 7, 8, 9, 10],
    [4, 5, 6, 7, 8, 9, 10, 11],
  ])
);
