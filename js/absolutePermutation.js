//https://www.hackerrank.com/challenges/absolute-permutation/problem?h_r=internal-search
/**
 *
 * @param {number} n
 * @param {number} k
 * @returns {number[]}
 */
function absolutePermutation(n, k) {
  const mem = {};
  const res = [];
  for (let i = 1; i <= n; i++) {
    if (i - k > 0 && !mem[i - k] && i + k <= n && !mem[i + k]) {
      res.push([i - k, i + k]);
    } else if (i - k > 0 && !mem[i - k] && !(i + k <= n && !mem[i + k])) {
      res.push(i - k);
      mem[i - k] = true;
    } else if (!(i - k > 0 && !mem[i - k]) && i + k <= n && !mem[i + k]) {
      res.push(i + k);
      mem[i + k] = true;
    } else return [-1];
  }

  return res.map((el) => {
    if (typeof el === "number") return el;
    if (!mem[el[0]]) {
      mem[el[0]] = true;
      return el[0];
    }
    if (!mem[el[1]]) {
      mem[el[1]] = true;
      return el[1];
    }
  });
}

console.log(absolutePermutation(100000, 25));
