// https://www.hackerrank.com/challenges/non-divisible-subset/problem
/**
 * @param {number} k
 * @param {number[]} s
 */
const nonDivisibleSubset = (k, s) => {
  const sets = Object.keys(s.reduce((p, c) => Object.assign(p, { [c]: 1 }), {}))
    .map((el) => parseInt(el))
    .reduce((p, c) => Object.assign(p, { [c % k]: (p[c % k] || 0) + 1 }), {});

  return Object.keys(sets)
    .filter(
      (key) =>
        key === "0" ||
        2 * parseInt(key) === k ||
        sets[key] > (sets[k - parseInt(key)] || -1) ||
        (sets[key] === (sets[k - parseInt(key)] || -1) &&
          parseInt(key) > k - parseInt(key))
    )
    .reduce(
      (p, key) => p + (key === "0" || 2 * parseInt(key) === k ? 1 : sets[key]),
      0
    );
};

console.log(nonDivisibleSubset(4, [19, 10, 12, 10, 24, 25, 22]));
