/**
 * https://www.hackerrank.com/challenges/coin-change/problem
 * @param {number} n
 * @param {number[]} coins
 * @returns {number}
 */
const getWays = (n, coins) => {
  const memo = new Array(n).fill(0).reduce(
    (memo, _, i) =>
      Object.assign(memo, {
        [i + 1]:
          coins.reduce(
            ({ acc, m }, c) => {
              const res =
                memo[i + 1 - c] !== undefined && !m[c]
                  ? acc + memo[i + 1 - c]
                  : acc;
              m[i + 1 - c] = true;

              return { acc: res, m };
            },
            { acc: 0, m: {} }
          ).acc || undefined,
      }),
    { 0: 1 }
  );

  console.log(memo);
  //   const uniqueKeys = Object.keys(memo[memo.length - 1]).reduce(
  //     (p, c) =>
  //       Object.assign(p, {
  //         [c
  //           .split("")
  //           .sort((a, b) => parseInt(a) - parseInt(b))
  //           .join("")]: true,
  //       }),
  //     {}
  //   );
  //   return Object.keys(uniqueKeys).length;
};

console.log(getWays(10, [2, 3, 5, 6]));

// getWays(
//   250,
//   new Array(50).fill(0).map(() => Math.floor(1 + Math.random() * 50))
// );
