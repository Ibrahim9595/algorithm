/**
 *
 * @param {number[][]} queries
 */
const freqQuery = (queries) => {
  //   const operations = [
  //     (m, n) => Object.assign(m, { [n]: (m[n] || 0) + 1 }),
  //     (m, n) => Object.assign(m, { [n]: (m[n] || 1) - 1 }),
  //     (m, n) => Object.keys(m).some((k) => m[k] === n),
  //   ];
  //   console.log(
  //     count,
  //     JSON.stringify(
  //       Object.values(m).reduce((p, c) => ({ ...p, [c]: (p[c] || 0) + 1 }), {})
  //     )
  //   );
};

const fs = require("fs");

const res = freqQuery(
  fs
    .readFileSync("../data.txt")
    .toString()
    .split("\n")
    .map((el) => el.split(" ").map((a) => parseInt(a)))
);
