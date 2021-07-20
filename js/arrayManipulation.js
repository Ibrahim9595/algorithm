/**
 *https://www.hackerrank.com/challenges/crush/problem?h_r=internal-search
 * @param {number} _
 * @param {number[][]} queries
 * @returns {number}
 */
const arrayManipulation = (_, queries) => {
  const ranges = queries.reduce(
    (p, c) =>
      Object.assign(p, {
        [c[0]]: c[2] + (p[c[0]] || 0),
        [c[1] + 1]: (p[c[1] + 1] || 0) - c[2],
      }),
    {}
  );

  return Object.keys(ranges).reduce(
    ({ max, acc }, k) => {
      acc = acc + ranges[k];
      max = max > acc ? max : acc;
      return { acc, max };
    },
    { max: 0, acc: 0 }
  ).max;
};

console.log(
  arrayManipulation(40, [
    [29, 40, 787],
    [9, 26, 219],
    [21, 31, 214],
    [8, 22, 719],
    [15, 23, 102],
    [11, 24, 83],
    [14, 22, 321],
    [5, 22, 300],
    [11, 30, 832],
    [5, 25, 29],
    [16, 24, 577],
    [3, 10, 905],
    [15, 22, 335],
    [29, 35, 254],
    [9, 20, 20],
    [33, 34, 351],
    [30, 38, 564],
    [11, 31, 969],
    [3, 32, 11],
    [29, 35, 267],
    [4, 24, 531],
    [1, 38, 892],
    [12, 18, 825],
    [25, 32, 99],
    [3, 39, 107],
    [12, 37, 131],
    [3, 26, 640],
    [8, 39, 483],
    [8, 11, 194],
    [12, 37, 502],
  ])
);
