//https://www.hackerrank.com/challenges/picking-numbers/problem
/**
 *
 * @param {number[]} a
 * @returns {number}
 */
function pickingNumbers(a) {
  const m = a.reduce((p, c) => ({ ...p, [c]: (p[c] || 0) + 1 }), {});
  const keys = Object.keys(m).map((el) => parseInt(el));
  console.log(m);
  return keys.reduce(
    (p, _, i) =>
      i >= keys.length - 1 || Math.abs(keys[i] - keys[i + 1]) !== 1
        ? Math.max(p, m[keys[i]])
        : Math.max(m[keys[i]] + m[keys[i + 1]], p),
    -1
  );
}
const s = pickingNumbers(
  [
    "4",
    "97",
    "5",
    "97",
    "97",
    "4",
    "97",
    "4",
    "97",
    "97",
    "97",
    "97",
    "4",
    "4",
    "5",
    "5",
    "97",
    "5",
    "97",
    "99",
    "4",
    "97",
    "5",
    "97",
    "97",
    "97",
    "5",
    "5",
    "97",
    "4",
    "5",
    "97",
    "97",
    "5",
    "97",
    "4",
    "97",
    "5",
    "4",
    "4",
    "97",
    "5",
    "5",
    "5",
    "4",
    "97",
    "97",
    "4",
    "97",
    "5",
    "4",
    "4",
    "97",
    "97",
    "97",
    "5",
    "5",
    "97",
    "4",
    "97",
    "97",
    "5",
    "4",
    "97",
    "97",
    "4",
    "97",
    "97",
    "97",
    "5",
    "4",
    "4",
    "97",
    "4",
    "4",
    "97",
    "5",
    "97",
    "97",
    "97",
    "97",
    "4",
    "97",
    "5",
    "97",
    "5",
    "4",
    "97",
    "4",
    "5",
    "97",
    "97",
    "5",
    "97",
    "5",
    "97",
    "5",
    "97",
    "97",
    "97",
  ].map((el) => parseInt(el))
);

console.log(s);
