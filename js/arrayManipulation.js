/**
 *https://www.hackerrank.com/challenges/crush/problem?h_r=internal-search
 * @param {number} _
 * @param {number[][]} queries
 * @returns {number}
 */
const arrayManipulation = (_, queries) => {
  // This represent the changes in the ranges
  // example 1 => 2 will have +100 at 1 and -100 at 3 because after 3 the value is 0
  // if we have +100 at 3 => 5 the 3 will be 0
  // this will prevent the max value from becoming 200 at 3 which is wrong
  const ranges = queries.reduce(
    (p, c) =>
      Object.assign(p, {
        // add the +value at the beginning
        [c[0]]: c[2] + (p[c[0]] || 0),
        // remove the value at the end
        [c[1] + 1]: (p[c[1] + 1] || 0) - c[2],
      }),
    {}
  );

  // Aggregate the changes and get the maximum value within the transactions
  // The last value for acc should be 0
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
  arrayManipulation(3, [
    [1, 1, 100],
    [2, 5, 100],
    [3, 4, 100],
  ])
);
