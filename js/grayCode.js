//https://leetcode.com/problems/gray-code/

/**
 * @param {number} n
 * @return {number[]}
 */
const grayCode = (n) => {
  return backTrack(n, [0], [true]);
};

/**
 * @param {number} n
 * @param {number[]} elems
 * @param {boolean[]} mem
 * @return {number[]}
 */
const backTrack = (n, elems, mem) => {
  if (elems.length === 2 ** n) return elems;
  const current = elems[elems.length - 1];
  for (let i = 0; i < n; i++) {
    const candidate = current ^ (1 << i);
    if (!mem[candidate]) {
      return backTrack(
        n,
        [...elems, candidate],
        Object.assign(mem, { [candidate]: true })
      );
    }
  }
};

console.log(grayCode(12));
